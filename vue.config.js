
module.exports = {

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



};