"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webUrl = exports.webFragments = exports.webQueryParameters = exports.webSegment = exports.webAuthority = void 0;
const ArrayArbitrary_1 = require("./ArrayArbitrary");
const ConstantArbitrary_1 = require("./ConstantArbitrary");
const ConstantArbitrary_2 = require("./ConstantArbitrary");
const SpecificCharacterRange_1 = require("./helpers/SpecificCharacterRange");
const HostArbitrary_1 = require("./HostArbitrary");
const IntegerArbitrary_1 = require("./IntegerArbitrary");
const IpArbitrary_1 = require("./IpArbitrary");
const OneOfArbitrary_1 = require("./OneOfArbitrary");
const OptionArbitrary_1 = require("./OptionArbitrary");
const StringArbitrary_1 = require("./StringArbitrary");
const TupleArbitrary_1 = require("./TupleArbitrary");
function webAuthority(constraints) {
    const c = constraints || {};
    const hostnameArbs = [HostArbitrary_1.domain()]
        .concat(c.withIPv4 === true ? [IpArbitrary_1.ipV4()] : [])
        .concat(c.withIPv6 === true ? [IpArbitrary_1.ipV6().map((ip) => `[${ip}]`)] : [])
        .concat(c.withIPv4Extended === true ? [IpArbitrary_1.ipV4Extended()] : []);
    return TupleArbitrary_1.tuple(c.withUserInfo === true ? OptionArbitrary_1.option(HostArbitrary_1.hostUserInfo()) : ConstantArbitrary_2.constant(null), OneOfArbitrary_1.oneof(...hostnameArbs), c.withPort === true ? OptionArbitrary_1.option(IntegerArbitrary_1.nat(65535)) : ConstantArbitrary_2.constant(null)).map(([u, h, p]) => (u === null ? '' : `${u}@`) + h + (p === null ? '' : `:${p}`));
}
exports.webAuthority = webAuthority;
function webSegment() {
    const others = ['-', '.', '_', '~', '!', '$', '&', "'", '(', ')', '*', '+', ',', ';', '=', ':', '@'];
    return StringArbitrary_1.stringOf(SpecificCharacterRange_1.buildAlphaNumericPercentArb(others));
}
exports.webSegment = webSegment;
function uriQueryOrFragment() {
    const others = ['-', '.', '_', '~', '!', '$', '&', "'", '(', ')', '*', '+', ',', ';', '=', ':', '@', '/', '?'];
    return StringArbitrary_1.stringOf(SpecificCharacterRange_1.buildAlphaNumericPercentArb(others));
}
function webQueryParameters() {
    return uriQueryOrFragment();
}
exports.webQueryParameters = webQueryParameters;
function webFragments() {
    return uriQueryOrFragment();
}
exports.webFragments = webFragments;
function webUrl(constraints) {
    const c = constraints || {};
    const validSchemes = c.validSchemes || ['http', 'https'];
    const schemeArb = ConstantArbitrary_1.constantFrom(...validSchemes);
    const authorityArb = webAuthority(c.authoritySettings);
    const pathArb = ArrayArbitrary_1.array(webSegment()).map((p) => p.map((v) => `/${v}`).join(''));
    return TupleArbitrary_1.tuple(schemeArb, authorityArb, pathArb, c.withQueryParameters === true ? OptionArbitrary_1.option(webQueryParameters()) : ConstantArbitrary_2.constant(null), c.withFragments === true ? OptionArbitrary_1.option(webFragments()) : ConstantArbitrary_2.constant(null)).map(([s, a, p, q, f]) => `${s}://${a}${p}${q === null ? '' : `?${q}`}${f === null ? '' : `#${f}`}`);
}
exports.webUrl = webUrl;
