<script>
	import { fade } from "svelte/transition";
	let showAll = false;
</script>
<style>
	#show-all-tik{
		 background-color: white;
		 padding: 5px 20px;
	}

</style>
<div class="bg-white p-10" id="toda-la-data">
	<article class="container mx-auto ">
		
			<div class="grid sm:grid-cols-2 xs:grid-cols-1 gap-8 mt-10 mb-10">
				<div class="flex items-center flex-wrap">
					<img src="excl_globo.png" alt="Signo de exclamación" class="w-12 sm:w-24"/>
					<h1 class="fushia-text uppercase ">
						Toda 
						<span class="text-black">la</span>
						data
					</h1>
				</div>
				
				<div class="ml-3">
					<h2 class="text-black uppercase  "> ESTAMOS EN TIK TOK para activar una convivencia digital positiva!</h2>
					<p class="fushia-text font-sans ">Subí un video y mencionanos en @corazonesymentes </p>
				</div>
			</div>
			
		
		<div class="grid grid-cols-1 md:grid-cols-3 gap-1 mt-10">
			<blockquote 
				class="tiktok-embed"
				cite="https://www.tiktok.com/@corazonesymentes/video/6958468814375881989"
				data-video-id="6958468814375881989"> 
					<section></section>
			</blockquote>
			<blockquote 
				class="tiktok-embed"
				cite="https://www.tiktok.com/@corazonesymentes/video/6954373530138053893"
				data-video-id="6954373530138053893"> 
					<section></section>
			</blockquote>
			
			<blockquote 
				class="tiktok-embed"
				cite="https://www.tiktok.com/@corazonesymentes/video/6953286503363579142"
				data-video-id="6953286503363579142" > 
					<section></section>
			</blockquote>
		</div>
		{#if !showAll}
		<div class="text-center">
			<button id="show-all-tik" class="border border-gray-800 border-solid" on:click={() => showAll = true}>
				Ver mas >>
			</button>
		</div>
		{/if}
		<div class="grid grid-cols-1 md:grid-cols-3 gap-1 mt-10 {!showAll ? 'hidden' : ''}" transition:fade={{ delay: 50, duration: 300 }} >
			<blockquote 
				class="tiktok-embed"
				cite="https://www.tiktok.com/@corazonesymentes/video/6951784224907152645"
				data-video-id="6951784224907152645" > 
					<section></section>
			</blockquote>
			<blockquote 
				class="tiktok-embed"
				cite="https://www.tiktok.com/@corazonesymentes/video/6950673518027705606"
				data-video-id="6950673518027705606" > 
					<section></section>
			</blockquote>
			<blockquote 
				class="tiktok-embed"
				cite="https://www.tiktok.com/@corazonesymentes/video/6948105586672274694"
				data-video-id="6948105586672274694" > 
					<section></section>
			</blockquote>
			<blockquote 
				class="tiktok-embed"
				cite="https://www.tiktok.com/@corazonesymentes/video/6945179190819933446" 
				data-video-id="6945179190819933446" >
				<section></section>
			</blockquote>
			<blockquote 
				class="tiktok-embed"
				cite="https://www.tiktok.com/@corazonesymentes/video/6943423751316983045"
				data-video-id="6943423751316983045"> 
					<section></section>
			</blockquote>
			<blockquote 
				class="tiktok-embed" 
				cite="https://www.tiktok.com/@corazonesymentes/video/6943419461844094213" 
				data-video-id="6943419461844094213"> 
				<section> 
				</section>
			</blockquote>
			<blockquote 
				class="tiktok-embed"
				cite="https://www.tiktok.com/@corazonesymentes/video/6943253691826801925" 
				data-video-id="6943253691826801925"> 
					<section></section>
			</blockquote>
		</div>
		<script async src="https://www.tiktok.com/embed.js"></script>
	</article>
</div>	