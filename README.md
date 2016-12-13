#Harpjs Boilerplate

This is a starter-kit for building a static web site dinamically.

Clone to create a new project. them run `npm start` and now you can start creating your own static site.

It comes with a bootstrap 3 theme though you can change that by creating a new theme, just follow the theme structure from the default theme. Them in the layout file change your new theme name from the default path.

<strong>NEW:</strong> Harp-Boilerplate comes with theme-builder, just move to theme-builder branch to get this feature.

Check out harpjs for more [info](http://harpjs.com/docs/)

#How it works
The following are required before you start a project

1. Node
2. NPM
3. Grunt
4. Bower

To start a new project just clone the repo and run the following commands (remove git if you are planing to create as a new repo after you cloned ```rm -R .git``` to clear it first)

1. ```npm install``` (if you see error logs in your screen just prepend sudo)
2. ```bower install```
3. ```npm start``` 
4. Check [http://localhost:9000](http://localhost:9000) in your browser.
    a. If you want to run with browser-sync just type the following ```browser-sync start --proxy 'localhost:9000' --files '_site/public/**/*.jade, _site/public/**/*.md, _site/public/**/*.less, _site/public/**/_data.json'``` (this will require you to open a new tap in your terminal.)

This is a list of commads at your dispose to create a simple static web-site. Enjoy it!

##```grunt server```
Runs harp server from your harpjs working directory ```_site/```, after you run this command open your browser with this location http://localhost:9000 to preview it. Type ```ctrl+c``` to turn off the server.

##```grunt compile```
Runs harp compile to generate the static HTML of your dinamic website.

##```grunt static```
Like ```grunt server``` it runs another server but this one serves the generated HTML (compiled), this can help to review the generated HTML site. Open your browser with this url http://localhost:8800.

##```grunt gh-pages```
**NOTE:** this command should run at the **_gh-pages_** branch only.

This command will copy the generated HTML (compiled) version of your site at rooted level so it can be render at github gh-pages.

#What's in here?
One you have ran ```npm start``` check the _site/public folder (your working directory/folder) everyhing you need to create a website is there, you can add more assets trough bower if needs to.
By deafult it comes with a bootstarp theme, jquery 1.11, modernizr and HTML5 shim, for IE6-8 support of HTML5 elements.
You want to use jquery 2, instead of 1, just run ```npn run jquery-2``` and you should have it.

#How to work with it?
Well it has bootstrap variables.less along with theme.less files in the css forlder so just overwrite those as you pleased.

Check the _layout.ejs to start adding your own style, and follow harp-js convension. There's a defult theme architecture you want to check or follow out as well. You can add a new theme instead of modifying default theme so duplicate the default theme in the theme folder, rename itand now you have a new theme to play with. Keep in mind that you also need to change path to new theme instead of default in the layout file.

```bower install a-js-or-jquery-plugin --save``` to install a new vendor plugin/library them ```grunt bower``` to place new installed plugin/library inside vendor folder of the app.

By default, site comes with jquery 1.(latest) version installed, you can change to version 2 by just running ```npn run jquery-2```, you also need update the path to point to the update version in the template file.

#What's next?
TODO...
