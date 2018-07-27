# Harpjs Boilerplate

This is a starter-kit for building a static web sites dynamically. Perfect for small promotional or event site.
Check Harpjs for advance use like the [M. Shanken](https://github.com/mshanken/mshanken) site.

This Harp-Boilerplate tool works with a boostrap 4 theme by default.

Check out [harpjs for more info](http://harpjs.com/docs/).

## Welcome to version 2.

Not much change to it, it just now works under docker containers.

## Requirements

You only need docker [docker](https://www.docker.com/) to run this project. All components are inside so you don't need to install node, grunt, or harp in your local machine. Docker will intall everything in that container, you just have to work in your HTML, CSS and JS.

## How it works

### To start a new project

1. ```git clone git@github.com:mshanken/harp-boilerplate.git new-repo-name```
    
    a. Remove git ```rm -R .git```. then add to a new or already initiated repo that you want to update with in this tool (jump to step 2).

### To start from a project that uses this tool

    1. git clone git@github.com:mshanken/repo-name

2. cd into the project.

3. Create a folder in the css folder and name it _vendor ```mkdir _site/public/css/_vendor```

4. Create a folder in the ja folder and name it vendor ```mkdir _site/public/js/vendor```

5. _Optional_, create a new branch and start working from it.

## How to use avialable commands.

```docker-compose up -d``` builds the project in a docker container.<br>
Once that's done. Type this URL ```http://localhost:9000/``` in your browser you have a web site running.<br>
**Note:** There's sass bug running now (not the project though) in Bootstarp4 (which is used in here) so you might not able to see your page the frist time, for now to fix that, just open ```_site/public/css/_vendor/bootstrap.scss``` file and comment out line #51 (e.g ``` // @import "bower_components/bootstrap/scss/carousel";``` ) and them go back to your browser, refresh URL noted above or re-open.

```docker-compose exec web npm run browsersync``` starts browser-sync [http://localhost:3000/](http://localhost:3000/) hit ```Ctrl + P and Ctrl + Q``` to detach.<br>
You can also run [browser-sync](https://www.browsersync.io/), not running as default but you can just run the above command and now change its port to 3000 e.g [http://localhost:3000/](http://localhost:3000/)

```docker-compose exec web npm run compile``` compiles served site into static HTML in a folder "www"

**Ready to deploy?** 
```docker-compose exec web npm run gh-pages``` Once you are ready to deploy just move to gh-pages branch merge your branch and run ```docker-compose run web npm run gh-pages``` what this command does is compiled (if not compiled) then drops compiled files into root folder<br>
**Note:** this comand should be used in gh-pages branch only.

Run ```docker-compose exec web /bin/bash``` to access docker machine from terminal an run other grunt/npm comands.

```docker-compose stop``` to turn off the docker container.

```docker-compose down``` to remove this container, Always use this command after you are done with this repo.

**Note:** It's good practice to always turn container off when not using it.


## What's in here?
Once you have followed the initial steps check your new working directory _site/public folder to familiarize, everyhing you need to create a website is there, you can add more assets trough npm or bower if needs to.

Bootstrap 4.<br>
jqury latest (3^).<br>
HarpJS built-in preprocessing configured to work with a default theme.<br>
Sass (node-sass) as a css preprocessor.<br>
Web-server to preview your work on your browser.<br>
BrowserSync to preview your changes as you work with out refreshing your browser.<br>
You can use your own machine IP to check in your mobile (e.g [10.0.3.211:300](http://10.0.3.211:3000/)).<br>
gh-pages branch to compile your work into the root folder for github to render your static html.<br>
Google analitics and openGraph code ready to use, turned off by default.

---

## Version 1 (this version still in service, just move (checkout) to the sass branch)

## How it works
Before you start, make sure you have the following requirements for using this tool.

1. Ruby
2. Node
3. NPM
4. Harp js ```npm install harp -g```
5. Grunt (you can also run this locally, if prefer)
6. Bower  (you can also run this locally, if prefer)

To start a new project just clone the repo and run the following commands (remove git if you are planing to create as a new repo after you cloned ```rm -R .git``` to clear it first)

1. ```git clone git@github.com:mshanken/harp-boilerplate.git new-repo-name```

	a. Remove git if you want to add this tool into a new or already initiated repo ```rm -R .git```

	b. _Optional_, create a new branch and start working from it.
	
	c. <del>For a in progress project using this tool create a new branch and copy all its content in the root folder, commit and push the new branch, them move to your working branch and merge the new branch.</del>

2. ```npm install```<br>
**Note:** Because harp-js uses Ruby for sass and other features under the hood, you might see error logs in your screen, if that's the case, just run this ```npm install grunt-harp``` with sudo before the next command)
3. ```bower install```
4. ```mkdir _site/public/js/vendor```
5. ```npm start```<br>
**Note:** This command should run only once for every new project to bring all main components up.
6. ```grunt server```

Check [http://localhost:9000](http://localhost:9000) in your browser. That's all, start working in your project now.

If you want to run with browser-sync just type the following ```browser-sync start --proxy 'localhost:9000' --files '_site/public/**/*.jade, _site/public/**/*.md, _site/public/**/*.scss, _site/public/**/_data.json'``` (this will require you to open a new tap in your terminal as main server need to run at the same time ```grunt server```)

## list of commads
This is a list of commads at your dispose to create a simple static web-site. Enjoy it!

### ```grunt server```
Runs harp server from your harpjs working directory ```_site/```, after you run this command open your browser with this location http://localhost:9000 to preview it. Type ```ctrl+c``` to turn off the server.

### ```grunt compile```
Runs harp compile to generate the static HTML of your dinamic website.

### ```grunt static```
Like ```grunt server``` it runs another server but this one serves the generated HTML (compiled), this can help to review the generated HTML site. Open your browser with this url http://localhost:8800.

### ```grunt gh-pages```
This command will copy the generated HTML (compiled) version of your site at rooted level so it can be render at github gh-pages.

**NOTE:** this command should run once you are in the **_gh-pages_** branch only.

