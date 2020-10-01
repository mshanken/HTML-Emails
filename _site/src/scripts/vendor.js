window.Modernizr = require('modernizr');
require('jquery');
require('popper.js');
require('bootstrap');

const imagesCtx = require.context('../images', true, /\.(png|jpg|jpeg|gif|ico|svg|webp)$/);
imagesCtx.keys().forEach(imagesCtx);
