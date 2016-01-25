#Harpjs Boilerplate

This is a starter-kit for building static HTML sites dinamically.

Clone to create a new project. them run `npm start` and now you can start creating your own static site.

It comes with a bootstrap 3 theme though you can change that by creating a new theme, just follow the theme structure from the default theme. Them in the layout file change your new theme name from the default path.

Check out harpjs for more [info](http://harpjs.com/docs/)

#How it works
The following are the requirenments before you start a project

1. Node
2. NPM
3. Grunt

This is a static page site build with [Harpjs](http://harpjs.com/). Once you have the requirements installed you can now clone this repo or git pull to update. You can start working on it, a list of commads at your dispose. Enjoy it!

##```npm run start```
To install all projectdependencies.

##```grunt server```
Runs harp server from your harpjs working directory (_site), once you run this command open your browser with this location http://localhost:9000 to preview. Use ```ctrl+c``` to turn off the server.

##```grunt compile```
Runs harp compile, this command will generate the static HTML of your dinamic website.

##```grunt static```
Like ```grunt server``` it turns on a server but this one serves all generated HTML, this can help you to review the generated HTML site works. Open your browser with this url http://localhost:8800.

##```grunt gh-pages```
**NOTE:** this command should run at the **_gh-pages_** branch only.

This command will copy the compiled (HTML generated) version of your working site in the root folder so it can be render at gh-pages in the github site.
