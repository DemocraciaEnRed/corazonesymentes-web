<script>
  import Kit from './Kit.svelte'
  import kits from './kits'
  
</script>
<div class="p-10" id="kit-de-herramientas">
  <article class="container text-center">
    <h1 class="uppercase text-4xl text-purple-400 mb-3">
      <span class="text-black">Kit</span>
      <span class="text-blue-200">De</span>
       Herramientas</h1>
    <h2>
      <span class="bg-purple-400 text-xl text-white p-2 uppercase text-bold">Articulos, podcast, reflexiones, videos y más.</span>
    </h2>
    <p class="text-bold mt-10 uppercase">Te compartimos este recursero con un poco de todo para habitar internet de forma segura, responsable y empática.</p>
    <div class="grid grid-cols-1 md:grid-cols-2">
      {#each kits as item}
        <Kit {...item} />
      {/each}
    </div>
  </article>
</div>