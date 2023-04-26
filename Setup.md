## Environment setup instructions ##
### Checklist ###
The [Week 1](https://github.com/fourier-space/Computing-2-Week-1) Repository
has a checklist for the items below, and also allows you to test that your setup
is working correctly.

### Node.js ###
Node.js is a platform for server-side javascript applications.
It is based on the V8 Engine found in Google Chrome with additional libraries
for webserver capabilities.
It additionally comes with a package manager, npm (Node Package Manager),
which we will use to install some dependencies for some of the extensions below.
It also provides an interactive shell for quick testing of javascript snippets.

Download and install the LTS version (i.e. 16.) of node from
https://nodejs.org/en/

To test the Node.js has installed correctly:
Type `node -v` Into a terminal

### Firefox Developer Edition ###
It is good practice to use a separate browser dedicated to web development.
Developer Edition browsers are one version ahead of standard releases and can be
installed alongside other browsers.
They keep a separate set of user settings, which will be convenient as browsers
handle javascript modules hosted on the file system differently from those
served by http, so we need to turn off one security setting, which you usually
wouldn’t do in your main browser.
We’ll use Firefox Developer Edition in this module as it has a good set of
development tools, integrates well with VSCode, and allows the filesystem
workaround above.

Generally speaking, you’ll want to test on a wide range of browsers,
and have development versions of each.
The latest versions of Firefox and Chrome are a good target but depending on
your application, you may wish to include others. For this module I’ll be
running your apps in Firefox when marking, so you’ll want to test for that
platform!

Download and install from https://www.mozilla.org/en-GB/firefox/developer/
Configure Firefox Developer Edition – Important!
Navigate to `about:config` in the address bar.
Find the `security.fileuri.strict_origin_policy` property and set it to `false`.

#### axe - Web Accessibility Testing ####
We will also use the *axe* extension to test the accessibility of our web apps.
Install this for firefox developer edition.

https://addons.mozilla.org/en-GB/firefox/addon/axe-devtools/

### VS Code ###
We will be using VS Code as the editor that we support and use for teaching in this module.
There’s a number of useful extensions that we’ll be using too.
You’re free to use whatever editor you prefer,
but you might have to solve any problems you run into yourself if you use a different one.

Download and install from https://code.visualstudio.com/

#### Debugger for Firefox extension ####
A debugger allows you to step through your code and inspect values of any variables as during execution. Integrating this with your editor lets you see your code in the place you wrote it. Since part of your programs will run in a web browser, the debugger and editor needs to attach to the browser.
Make sure Firefox Developer Edition is installed (above)
Install the Debugger for Firefox extension for VSCode https://marketplace.visualstudio.com/items?itemName=firefox-devtools.vscode-firefox-debug
Configure the extension settings, and set:
```
Firefox: Keep Profile Changes to true.
Firefox: Profile to dev-edition-default
```
Each workspace folder in vscode has its own debugger settings. This is set in the .vscode/launch.json file. 
A default launch.json is provided.

#### JSLint extension ####
The house style for your projects will be that they pass JSLint without error (https://jslint.com/help.html).
I recommend using the extension for VSCode which can automatically check your code and annotate errors inline.

Note: JSLint is not the same as JSHint or ESLint, though they all do similar things.

Make sure Node.js is installed (above)
Globally install the JSLint npm package

    Type into the command line:
* Mac & Linux: `sudo npm install -g jslint`
* Windows: `npm install -g jslint`

(a system restart may be needed if the system cannot find the npm command)
Install the JSLint extension for VSCode https://marketplace.visualstudio.com/items?itemName=ajhyndman.jslint
Configure the extension settings, add the following to settings.json
```
    "jslint.version": "es6",
    "jslint.options": {
        "browser": true,
        "devel": true,
        "node": true,
        "predef": ["describe", "it"]
    },
    "jslint.exclude": {
        "**/node_modules/**": true
    }
```

### JSDoc
We'll be using a tool called
JSDoc
to build documentation for our code.
This can be installed globally with npm.
    Type into the command line:
* Mac & Linux: `sudo npm install -g jsdoc`
* Windows: `npm install -g jsdoc`


#### Mocha Test Explorer ####
Just like in Python we are going to use unit tests to help to write code free of errors.
The framework we will use in Javascript is Mocha.
This has an integrated extension for vscode, that you can find from the marketplace.
https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-mocha-test-adapter

Install this extension.

Each project with tests will need a `.mocharc.json` file
to let it know which tests to select.
Once your workspace is set up. I use the following template.
````
{
    "spec": "./**/tests/*.test.js"
}
````
Which will look for all files named `[something].test.js` in any folder that is named `tests`.

### GitHub ###
You are reading this module handbook on GitHub.
Make sure to have your own account too.
You should have already set this up in Computing 1,
but in case you didn't you should make a GitHub Account.

#### GitHub Classroom ####
We will be using GitHub Classroom for submissions.
The link is given on the module blackboard page.
Use this to create a submission repository.
This is how we will mark the coursework.

**There is a README.md file there too.
Edit this file to add your CID**.

#### Module Repository ####
The repository that this handbook is in is
[fourier-space/Computing-2-Applications](https://github.com/fourier-space/Computing-2-Applications)

I will occasionally produce suplmementary notes, that I will direct you to,
These can be found here:
[fourier-space/Computing-2-Notes](https://github.com/fourier-space/Computing-2-Notes)

There are other repositories for each week's code, these will be released progressively.

### VSCode Workspace ###
We need to make a workspace for the activities that we will be doing this term.

1. In VSCode open a new folder. `File » Open Folder…`.
1. Next create a `Computing 2` folder in a location of your choosing.
1. Next, follow the instructions on https://code.visualstudio.com/docs/editor/github to clone both the module repo and your submission repo to this folder.

## Test your setup ##
You can open a subdirectory at any time using the `Open Folder…` command,
this is useful when you want to select a specific app to run.

Open the `Week 1 - Template for web apps` directory in the `Computing-2-Applications` repo.
Then run `Launch Webserver` configuration, this should then make a webserver that is in indication that all has gone well!

You'll also want to check if the Mocha Test explorer is running.
The first test should fail – see if you can fix it.
