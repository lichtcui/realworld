const cookieParser = process.server ? require("cookieparser") : undefined

export const state = () => ({
	user: null,
})

export const mutations = {
	setUser(state, data) {
		state.user = data
	},
}

export const actions = {
	// Unique action for Nuxt.js
	// Will start while re-rendering on server side
	// Init value & pass value to client side
	nuxtServerInit({ commit }, { req }) {
		let auth = null

		// has cookie in header
		if (req.headers.cookie) {
			const parsed = cookieParser.parse(req.headers.cookie)
			try {
				auth = JSON.parse(parsed.auth)
			} catch (err) {
				// No valid cookie found
			}
		}

		commit("setUser", auth)
	},
}
