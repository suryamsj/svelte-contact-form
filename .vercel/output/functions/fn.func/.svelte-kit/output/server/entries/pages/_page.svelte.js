import { c as create_ssr_component, d as add_attribute, f as add_classes, e as escape } from "../../chunks/ssr.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let loading = false;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<main class="container"><div class="info" data-svelte-h="svelte-1rm8a30"><h1 class="title">Form Testimoni</h1> <p class="description">Berikan pendapat anda, dengan mengisi form testimoni. Terima kasih.</p></div> <form class="form" method="post"><label for="nama" data-svelte-h="svelte-4c6580">Nama
			<input type="text" name="Name" id="nama" placeholder="Nama"> <small>Masukkan nama anda, contoh : John Doe</small></label> <label for="order" data-svelte-h="svelte-f7yby">Jenis Orderan
			<input type="text" name="Order" id="order" placeholder="Jenis Orderan"> <small>Masukkan jenis orderan anda, contoh : Website - Nambah fitur, Website - Membuat Sistem
				Akademik, dll</small></label> <label for="message" data-svelte-h="svelte-mssl3p">Testimoni
			<input type="text" name="Message" id="message" placeholder="Pesan"> <small>Masukkan testimoni anda, contoh : Pengerjaan cepat</small></label> <button type="submit"${add_attribute("aria-busy", loading, 0)} ${""}${add_classes("".trim())}>${escape("Kirim")}</button></form></main> ${``}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
