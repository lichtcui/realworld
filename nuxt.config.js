module.exports = {
	router: {
		linkActiveClass: "active",
		extendRoutes(routes, resolve) {
			// remove default router
			routes.splice(0)

			const getRoute = (name, path, dir) => ({
				path: path || `/${name}`,
				name,
				component: resolve(__dirname, `pages/${dir || name}`),
			})

			// add custom router
			routes.push({
				path: "/",
				component: resolve(__dirname, "pages/layout"),
				children: [
					getRoute("home", "/"),
					getRoute("login"),
					getRoute("register", null, "login"),
					getRoute("profile", "/profile/:username"),
					getRoute("settings"),
					getRoute("editor"),
					getRoute("article", "/article/:slug"),
				],
			})
		},
	},
	server: {
		host: "0.0.0.0",
		port: 3000,
	},
	// 注册插件
	plugins: ["~/plugins/request.js", "~/plugins/dayjs.js"],
}
