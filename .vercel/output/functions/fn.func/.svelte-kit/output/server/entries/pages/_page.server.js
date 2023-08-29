async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const response = await fetch("https://script.google.com/macros/s/AKfycbySXg7LMRCgFdNpPBNnny8oQ-KRDSxj3TBD3iUeeA6nVsmmJqVjB6ZAqFtjNByLkCJtbw/exec", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    await sleep(2e3);
    if (data.result === "success")
      return { success: true };
    return { success: false };
  }
};
export {
  actions
};
