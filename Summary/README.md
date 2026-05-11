# Lecture Summary (2024-25)

This is an [AI Generated](#prompt) summary of the lecture transcipts from the
2024-25 academic session.

## Overall Module Arc

Across the lectures, the module develops in a clear progression:

1. **Orientation and setup**
    - what the module is
    - what tools are needed
    - what the assessment expects
2. **Functional-programming foundations**
    - map/filter/reduce
    - higher-order functions
    - currying, composition, Ramda
3. **Game analysis and specification**
    - what a game is
    - how to represent game state
    - how to specify APIs before coding
4. **Web app construction**
    - HTML/CSS structure
    - DOM generation
    - reusable UI patterns
5. **Implementation and testing**
    - coding Connect 4 logic
    - specifying tests
    - implementing tests
    - test-driven development
6. **Refinement**
    - accessibility
    - UI polish
    - modular reuse
    - peer review / community feedback

So the course is not just “make a game in JavaScript”; it is really about learning to build a **well-specified, tested, documented, user-facing software artefact**.

---


## Summary Table

|File / Week|Inferred title|Main focus|Key concepts|Practical outcome|
|---|---|---|---|---|
|[Week 1.1](#week-11--module-introduction-and-setup)|Module introduction and setup|Overview of Computing 2|JavaScript, web apps, functional programming, assessment, environment setup|Students understand module structure and install tools|
|[Week 2.1](#week-21--spreadsheet-model-of-computation-map-filter-reduce)|Spreadsheet model of computation|Functional list processing|map, filter, reduce, debugging, floating-point issues|Spreadsheet ideas translated into JavaScript arrays|
|[Week 2.2](#week-22--thinking-about-games)|Thinking about games|Analysing games before coding|game types, game state, finite state machines, pure functions|Students learn to describe games as states and transitions|
|[Week 2.3](#week-23--web-app-project-structure)|Web app project|Project structure and tooling|HTML/CSS/JS roles, module types, GitHub Classroom, run configurations|Students understand how web app files fit together|
|[Week 3.1](#week-31--functional-array-methods-in-more-depth)|Functional array methods|Deeper use of JS functional style|higher-order functions, currying, reduce, descriptive coding style|More idiomatic JS functional programming|
|[Week 3.2](#week-32--specifying-the-connect-4-module)|Connect 4 module specification|API and abstraction design|representation choices, public API, slots/discs/grid concepts|Students sketch module interfaces before implementation|
|[Week 3.3](#week-33--starting-the-user-interface)|Starting the UI|First HTML/CSS game UI scaffold|layout structure, semantic HTML, aspect ratio, absolute positioning|Basic Lights Out interface layout created|
|[Week 4.1](#week-41--ramda-functions)|Ramda functions|Functional programming library use|Ramda, composition, pipe, data-last, point-free style|Students gain more expressive functional tools|
|[Week 4.2](#week-42--module-documentation)|Module documentation|JSDoc and API communication|namespaces, custom types, auto-generated docs, documenting interfaces|Students learn to produce module documentation|
|[Week 4.3](#week-43--generating-the-ui)|Generating the UI|Building UI dynamically in JS|DOM creation, event hooks, reusable UI, state-to-DOM mapping|Lights Out/Connect 4 UI generated programmatically|
|[Week 5.1](#week-51--coding-connect-4)|Coding Connect 4|Implementing game logic|decomposition, abstraction levels, grid operations, win logic|Core Connect 4 functionality begins to take shape|
|[Week 5.2](#week-52--specifying-unit-tests)|Specifying unit tests|Writing tests as specifications|given/when/then, arrange/act/assert, behavioural test design|Test suite structure defined before code|
|[Week 5.3](#week-53--ui-refinement)|UI refinement|Improving visual quality|CSS polishing, variables, inspector workflow|Lights Out UI becomes more game-like|
|[Week 6.2](#week-62--implementing-tests)|Implementing tests|Executable unit tests|assertions, deep equality, setup hooks, pure-module testing|Unit tests become runnable and informative|
|[Week 6.3](#week-63--accessibility)|Accessibility|Inclusive UI design|keyboard control, focus, tabindex, WCAG, Axe audits|Game becomes usable without a mouse|
|[Week 7.1](#week-71--test-driven-development)|Test-driven development|Red–green–refactor workflow|TDD, shallow/deep copy, cloning, refactoring discipline|Students see testing as a development method|
|[Week 7.2](#week-72--switching-the-ui)|Switching the UI|Reusing UI for another game|interface/logic decoupling, swapping game modules|Lights Out UI adapted to Connect 4 logic|

---

## Lecture Summaries

### Week 1.1 — Module Introduction and Setup

This first lecture introduces **Computing 2** as a second-year module focused on **JavaScript**, **web apps**, and **functional programming**. The lecturer contrasts it with Computing 1: instead of mainly writing code for your own scientific work, you are now building software **for other users**, so usability, reliability, documentation, specification, and testing matter as much as raw coding. The module centres on building a **turn-based board-game web app** plus a separate **game logic module**.

Key ideas introduced:

- JavaScript as the **language of the web**
- distinction between **module/game logic** and **web interface**
- emphasis on **functional core, imperative shell**
- assessment split across:
    - game/module implementation
    - **specification/API design**
    - **unit tests**
    - **documentation**
    - web app/UI
- student support via Teams, Ed, Mentimeter, and live coding
- practical environment setup using **VS Code**, **Firefox Developer Edition**, **Node.js**, GitHub Classroom

The lecturer also gives a mini-history of **JavaScript**, warning that it contains many “good parts” but also many pitfalls, so code quality tools like **JSLint** will be used to enforce a disciplined subset of the language.

---

### Week 2.1 — Spreadsheet Model of Computation: Map, Filter, Reduce

This lecture introduces **functional array methods** through a familiar analogy: **spreadsheets**. The lecturer shows how spreadsheet operations correspond to programming transformations over lists, especially:

- **Map**: apply a function to every element in a list
- **Filter**: keep only elements satisfying a condition
- **Reduce**: combine a list into a single value

Examples include:

- turning an integer range into values for plotting a Gaussian
- generating party invitations from structured friend data
- filtering students by elective module
- summing numbers or concatenating strings

The lecture then translates these spreadsheet patterns into **JavaScript**, showing how arrays support `.map()`, `.filter()`, and `.reduce()`. It also introduces basic **debugging with Node.js and VS Code**, including breakpoints and the debug console. A useful aside covers **floating-point precision issues** in JavaScript, explaining why decimal arithmetic can behave unexpectedly.

Overall, this session establishes a functional-programming mindset: describe **what transformation you want**, not just the step-by-step loop mechanics.

---

### Week 2.2 — Thinking about Games

This session explores what kinds of games fit the module brief and how to **analyse games as systems** before coding them. The lecturer discusses dimensions along which games differ:

- number of players
- turn-based vs simultaneous
- deterministic vs random
- perfect vs imperfect information
- symmetric vs asymmetric play
- player vs environment

Using examples such as chess, battleships, snakes and ladders, Tetris, and Conway’s Game of Life, the lecture broadens the notion of a “turn-based board game” and encourages thoughtful interpretation of the brief.

The second half focuses on **representing game state**. Using **Connect 4**, the lecturer explains:

- a game needs a **state representation**
- operations on the state should return either:
    - a **new state**, or
    - information about the state
- these operations should ideally be **pure**, deterministic, and free of side effects
- illegal moves should not produce invalid states

The lecture finishes by modelling Connect 4 as a **finite state machine**, identifying states like:

- empty board
- player 1 to move
- player 2 to move
- player 1 wins
- player 2 wins
- draw

This helps students reason about what functions their module should expose.

---

### Week 2.3 — Web App Project Structure

This lecture explains the structure of the **web app project** and how the pieces fit together technically. Using a minimal example web app, the lecturer walks through:

- the role of `index.html`
- styling with CSS
- browser-side JavaScript in `main.js`
- helper modules such as a string reversal module
- tests and test files
- multiple run/debug configurations in VS Code

A key theme is the difference between:

- **browser main files**
- **browser modules**
- **test files**
- **pure JavaScript modules**

The lecturer emphasises separation of concerns:

- **HTML** defines structure/content
- **CSS** defines appearance
- **JavaScript** defines behaviour
- modules should encapsulate logic independently of interface

Students are also asked to ensure their **GitHub Classroom repository** is correctly set up and usable. The session points them toward a JavaScript exercise based on a past Computing 1 exam as a way to practise syntax and logic transfer from Python.

---

### Week 3.1 — Functional Array Methods in More Depth

This lecture revisits **map, filter, and reduce**, but now with more emphasis on **how to code them idiomatically in JavaScript** and how to use them to structure thought. The lecturer works through examples such as:

- generating Gaussian values
- mailing invitations
- filtering students by subject
- summing digits
- combining lists of strings

Important conceptual points:

- `.map()` turns a single-item function into a whole-list function
- `.filter()` depends on a **predicate**
- `.reduce()` uses an **accumulator**
- JavaScript functions are **first-class values**
- returning functions enables **higher-order programming**
- partial application and currying make more flexible code

The lecture also introduces **return-early style**, descriptive naming, and the idea that top-level code should stay readable and domain-focused. It begins moving from simple list transforms toward more expressive functional composition.

---

### Week 3.2 — Specifying the Connect 4 Module

This session turns game analysis into an actual **module interface design**. Starting from the real-world Connect 4 rules, the lecturer extracts the terms and operations needed in code:

- grid
- columns/slots
- discs
- dropping a disc
- whose turn it is
- win conditions
- tie/full-grid conditions

The emphasis is not yet on implementation but on choosing a **representation** and an **API**. Several possible board representations are considered:

- array of rows
- array of columns
- ragged arrays
- move histories
- dictionaries/objects

The lecturer argues that representation choice affects how easy operations are, and that abstraction should hide those choices from the module user as much as possible.

This lecture is especially about:

- identifying **what functions the module should expose**
- naming them in language meaningful to a Connect 4 player
- separating **public API** from internal representation details

---

### Week 3.3 — Starting the User Interface

This lecture begins building the **web interface** for a game, using **Lights Out** as an example. The approach is deliberately interface-first:

1. sketch the desired UI
2. build the layout in HTML/CSS
3. only later wire it up to behaviour and game logic

The lecturer explains the relevant HTML structure:

- `header`
- `main`
- `aside`
- `div`
- `table`, `tr`, `td`

and uses CSS to build a rough layout:

- top header bar
- side information panel
- square central play area

The session covers:

- absolute positioning
- width/height calculations with CSS
- CSS variables
- aspect ratios
- margins, padding, and borders
- using garish temporary colours to visualise layout during development

The lecture strongly encourages separating:

- visual structure,
- styling,
- behaviour, so that the UI can later be reused or connected to different game logic.

---

### Week 4.1 — Ramda Functions

This lecture introduces **Ramda**, a functional programming library for JavaScript, to extend the built-in array methods. The lecturer’s main point is that the module is not really “about making a game” so much as using the game as a vehicle to demonstrate **functional programming skill**.

Key ideas:

- Ramda provides curried, composable versions of common operations
- **composition** and **piping** let you chain transformations clearly
- **data-last** design supports partial application
- `map` can be treated as a function transformer
- point-free style becomes possible

Examples include:

- composing scaling and Gaussian functions
- building invitation pipelines from lists of friends
- converting lists of words into full lyric strings

The lecture argues that functional style can make code more declarative and expressive, though it requires practice. Students are also pointed to Mozilla’s new curriculum pages as a supplementary way to learn JS/HTML/CSS fundamentals.

---

### Week 4.2 — Module Documentation

This lecture covers how to write **documentation for a module** using **JSDoc**. The lecturer demonstrates automatically generated documentation pages for the Connect 4 module and explains how structured comments can describe:

- function purpose
- parameters and their types
- return values
- namespaces/module membership
- custom types such as grid, column, disc, slot

The emphasis is that documentation is not an afterthought: it is part of the design process and part of the assessment. Students should be able to communicate module behaviour to another developer **without requiring them to read the source code**.

Important themes:

- documenting abstractions rather than just implementation
- defining types hierarchically
- using examples and descriptive comments
- configuring JSDoc generation
- understanding that users of a module care about its **interface**, not its internals

This session reinforces the module’s broader message that software engineering includes specification and communication, not just writing code.

---

### Week 4.3 — Generating the UI

This lecture moves from static HTML to **programmatically generating a game board UI** with JavaScript, again using **Lights Out** as the example. The lecturer shows how to:

- create DOM elements with `document.createElement`
- append them into the document tree
- generate a grid dynamically using loops/array methods
- store references to generated cells
- bind click handlers
- update CSS classes to reflect game state

Then the session swaps the Lights Out logic for **Connect 4 logic** to demonstrate modularity: the same basic UI machinery can be connected to a different game.

This is an important architectural lecture because it shows:

- how the UI and game logic are **decoupled**
- how a reusable UI scaffold can host different games
- how state representations in JS map onto DOM updates

---

### Week 5.1 — Coding Connect 4

This lecture starts real implementation of the **Connect 4 game logic**. The lecturer works from high-level game rules down into smaller helper problems, emphasising:

- short functions
- consistent abstraction level
- decomposition of bigger problems into smaller ones
- avoiding deeply nested logic where possible

Key functions discussed/implemented include:

- `emptyGrid`
- `drop`
- checking whether a column or grid is full
- whether the game has ended
- whether a player has won vertically/horizontally/diagonally
- whose turn it is

The session also revisits representations and explains how choices such as:

- list of columns
- list of rows
- list of moves
- ragged arrays change the ease of implementing different operations.

This lecture is very much about **building the Connect 4 core module incrementally**, while using functional patterns such as composition and data-last argument ordering.

---

### Week 5.2 — Specifying Unit Tests

This lecture is the conceptual companion to Week 6.2. It focuses first on how to **describe tests before implementing them**, especially in the form:

- **given**
- **when**
- **then**

or equivalently:

- **arrange**
- **act**
- **assert**

The lecturer builds a hierarchy of test descriptions for the `drop` function, such as:

- all other columns remain unchanged
- already-filled spaces remain unchanged
- no filled space appears above an empty space
- the lowest available space becomes the new disc
- the move only applies when the target column has free space and the game has not already ended

The lecture also discusses:

- why tests must be deterministic and trustworthy
- why one should never trust a test that has never been seen to fail
- how tests help define the module API as much as verify it

This session is more about **test specification as communication** than about code mechanics.

---

### Week 5.3 — UI Refinement

This lecture returns to the **Lights Out interface** and focuses on making it look like a real game rather than a debugging scaffold. Main topics:

- installing project dependencies with `npm install`
- CSS variable cleanup and organisation
- using the browser inspector for live styling experiments
- polishing colours, spacing, typography, borders, and layout
- moving magic numbers into CSS variables
- using classes such as `on` and `off` for state styling

The lecturer also demonstrates a more polished prior version of the UI and points out how accessibility and keyboard support will come later. The broader lesson is iterative refinement:

- first make it work,
- then make it understandable,
- then make it attractive.

---

### Week 6.2 — Implementing Tests

This lecture takes the test specifications and turns them into actual **executable tests**. It uses Node’s `assert` library plus test framework constructs like `describe`, `it`, and `before`.

The session covers:

- writing setup code for tests
- using `assert.strictEqual` and `assert.deepStrictEqual`
- understanding why object/array equality is tricky in JavaScript
- comparing data structures by value rather than by reference
- organising repeated setup with `before`
- making tests fail for the right reasons
- using test failures to guide implementation

The lecturer also explains why only the **pure module logic** should be unit tested:

- browser/UI code depends on the DOM and user interaction
- pure game modules are easier to test reliably in Node

This session ties together abstraction, representation, and testing in a practical way.

---

### Week 6.3 — Accessibility

This lecture is about making web apps **accessible**, using the Lights Out interface as an example. The first goal is to add **keyboard control** so the game no longer depends on a mouse. The lecturer demonstrates using:

- browser accessibility audits
- Axe dev tools
- `tabindex`
- keyboard event listeners
- focus styling
- visual focus indicators
- keyboard navigation with arrow keys and enter/space

The lecture also discusses:

- WCAG accessibility principles
- why accessibility benefits all users, not only disabled users
- colour contrast and colour blindness simulation
- the difference between browser/default accessibility features and custom enhancements

This session is both ethical and practical: accessibility is framed as good design, good engineering, and sometimes a legal requirement.

---

### Week 7.1 — Test-driven Development

This lecture introduces **test-driven development (TDD)** using the Connect 4 `drop` function. The lecturer explains the **red–green–refactor** cycle:

1. write a failing test
2. write minimal code to make it pass
3. refactor while keeping the test green

A major part of the session involves:

- showing how even a crude implementation can satisfy part of a test suite
- using failures to drive better design
- understanding shallow vs deep copying in JavaScript arrays/objects
- why immutable-style thinking is safer
- using Ramda’s `clone` and JS array methods like `.with()`

The lecture also launches logistics for peer review and reminds students that peer review and constructive feedback are worth marks.

This is one of the most software-engineering-focused sessions: less about algorithms, more about disciplined process.

---

### Week 7.2 — Switching the UI

This lecture shows how to **reuse a Lights Out-style UI** for **Connect 4**, reinforcing the separation between interface and logic. The lecturer:

- plugs Connect 4 logic into the existing UI scaffold
- adjusts board dimensions and CSS variables
- replaces Lights Out state updates with Connect 4 updates
- adds helper functions like reading a board position
- shows how one UI can be repurposed for another game

This is effectively a modularity demonstration:

- the visual shell can persist,
- while game logic can be swapped underneath it.

The lecture also includes reminders about upcoming **peer review**, and signals a shift from content delivery toward guided work and Q&A as the coursework deadline approaches.

---

## Prompt
This summary of the module's lecture content is AI generated.
I asked a Chat GPT-5.4 model on, [Imperial's dAIsy](https://daisy.imperial.ac.uk/), to summarise the 2024-25 lecture transcripts.

```
I'm going to paste in the transcripts of a number of lectures. Can you summarise each of them please and make a table summary of the whole set. They are in vtt format. Some don't have titles. One week is missing.
```

### Response
```
# Lecture Summaries

Thanks — I can do this. Since one week is missing and some files are untitled, I’ve treated each file as an individual lecture/session and inferred titles where needed.

---
```
A version of this document, which I have subsequently edited, then followed.
