export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.448d20ea.js","app":"_app/immutable/entry/app.e27f9c64.js","imports":["_app/immutable/entry/start.448d20ea.js","_app/immutable/chunks/scheduler.21408ac2.js","_app/immutable/chunks/singletons.db3b8369.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.e27f9c64.js","_app/immutable/chunks/scheduler.21408ac2.js","_app/immutable/chunks/index.5e2ba25c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
