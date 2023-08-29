<script>
	import { enhance } from '$app/forms';
	import Modal from '$lib/components/Modal.svelte';

	let loading = false;

	let isOpen = false;

	function open() {
		isOpen = true;
	}

	const handleSubmit = () => {
		loading = true;
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					if (result.data.success) {
						open();
					}
					break;
				default:
					break;
			}
			loading = false;
			await update();
		};
	};
</script>

<svelte:head>
	<title>Testimonial</title>
	<meta name="description" content="Halaman untuk mengisi testimonial" />
</svelte:head>

<main class="container">
	<div class="info">
		<h1 class="title">Form Testimoni</h1>
		<p class="description">
			Berikan pendapat anda, dengan mengisi form testimoni berikut. Terima kasih.
		</p>
	</div>
	<form class="form" method="post" use:enhance={handleSubmit}>
		<label for="nama">
			Nama
			<input type="text" name="Name" id="nama" placeholder="Nama" />
			<small>Masukkan nama anda, contoh : John Doe</small>
		</label>
		<label for="order">
			Jenis Orderan
			<input type="text" name="Order" id="order" placeholder="Jenis Orderan" />
			<small
				>Masukkan jenis orderan anda, contoh : Website - Nambah fitur, Website - Membuat Sistem
				Akademik, dll</small
			>
		</label>
		<label for="message">
			Testimoni
			<input type="text" name="Message" id="message" placeholder="Pesan" />
			<small>Masukkan testimoni anda, contoh : Pengerjaan cepat</small>
		</label>
		<button type="submit" aria-busy={loading} class:waiting={loading} disabled={loading}
			>{loading ? 'Loading' : 'Kirim'}</button
		>
	</form>
</main>

{#if isOpen}
	<Modal bind:isOpen>
		<h1 slot="title">Berhasil</h1>
		<p slot="description">
			Data testimoni yang anda kirimkan sudah masuk, terima kasih karena sudah mengisi.
		</p>
	</Modal>
{/if}
