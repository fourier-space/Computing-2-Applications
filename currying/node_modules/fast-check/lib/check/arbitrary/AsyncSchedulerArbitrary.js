"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schedulerFor = exports.scheduler = void 0;
const symbols_1 = require("../symbols");
const Arbitrary_1 = require("./definition/Arbitrary");
const Shrinkable_1 = require("./definition/Shrinkable");
const stringify_1 = require("../../utils/stringify");
const TextEscaper_1 = require("./helpers/TextEscaper");
class SchedulerImplem {
    constructor(act, taskSelector) {
        this.act = act;
        this.taskSelector = taskSelector;
        this.lastTaskId = 0;
        this.sourceTaskSelector = taskSelector.clone();
        this.scheduledTasks = [];
        this.triggeredTasks = [];
    }
    static buildLog(reportItem) {
        return `[task\${${reportItem.taskId}}] ${reportItem.label.length !== 0 ? `${reportItem.schedulingType}::${reportItem.label}` : reportItem.schedulingType} ${reportItem.status}${reportItem.outputValue !== undefined ? ` with value ${TextEscaper_1.escapeForTemplateString(reportItem.outputValue)}` : ''}`;
    }
    log(schedulingType, taskId, label, metadata, status, data) {
        this.triggeredTasks.push({
            status,
            schedulingType,
            taskId,
            label,
            metadata,
            outputValue: data !== undefined ? stringify_1.stringify(data) : undefined,
        });
    }
    scheduleInternal(schedulingType, label, task, metadata, thenTaskToBeAwaited) {
        let trigger = null;
        const taskId = ++this.lastTaskId;
        const scheduledPromise = new Promise((resolve, reject) => {
            trigger = () => {
                (thenTaskToBeAwaited ? task.then(() => thenTaskToBeAwaited()) : task).then((data) => {
                    this.log(schedulingType, taskId, label, metadata, 'resolved', data);
                    return resolve(data);
                }, (err) => {
                    this.log(schedulingType, taskId, label, metadata, 'rejected', err);
                    return reject(err);
                });
            };
        });
        this.scheduledTasks.push({
            original: task,
            scheduled: scheduledPromise,
            trigger: trigger,
            schedulingType,
            taskId,
            label,
            metadata,
        });
        return scheduledPromise;
    }
    schedule(task, label, metadata) {
        return this.scheduleInternal('promise', label || '', task, metadata);
    }
    scheduleFunction(asyncFunction) {
        return (...args) => this.scheduleInternal('function', `${asyncFunction.name}(${args.map(stringify_1.stringify).join(',')})`, asyncFunction(...args), undefined);
    }
    scheduleSequence(sequenceBuilders) {
        const status = { done: false, faulty: false };
        const dummyResolvedPromise = { then: (f) => f() };
        let resolveSequenceTask = () => { };
        const sequenceTask = new Promise((resolve) => (resolveSequenceTask = resolve));
        sequenceBuilders
            .reduce((previouslyScheduled, item) => {
            const [builder, label, metadata] = typeof item === 'function' ? [item, item.name, undefined] : [item.builder, item.label, item.metadata];
            return previouslyScheduled.then(() => {
                const scheduled = this.scheduleInternal('sequence', label, dummyResolvedPromise, metadata, () => builder());
                scheduled.catch(() => {
                    status.faulty = true;
                    resolveSequenceTask();
                });
                return scheduled;
            });
        }, dummyResolvedPromise)
            .then(() => {
            status.done = true;
            resolveSequenceTask();
        }, () => {
        });
        return Object.assign(status, {
            task: Promise.resolve(sequenceTask).then(() => {
                return { done: status.done, faulty: status.faulty };
            }),
        });
    }
    count() {
        return this.scheduledTasks.length;
    }
    async internalWaitOne() {
        if (this.scheduledTasks.length === 0) {
            throw new Error('No task scheduled');
        }
        const taskIndex = this.taskSelector.nextTaskIndex(this.scheduledTasks);
        const [scheduledTask] = this.scheduledTasks.splice(taskIndex, 1);
        scheduledTask.trigger();
        try {
            await scheduledTask.scheduled;
        }
        catch (_err) {
        }
    }
    async waitOne() {
        await this.act(async () => await this.internalWaitOne());
    }
    async waitAll() {
        while (this.scheduledTasks.length > 0) {
            await this.waitOne();
        }
    }
    report() {
        return [
            ...this.triggeredTasks,
            ...this.scheduledTasks.map((t) => ({
                status: 'pending',
                schedulingType: t.schedulingType,
                taskId: t.taskId,
                label: t.label,
                metadata: t.metadata,
            })),
        ];
    }
    toString() {
        return ('schedulerFor()`\n' +
            this.report()
                .map(SchedulerImplem.buildLog)
                .map((log) => `-> ${log}`)
                .join('\n') +
            '`');
    }
    [symbols_1.cloneMethod]() {
        return new SchedulerImplem(this.act, this.sourceTaskSelector);
    }
}
class SchedulerArbitrary extends Arbitrary_1.Arbitrary {
    constructor(act) {
        super();
        this.act = act;
    }
    generate(mrng) {
        const buildNextTaskIndex = (r) => {
            return {
                clone: () => buildNextTaskIndex(r.clone()),
                nextTaskIndex: (scheduledTasks) => {
                    return r.nextInt(0, scheduledTasks.length - 1);
                },
            };
        };
        return new Shrinkable_1.Shrinkable(new SchedulerImplem(this.act, buildNextTaskIndex(mrng.clone())));
    }
}
function scheduler(constraints) {
    const { act = (f) => f() } = constraints || {};
    return new SchedulerArbitrary(act);
}
exports.scheduler = scheduler;
function schedulerFor(customOrderingOrConstraints, constraintsOrUndefined) {
    const { act = (f) => f() } = Array.isArray(customOrderingOrConstraints)
        ? constraintsOrUndefined || {}
        : customOrderingOrConstraints || {};
    const buildSchedulerFor = function (ordering) {
        const buildNextTaskIndex = () => {
            let numTasks = 0;
            return {
                clone: () => buildNextTaskIndex(),
                nextTaskIndex: (scheduledTasks) => {
                    if (ordering.length <= numTasks) {
                        throw new Error(`Invalid schedulerFor defined: too many tasks have been scheduled`);
                    }
                    const taskIndex = scheduledTasks.findIndex((t) => t.taskId === ordering[numTasks]);
                    if (taskIndex === -1) {
                        throw new Error(`Invalid schedulerFor defined: unable to find next task`);
                    }
                    ++numTasks;
                    return taskIndex;
                },
            };
        };
        return new SchedulerImplem(act, buildNextTaskIndex());
    };
    if (Array.isArray(customOrderingOrConstraints)) {
        return buildSchedulerFor(customOrderingOrConstraints);
    }
    else {
        return function (_strs, ...ordering) {
            return buildSchedulerFor(ordering);
        };
    }
}
exports.schedulerFor = schedulerFor;
