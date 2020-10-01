
const configureModernizrLoader = () => {
  "use strict";
  
  return {
    filename: 'js/modernizr',
    noChunk: true,
    minify: {
      output: {
        comments: true,
        beautify: true
      }
    },
    "classPrefix": "",
    "options": [
      "addTest",
      "atRule",
      "domPrefixes",
      "hasEvent",
      "html5shiv",
      "html5printshiv",
      "load",
      "mq",
      "prefixed",
      "prefixes",
      "prefixedCSS",
      "setClasses",
      "testAllProps",
      "testProp",
      "testStyles"
    ],
    "feature-detects": []
  };
};
