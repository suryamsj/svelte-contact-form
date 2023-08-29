

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a1a9552c.js","_app/immutable/chunks/scheduler.21408ac2.js","_app/immutable/chunks/index.5e2ba25c.js","_app/immutable/chunks/singletons.db3b8369.js"];
export const stylesheets = [];
export const fonts = [];
