const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
	lintOnSave:false,
	devServer:{
		proxy:{
			'/ajax1':{
				target:'https://i.maoyan.com',
				ws:true,
				changeOrigin:true,
				pathRewrite:{
					"^/ajax1":""
				}
			},
			'/api':{
				target:'https://i.maoyan.com',
				ws:true,
				changeOrigin:true,
			},
			'/hot':{
				target:'https://m.maoyan.com',
				ws:true,
				changeOrigin:true,
				pathRewrite:{
					"^/hot":""
				}
			},
			'/asgard':{
				target:'https://i.maoyan.com',
				ws:true,
				changeOrigin:true,
			},
			'/maoyansh':{
				target:'https://show.maoyan.com',
				ws:true,
				changeOrigin:true,
			},
		}
	}
})