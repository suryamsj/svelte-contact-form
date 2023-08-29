

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.318cbdd3.js","_app/immutable/chunks/scheduler.21408ac2.js","_app/immutable/chunks/index.5e2ba25c.js"];
export const stylesheets = ["_app/immutable/assets/0.0e48d86d.css"];
export const fonts = [];
