<script>
  import axios from 'axios';
  import Kit from './Kit.svelte';
  let kits = [];
  const url = "https://spreadsheets.google.com/feeds/list/16PA0-OgQxl7a47LhSAnDfSXE6s2jqTGR6LDWBxlWhSM/1/public/values?alt=json";
  axios.get(url).then((res)=>{
    kits = formatSpreadsheet(res.data.feed.entry);
  });
  const formatSpreadsheet = (data) =>{
    const input = data.map((obj=>{
        return {
          title: obj.title.$t,
          description: obj["gsx$descripción"].$t,
          url: obj.gsx$linkarchivo.$t,
          type: obj.gsx$aclaraciones.$t,
        }
      }))
      return input;
  }
</script>
<style>
  #kit-de-herramientas{
    background-position: center;
    background-size: 90%;
    background-repeat: no-repeat;
  }
</style>
<div class="p-10 pt-20" id="kit-de-herramientas">
  <article class="container mx-auto text-center">
    <h1 class="uppercase text-6xl fushia-text mb-3">
      <span class="text-black">Kit</span>
      <span class="celeste-text">De</span>
       Herramientas
    </h1>
    <h2>
      <span class="fushia-bg text-2xl tracking-wide text-white p-2 uppercase text-bold">Articulos, podcast, reflexiones, videos y más.</span>
    </h2>
    <p class="text-bold text-lg mt-5 mb-10 uppercase">
      Te compartimos este recursero con un poco de todo para habitar <br>
      internet de forma segura, responsable y empática.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 mt-10">
      {#each kits as item}
        <Kit {...item} />
      {/each}
    </div>
  </article>
</div>