#Harpjs Boilerplate

This is a starter-kit for building a static web site dinamically.

Clone to create a new project. them run `npm start` and now you can start creating your own static site.

<strike>It comes with a bootstrap 3 theme though you can change that by creating a new theme, just follow the theme structure from the default theme. Them in the layout file change your new theme name from the default path.</strike>

<strong>NEW:</strong> Harp-Boilerplate comes with theme-builder

Check out harpjs for more [info](http://harpjs.com/docs/)

#How it works
The following are required before you start a project

1. Node
2. NPM
3. Grunt
4. Bower

To start a new project just clone the repo and run the following commands 

1. ```npm start``` 
2. ```grunt start```
3. Check [http://localhost:9000](http://localhost:9000) in your browser.

This is a list of commads at your dispose to create a simple static web-site. Enjoy it!

##```npm start```
Will install project dependencies.

##```grunt start```
To make (bower) installed assets available in your project.

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
As mentioned it comens with bootstrap as a default theme, you can modify this theme by using the theme builder

Need another JS/Jquery library? install it with bower, use ```bower install jslibraryname --save``` them ```grunt bower``` to place new uplaoaded library in the vandor folder fo your site

By default, site comes with jquery 1.(latest) version installed, you can change to version 2 by just running ```npn run jquery-2```, you also need update the path to point to the update version in the template file.

#What's next?
TODO...
