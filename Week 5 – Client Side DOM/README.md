# Week 5 #
This week we have looked into constructing the UI for a web app.
We approached this task in two steps.

First by constructing an *inert* version of the app, 
in a representative state, i.e. with placeholder items,
to get an idea of the look and feel.

Then secondly, we hooked up the app with a javascript `main.js` that
controled its behaviour.
The `main.js` looked different in style to some of the functional modules that
we would also write.
One reason is this code was more *imperative*, it is *doing* something and it
is holding state.
And a second is that we relied heavily on functions that the browser provides us
from the `document` interface to the *Document Object Model* (DOM).
Contrast this to your functional modules, where there is no actions taken by
running the file, instead functions are added to the export;
There is little to no state, everything is set up as a data-flow from the input
to the output of functions; and we didn't rely on interfaces like `document`
because the module doesn't know where it's running, it could be on a browser
or a server, or both, so it just provides functionality to its own context.

We have kept encapsulation in our UI code as much as possible by strictly
separating out the responsiblities of html, css, and javascript.
It can be quite instructive to turn off one or both of the css and javascript
to see how the page acts independant of these parts.

## Exercises ##
The files we worked on are split between the **Week 4** folder,
which has the skeleton of the web-app in html, and is styled to position
its elements in css in *ice-cream colours*.

**Week 5** (This folder) has the same web app, but with a more finely tuned
stylesheet with colours we might actually choose,
and with javascript behaviour hooked up.

### html and css ###
#### Emoji bar ####
Starting in the week 4 code, modify the html and css to add a new feature,
a bar just above the message testarea where you could select emoji to send.
Remember in this first part, the bar doesn't need to *do* anything,
just look like an interface where you *might* select emoji.

You will need to change the positioning of existing elements to accomodate your
new feature.

### javascript ###
In the week 5 folder, there is the state of the web app as we got up to.
There are a number of changes we can make, both to the user interface and
experience is `main.js` and to the program logic in `robots.js`.

There is a heading `<h2 id="bot-title">` that is currently unused.
Modify the code, so that when you change bots, it changes the `textContent`
of that element to say `"You are speaking to Agree Bot"` or for whichever bot
you are talking to.

Modify the `onclick` method of the send button to clear out
the message textarea when it is pressed.

Add an `oninput` method to the textarea that detects when the user presses
`enter`.
When this happens call the `send_button.onclick` method so that it is
as if the user pressed the button.
Sometimes message apps let you write a multi-line message, you can add this
behaviour by detecting if the user pressed `enter`, but not also `shift`.

Add a new bot to `robots.js` and define new behaviour for it.

**Harder**: For each bot, save the history of the conversation (in `main.js`),
such that when you change bots, it displays the message history for only that bot,
and remembers what you said to it last.
