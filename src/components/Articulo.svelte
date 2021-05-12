<script>
  import Document from './DocumentDownload.svelte';
  import documents from '../components/documents';
</script>
<div class="p-10 tech-back px-10 celeste-bg" style="background-image:url(background-tech.png)" id="libro">
	<article class="container mx-auto">
		<div class="grid grid-col-2">
			<img  src="logo-horizontal.png" alt="Corazones y mentes"/>
			<div></div>
		</div>
		<div>
			<h3 class="text-3xl mt-10 uppercase font-thin">
				<span class="text-white fushia-bg tracking-tighter">
					<span class="text-black">#</span>internet<span class="text-black">es</span>nuestro</span>
			</h3>
			<p class="mt-5 text-2xl font-sans">
				<span class="bg-white">
					Escribimos un libro para que podamos <br>
					contribuir a una nueva convivencia digital positiva y empática. <br>
					¡No usamos internet, estamos en él!
				</span>
			</p>
		</div>
		<a href="/documents/Corazones-y-mentes.pdf" download
		 	class="flex mt-10 hover:underline text-2xl" >
			<img width="65" src="cerebri.png"  alt="icono de cerebro"/>
			<strong class="ml-5">
				Descargá el libro <br> completo acá
			</strong>
		</a>
		<div class="grid grid-cols-1 md:grid-cols-3 mt-10">
			{#each documents as item, index}
				<Document title={item.title} url={item.url} chapter={index+1}/>
			{/each}
		</div>
	</article>
</div>
