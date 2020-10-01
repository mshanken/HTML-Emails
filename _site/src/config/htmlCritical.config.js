let path = require('path');

const configureHtmlCriticalLoader = () => {
  return {
    base: path.resolve(__dirname, '../public/_themes/default/partials/'),
    src: '_headingtags.ejs',
    dest: '_headingtags.ejs',
    inline: true,
    minify: true,
    extract: true,
    width: 375,
    height: 565,
    penthouse: {
      blockJSRequests: false,
    }
  }
}
