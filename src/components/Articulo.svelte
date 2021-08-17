<script>
  import Document from './DocumentDownload.svelte';
  import documents from '../components/documents';
</script>
<div class="p-10 tech-back px-2 sm:px-10 celeste-bg" style="background-color:rgba(150, 120, 255, 0.3);" id="libro">
	<article class="container mx-auto">

		<div class="grid md:grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 gap-8 mb-10">
            <div class="fushia-bg p-3 flex items-center justify-center flex-col">                
                <div class="flex">
					<img width="40px" src="internet.png"  class="my-auto mr-4" alt="Ícono de internet"/>
					<h1 class="uppercase">
						<span class="text-white">
							<span class="text-black">#</span> internet <span class="text-black"> es</span> nuestro</span>
					</h1>					
				</div>
				<h3 class="uppercase tracking-widest text-black "> 
					¡No usamos internet, estamos en él!</h3>        
            </div>
            <div class="my-auto">
				<h4 class="mt-5 font-sans">
				Escribimos un libro para que podamos <br>
				contribuir a una nueva convivencia digital positiva y empática. 	
				</h4>
				<div class="flex justify-center sm:justify-between items-center flex-wrap mt-5">
					<h3 class= " uppercase">
					¿Querés el libro completo? 	
					</h3>
					<a href="/documents/Corazones-y-mentes.pdf" download
					class="py-3" ><span class="fushia-bg py-2 px-5 border hover:border-gray-800 border-solid">Descargá el libro</span>
					</a>
				</div>
			</div>
            
        </div>





		
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10">
			{#each documents as item, index}
				<Document title={item.title} url={item.url} chapter={index+1}/>
			{/each}
		</div>
	</article>
</div>
