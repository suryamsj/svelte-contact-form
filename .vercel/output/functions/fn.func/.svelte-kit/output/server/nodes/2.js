import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.69dd173c.js","_app/immutable/chunks/scheduler.21408ac2.js","_app/immutable/chunks/index.5e2ba25c.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.db3b8369.js"];
export const stylesheets = [];
export const fonts = [];
