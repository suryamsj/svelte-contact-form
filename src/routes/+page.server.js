import { APPS_SCRIPT } from '$env/static/private';

/**
 * @param {number} ms
 */
async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();

        const response = await fetch(`${APPS_SCRIPT}`, {
            method: "POST",
            body: formData
        })
        const data = await response.json();

        await sleep(2000)

        if (data.result === 'success') return { success: true }

        return { success: false }
    }
};