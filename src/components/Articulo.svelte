<script>
  import logo from '/static/logo-horizontal.png';
  import Document from '../components/DocumentDownload.svelte';
  import documents from '../components/documents';
	import backTech from '/static/background-tech.png';
</script>
<div class="bg-blue-100 p-10 tech-back" style="background-image:url({backTech})" >
	<article class="container">
		<img class="w-full" src={logo} alt="Corazones y mentes"/>
		<div>
			<h3 class="text-3xl mt-10 uppercase">
				<span class="text-white bg-purple-400 tracking-tighter">
					<span class="text-black">#</span>internet<span class="text-black">es</span>nuestro</span>
			</h3>
			<p class="mt-5 text-xl">
				<span class="bg-white">
					Creamos esta guía para que podamos contribuir <br>
					a una nueva convivencia digital positiva y empatica.<br>
					¡No usamos internet, estamos en él!
				</span>
			</p>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-3 mt-10">
			{#each documents as item, index}
				<Document title={item.title} url={item.url} chapter={index+1}/>
			{/each}
		</div>
	</article>
</div>
