var postcss = require('postcss');
 
module.exports = postcss.plugin('myplugin', function myplugin(options) {
 
    return function (css) {
 
        options = options || {};
         

        // Processing code will be added here

        console.log("i'm plugin1");
        
 
    }
 
});