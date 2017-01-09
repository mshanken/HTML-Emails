#Harpjs Boilerplate

This is a starter-kit for building a static web site dynamically. Perfect for small promotional or event web-sites.
Check Harpjs for advance use like [M. Shanken](https://github.com/mshanken/mshanken).

<strong>NEW:</strong> Harp-Boilerplate works with boostrap 4 by default, move to "less branch" if you want to use less.

Check out [harpjs for more info](http://harpjs.com/docs/).

#How it works
Before you start, make sure you have the following requirements for using this tool.

1. Ruby
2. Node
3. NPM
4. Grunt (you can also run this locally, if prefer)
5. Bower  (you can also run this locally, if prefer)

To start a new project just clone the repo and run the following commands (remove git if you are planing to create as a new repo after you cloned ```rm -R .git``` to clear it first)

1. ```git clone git@github.com:mshanken/harp-boilerplate.git new-repo-name```
2. ```npm install```<br>
**Note:** Because harp-js uses Ruby for sass and other feautre under the hood in background, you might see error logs in your screen just run this ```npm install grunt-harp``` with sudo before the next command)
3. ```bower install```
4. ```mkdir _site/public/js/vendor```
5. ```npm start```<br>
**Note:** This command should run only once for every new project to bring all main components up.
6. ```grunt server```

Check [http://localhost:9000](http://localhost:9000) in your browser. That's all, start working in your project now.

If you want to run with browser-sync just type the following ```browser-sync start --proxy 'localhost:9000' --files '_site/public/**/*.jade, _site/public/**/*.md, _site/public/**/*.scss, _site/public/**/_data.json'``` (this will require you to open a new tap in your terminal as main server need to run at the same time ```grunt server```)

##list of commads
This is a list of commads at your dispose to create a simple static web-site. Enjoy it!

###```grunt server```
Runs harp server from your harpjs working directory ```_site/```, after you run this command open your browser with this location http://localhost:9000 to preview it. Type ```ctrl+c``` to turn off the server.

###```grunt compile```
Runs harp compile to generate the static HTML of your dinamic website.

###```grunt static```
Like ```grunt server``` it runs another server but this one serves the generated HTML (compiled), this can help to review the generated HTML site. Open your browser with this url http://localhost:8800.

###```grunt gh-pages```
This command will copy the generated HTML (compiled) version of your site at rooted level so it can be render at github gh-pages.

**NOTE:** this command should run once you are in the **_gh-pages_** branch only.

##What's in here?
Once you have followed the initial steps check your new working directory _site/public folder to familiarize, everyhing you need to create a website is there, you can add more assets trough npm or bower if needs to.

Bootstrap 4.<br>
jqury latest (3^).<br>
HarpJS built-in preprocessing configured to work with a default theme.<br>
Web-server to preview your work on your browser.<br>
BrowserSync to preview your changes as you work with out refreshing your browser.<br>
gh-pages branch to compile your work into the root folder for github to render your static html.<br>
Google analitics and openGraph code ready to use, turned off by default.
