# Frontend Challenges

This repo will provide you with challenges that will take you over essential frontend knowledge.


### Getting started

Begin by navigating to your IDE environment. This project requires that you have `nodejs`, `npm`, and another global dependency called `lr-http-server`.

#### Node & NPM

You can check if you have node installed by typing the following command in your terminal: 

```
> node -v
v9.10.1
```

If you have a node installed, the command should yield a version number like: `v9.10.1 ` (like above).

If you do not have `nodejs` or `npm` installed, please follow the instructions on the [nodejs](https://nodejs.org/en/download/current/) website.

#### Live Reload HTTP Server

In addition to `nodejs` and `npm` we need to install [Live Reload HTTP Server](https://www.npmjs.com/package/lr-http-server). 

This is an npm package that we need to install globally which will spin up a local http server for you to view your files on. In addition to that, it will watch for changes on your files and reload automatically to reflect any new changes.

Run the following command in your terminal from anywhere in your workspace. This will globally install the package so you can use it anywhere.

```
npm install -g lr-http-server
```

#### Cloning the Repo

Now that you have all the dependencies, we can start working on the challenges.

Navigate to the top most directory where you clone repositories. Clone the repository into your workspace by using: 

```
git clone $repo
```

Change directory into the cloned repo:

```
cd front-end-challenges
```

From here, you should see the challenges in each individual folder.

### Instructions

Each challenge will be isolated into a single directory. For example, challenge 1 is located in the `/challenge-1/` directory. To begin, `cd` into that directory.

For each specific challenge, read the specifications for completion of the challenge in the `README.md` and complete the requirements. The final.jpg file should be what the result of the requirements looks like.

#### Directory Structure

```
/css/                       // CSS Folder
    main.css                // Main external CSS file
/img/                       // Image Folder
    cat.jpg                 // Example Image
    cat@2x.jpg              // Example @2x Image
/js/                        // Javascript Folder
    main.js                 // Main external JS file
favicon.ico                 // Favicon
index.html                  // Main index file
README.md                   // README Requirements
final.jpg                   // Final result Image file 
```

#### Starting the reload server

From within the challenge directory, run the following command in your terminal to serve your files locally.

```
> lr-http-server

HTTP server listening on port 8080
Serving /Directory/front-end-challenges/lesson
Livereload listening on port 35729
Watching files:
```

To stop serving the files, simple use `CTRL + C` to stop the process. 