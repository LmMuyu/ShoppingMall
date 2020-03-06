module.exports = {
	//输出文件目录
	outputDir: process.env.NODE_ENV === "production" ? "dist" : "devdist",

	//文件别名
	configureWebpack: {
		resolve: {
			extensions: [],
			alias: {
				assets: "@/assets",
				common: "@/common",
				components: "@/components",
				network: "@/network",
				views: "@/views"
			}
		}
	},
	devServer: {
		//设置跨域
		//dependenciesapi
		proxy: {
			"/devApi": {
				target: "http://www.web-jshtml.cn/dependenciesapi/token", //API服务器的地址  http://www.web-jshtml.cn/api
				changeOrigin: true,
				pathRewrite: {
					"^/devApi": ""
				}
			}
		}
	}
};
