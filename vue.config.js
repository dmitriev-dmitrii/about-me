'use strict';

const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {

	publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/'
	,

	devServer: {
		open: true,
	},

	
	    // ипортирую scss с основными стилями и переменными
	css: {
		loaderOptions: {
			sass: {
				additionalData: `@import "@/scss/index.scss";`
			}
		}
	},
	    // 

// svg sprite
pluginOptions: {
	svgSprite: {
		dir: 'src/assets/img/svg',
		test: /\.(svg)(\?.*)?$/,
		loaderOptions: {
			extract: true,
			spriteFilename: 'img/icons.[hash:8].svg' // or 'img/icons.svg' if filenameHashing == false
		},
		pluginOptions: {
			plainSprite: true
		}    
	}    
}    

// end  svg sprite

};