# Computing 2: Applications – Module Handbook – 2020/21
![Computing 2 Logo](https://raw.githubusercontent.com/fourier-space/Computing-2-Applications/master/handbook/logo.png)
```json
{
    "Version": "2.2.0",
    "Updated": "2021-05-16"
}
```

## Teaching staff ##
### Module leadership ###

| ![Freddie Page](handbook/Freddie.jpg) | ![Hamed Haddadi](handbook/Hamed.jpg) |
|---|---|
| Dr Freddie Page | Dr Hamed Haddadi |
| Module Leader | Associate Module Leader |

### Teaching assistants ###
| ![Leila](handbook/Leila.png) | ![Robert](handbook/Robert.png) | ![Paula](handbook/Paula.png) | ![Thomas](handbook/Thomas.png) |  |
|---|---|---|---|---|
| Leila Al‑Azzawi | Robert Field | Paula Castillero Garcia | Thomas Godden | Nadav Grunberg |
| ![Chris](handbook/Chris.png) | ![Hannah](handbook/Hannah.png) | ![Anna](handbook/Anna.png) | ![Tianxiao](handbook/Tianxiao.png) | |
| Chris Kalogroulis | Hannah Knight | Anna Soligo | Tianxiao Wang |  |


## Module descriptor ##
**From the module specification:**
In Computing 2: Applications students will learn about application programming,
i.e. writing computer programs for end-users.
This module focuses on web applications and
students will learn technologies associated with this.
Students will be exposed to new computing paradigms
that build on from Computing 1,
such as functional programming and asynchronous programming.
Students will also learn about user interface and experience,
accessing and manipulating data sources, and client-server architectures.
By the end of the module, students will code their own web-app project
incorporating what they have learned.

### Learning outcomes ###
*On completion of this module, students will be better able to:*

**Coding (Reinforces S3,  K4):**  
Write computer applications for human interaction
using a set of modern paradigms.

**UX/UI (Introduces K2):**  
Design and implement user experiences and interfaces.

**Data (Introduces K1):**  
Manipulate data structures.

**Debugging (Reinforces S1, Introduces A1):**  
Debug their own programs, identifying, documenting, and solving software bugs.

**Best practice (Reinforces S1, Introduces A2):**  
Engage with industry/professional best practice in managing a coding project.

### Assignment brief ###
The deliverable you will produce for this module is a web app
with a client-server architecture.

The brief for what the app should do is open,
so long as it can target the assessment criteria meaningfully –
i.e. features implemented for this purpose are essential for the program
and can't trivially be refactored out.
You will define your own brief and describe it in a proforma
as part of the submission.

The front-end is a browser based client program that:
1. allows your users to interact with your program.

The back-end is a webserver that:
1. serves the client program.
1. interacts with the client via ajax.
1. processes data received from the client.

Your submission will be your code project on GitHub Classroom
along with the proforma.

**Deadline Friday 18th June 16:00**

### Learning and teaching strategy ###
This is a project based learning module with a
**100% individual coursework** authentic assessment.

The skills learned throughout the module will be assessed in the
final deliverable that students will frame to their own interests and ideas.

The assessment criteria are linked directly to the
module learning outcomes and are detailed below.

### Assessment criteria ###

| Criterion | Pass (D) | Excellent (A) |
|---|---|---|
| **Coding** | Produce a back-end server that serves a client program. | Project is appropriately structured into interacting components and modules. |
|  |  | Make use of functional style where applicable, incorporating purity. |
|  |  | Make use of asynchronous code, i.e. events, callbacks, promises. |
| **UX/UI** | Define a brief for the project that communicates the intention of the application (proforma). | Present an intuitive interface with suitable controls that communicate their intention. |
| **Data** | Exchange data between client and server programs using json. | Use functional list manipulation methods (map, reduce, etc.) to manipulate data structures. |
| **Debugging** | Describes the identification and resolution of a simple bug. | Documents the identification and resolution of subtle bugs i.e. edge and corner cases in a systematised way. |
|  | Use of unit tests for some functionality of the program. | Property tests are well constructed testing functionality rather than implementation. |
| **Best practice** | Adhere to the *Submission Constaints* below. | Conform to the ‘in-house coding style’ i.e. javascript files pass jslint without error. |
|  |  | The intention of the code is clear, i.e. by appropriate comments, interface, and naming. |
|  |  | Project separates structural (html), styling (css), and behavioural (javascript) code. |

| Assessment Criteria are marked as: |  |
|---|---|
| **Fail (F)** | if the work does not meet **all** the points of the Pass (D) descriptor. |
| **Pass (D)** | if the work meets all the points of the Pass (D) descriptor, but doesn't qualify for any higher grade. |
| **Good (C)** | if the work meets all the points of the Pass (D) descriptor, and **some** of the points of the Excellent (A) descriptor. |
| **Very Good (B)** | if the work meets all the points of the Pass (D) descriptor, and **most** of the points of the Excellent (A) descriptor. |
| **Excellent (A)** | if the work meets **all** of the points of the Excellent (A) descriptor. |
| **Exceptional (A٭)** | if the work meets all of the points of the Excellent (A) descriptor and is a level of quality higher than what would usually be expected for Excellent (A) work. |

Additionally, a further 5% bonus may be awarded at the discretion of the module leader for good citizenship in answering and asking questions, helping others, etc.

### Submission Constraints ###
Your submission must also conform to the following:

1. Your coding project must be written in Javascript for the server side component to be run on Node.js (14+).
2. You can only make use of the following external modules: `express`, `express-session`, `nedb`, `fast-check`, `mocha`.
3. Your webserver must be hosted on port `8080`, with the main page accessible at http://localhost:8080/.
4. The structure of you project should be that there is a `web-app` directory at the top level of your repository. Within this is a `server.js` which will be the main file that is run.

## Online learning ##
We’ll be using a variety of online learning tools,
some you will have used before.

### Timetabled sessions – Microsoft Teams ###
[MS Teams](https://teams.microsoft.com/l/channel/19%3a4690d55197304cb5810b2775109d7070%40thread.tacv2/General?groupId=360a72a3-35c9-421b-b6d0-da57998a0bbc&tenantId=2b897507-ee8c-4575-830b-4f8267c3d307)

The timetabled sessions in this module will be done on Teams.
I’ve set up a number of different rooms, The main room – General,
and a number of Tutor rooms, one for each Teaching Assistant,
You will be assigned to one of these to have support form one of our UTAs.
The main sessions will be in the General room as timetabled,
On Mondays and Tuesdays most weeks, and Friday in W1, W2, W5 for the Bank Holidays
Tutorial Sessions are on Wednesdays in Weeks 2–7 and Tuesday in Week 8.

### Catch up – Panopto, Google Drive ###
[Panopto Folder](https://imperial.cloud.panopto.eu/Panopto/Pages/Sessions/List.aspx#folderID=%2286571568-a454-4fc4-8f39-ac0100c8c407%22) • [Google Drive Folder](https://drive.google.com/drive/folders/11I-F3Lpnky5JvK1najLjOeKHpkUJEVR9?usp=sharing)
Timetabled sessions in the main room will be recorded.
After the session I will upload these to Panopto.
The lecture slides will be made available on Google Drive and Blackboard.

### Code repository – GitHub ###
It is also where all the code examples that I use in the timetabled sessions
will be linked on github.

### Code submission – GitHub Classroom ###
Github Classroom will be used for you to submit your project at the end of term.
To access github classroom, you will need to link your to your GitHub account.
Follow the links on [Blackboard](https://bb.imperial.ac.uk/webapps/blackboard/content/listContentEditable.jsp?content_id=_1809624_1&course_id=_23581_1) for the assignment and link your account to your
name then fork your repository.

### Resource repository – Blackboard ###
[Blackboard course page](https://bb.imperial.ac.uk/webapps/blackboard/content/listContentEditable.jsp?content_id=_1809624_1&course_id=_23581_1)

Links to all this, and access to some of the tools will be on Blackboard.

## Peer assessment ##
In this module, you will have the opportunity to engage in peer assessment.
This is a formative exercise, i.e. carries no credit.

For the peer assessment you will submit a draft version of your final project
on Github Classroom and you will be paired anonymously with another student
to mark each other’s work to the module’s assessment criteria.

The purpose of this exercise is that by seeing other people’s code and going
through the steps of marking it to the criteria,
you will learn more about your own approach to coding and how best to succeed in
the module.
The feedback you provide each other will also provide an important point of
reference for your project particularly for the user interface and experience
you present.

Peer assessment will happen in Week 7.
In the week, you will have time to prepare your draft submission for
assessment, and will have time to assess and write
feedback for your assigned project.
You will receive your feedback on Thursday in time for you to reflect on it for
the final submission.

## Environment setup instructions ##
### Node.js ###
Node.js is a platform for server-side javascript applications.
It is based on the V8 Engine found in Google Chrome with additional libraries
for webserver capabilities.
It additionally comes with a package manager, npm (Node Package Manager),
which we will use to install some dependencies for some of the extensions below.
It also provides an interactive shell for quick testing of javascript snippets.

Download and install the LTS version (i.e. 14.) of node from
https://nodejs.org/en/

To test the Node.js has installed correctly:
Type `$ node -v` Into a terminal

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
Navigate to about:config in the address bar.
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
Firefox: Executable to the path to Firefox Developer Edition
Firefox: Keep Profile Changes to true.
Firefox: Profile to dev-edition-default
```
Each workspace folder in vscode has its own debugger settings. This is set in the .vscode/launch.json file. 
First start a new workspace if you’re not already in one.
In the Explorer tab, click “Open Folder” and either make a new folder.
Make a new empty file, i.e. index.html
To access this, go to the Run panel from the sidebar, and then click the gear (Open Launch.json) icon.

The following configuration is good to start:
```
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "fx-dev debug",
      "type": "firefox",
      "request": "launch",
      "reAttach": true,
      "reloadOnAttach": true,
      "url": "http://localhost:8080/index.html",
      "webRoot": "${workspaceFolder}/web-app/static",
      "preferences": {
        "security.fileuri.strict_origin_policy": false
      }
    }
  ]
}
```

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
}
```

#### Mocha Test Explorer ####
Just like in Python we are going to use unit tests to help to write code free of errors.
The framework we will use in Javascript is Mocha.
This has an integrated extension for vscode, that you can find from the marketplace.
https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-mocha-test-adapter

Install this extension.

To link this up to each of your projects, you should install the Mocha node extension too.
We can do this globally, or per project. To do it globally run,

    Type into the command line:
* Mac & Linux: `sudo npm install -g mocha fast-check`
* Windows: `npm install -g mocha fast-check`

You can also do this per project too using the `--save-dev` flag instead of the `-g` flag.

You'll notice we've also installed *fast-check*,
which is a property based testing library that we will be using here too.

Once your workspace is set up (below), each project with tests will need a `.mocharc.json` file
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
It is also the repository that hosts the weekly exercises, which will be released progressively.
In the next step we will link both repos to a VSCode folder.

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

## Additional resources: ##
1. Computing 2 Youtube playlist:  Here are a set of relevant videos I’ve curated. Some of these I’ll refer to directly, others are there for additional insight. https://www.youtube.com/playlist?list=PLIcJ6p7QvGT09pN6L3qvjkVNrhD3ghlux
1. MDN – Mozilla Developer Network: Comprehensive resource on all things web development. There’s not one landing page so to speak but prepend “mdn” to all your google searches!
https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web
1. CSS Tricks: Popular web development blog with some nice examples. https://css-tricks.com/
1. JSLint Help: Explanation for some of JSLint’s rules. https://jslint.com/help.html
1. Google Html/Css Style Guide: Google’s own style guide for html. We’ll follow these as much as possible. (An equivalent also exists for javascript, and is worth a read, but uses different conventions than we are following in this module.)
https://google.github.io/styleguide/htmlcssguide.html
1. Grumpy Website: Blog about bad UI implementations.
https://grumpy.website/
1. Javascript: The Good Parts, Douglas Crockford: A brilliant book that first discovered that javascript does indeed have good parts. It’s 12 years old but still stands up.
[Library Online Access](https://library-search.imperial.ac.uk/discovery/search?query=any,contains,crockford&search_scope=MyInst_and_CI&sortby=date_d&vid=44IMP_INST:ICL_VU1&facet=frbrgroupid,include,9035110810864614931&mode=Basic&offset=0)

## Change log ##
* 2.0.0: Initial release for 2020/21.
* 2.1.0: Released assessment criteria.
