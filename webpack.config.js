let Encore = require('@symfony/webpack-encore');
let path = require('path');
let glob = require("glob-all");

let PurgecssPlugin = require("purgecss-webpack-plugin");
let HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");
let HtmlCriticalConfig = require('./_site/src/config/htmlCritical.config');

/*
 * Configuring loaders plugin
 * =====
 */
const configurePurgecssLoader = () => {
  return {
    // Specify the locations of any files you want to scan for class names.
    paths: glob.sync([
      path.join(__dirname, "_site/public/**/*.ejs"),
      path.join(__dirname, "_site/public/**/*.md"),
      path.join(__dirname, "_site/public/**/*.js")
    ]),
    whitelist: [],
    /*extractors: [
      {
        extractor: [TailwindExtractor],
        // Specify the file extensions to include when scanning for
        // class names.
        extensions: ["html", "js"]
      }
    ]*/
  };
};

const configureHtmlCriticalLoader = () => {
  return {
    base: path.resolve(__dirname, '_site/public/_themes/default/partials/'),
    src: '_main.ejs',
    dest: '_styles.ejs',
    inline: true,
    minify: true,
    extract: true,
    width: 375,
    height: 565,
    penthouse: {
      blockJSRequests: false,
    }
  };
};

// Custom PurgeCSS extractor for Tailwind that allows special characters in
// class names.
//
// https://github.com/FullHuman/purgecss#extractor
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

/*
 *  Configuring Rules
 *  =====
 */
Encore
  // the project directory where all compiled assets will be stored (web, public or public_html)
  .setOutputPath('_site/public')

  // the public path used by the web server to access the previous directory
  .setPublicPath('/')

  // creating assets
  .addEntry('js/app', ['./_site/src/scripts/app.js'])
  .addEntry('js/vendor', './_site/src/scripts/vendor.js')
  .addStyleEntry('css/theme', ['./_site/src/styles/theme.scss'])

  // Set and create a modernizr file
  .addLoader({
    test: /\.modernizrrc.js$/,
    loader: [ 'modernizr-loader' ]
  })
  .addLoader({
    test: /\.modernizrrc(\.json)?$/,
    loader: [ 'modernizr-loader', 'json-loader' ]
  })

  // $ is avaible for jQuery
  .autoProvidejQuery({
    $: 'jquery',
    jQuery: 'jquery'
  })

  // will require an extra script tag for runtime.js
  // but, you probably want this, unless you're building a single-page app
  .enableSingleRuntimeChunk()
  // .splitEntryChunks()

  // .configureCssLoader()

  // allow sass/scss files to be processed
  .enableSassLoader()

  // autprefixer/postcss plugin
  /*.enablePostCssLoader((options) => {
    options.config = {
      // the directory where the postcss.config.js file is stored
      path: './_site/src/config/'
    };
  })*/

  // Enables sourcemaps on development
  .enableSourceMaps(!Encore.isProduction())

  // create hashed filenames (e.g. app.abcd1234.css) [cache buster]
  .enableVersioning(Encore.isProduction())

  // show OS notifications when builds finish/fail
  .enableBuildNotifications()

  // enablig plugings
  .addPlugin(new HtmlCriticalWebpackPlugin(configureHtmlCriticalLoader()))
  .addPlugin(new PurgecssPlugin(configurePurgecssLoader()));

// make sure to add the cache buster for prod build
if (Encore.isProduction()) {
  /* console.log('In prod: ',process.env.WEB_ASSETS_DIR); */
  Encore.configureFilenames({
    images: 'images/[name].[hash:8].[ext]',
    fonts:  'fonts/[name].[hash:8].[ext]'
  });
  // Re-set publicPath on production
  // Encore.cleanupOutputBeforeBuild()
  Encore.setPublicPath(process.env.WEB_ASSETS_DIR);
  // guarantee that the keys in manifest.json are *still*
  // prefixed with assets/
  // (e.g. "assets/dashboard.js": "/dashboard.js")
  Encore.setManifestKeyPrefix('/');
  //TODO: Add uglify or anyother task on production only.
} else {
  /* console.log('In dev: no hash?'); */
  Encore.configureFilenames({
    images: 'images/[name].[ext]',
    fonts: 'fonts/[name].[ext]'
  });
}

// export the final configuration
var config = Encore.getWebpackConfig();

// Solving conflicts (alias) on modernizr
config.resolve.alias = {
  modernizr: path.resolve(__dirname, "./_site/src/config/.modernizrrc")
};

// console.log(config);
module.exports = config;