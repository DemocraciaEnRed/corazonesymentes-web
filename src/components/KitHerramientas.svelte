

<script>
  import axios from 'axios';
  import Kit from './Kit.svelte';
  let kits = [];
  // CHANGE ME FOR DEV, CHANGE ME FOR BUILD
  let googleSheetApiToken = 'AIzaSyBoSX1oI8uSGr4dXC_Lsz81ilWREuW2VjM'
  const url = `https://sheets.googleapis.com/v4/spreadsheets/16PA0-OgQxl7a47LhSAnDfSXE6s2jqTGR6LDWBxlWhSM/values/Sheet1?key=${googleSheetApiToken}`;
  let newKits=[];
  axios.get(url).then((res)=>{
    kits = formatSpreadsheet(res.data.values);
    newKits=kits
  });

  const formatSpreadsheet = (data) =>{
    let theData = data.slice(1)
    const input = theData.map((obj=>{
        return {
          title: obj[0],
          description: obj[2],
          url: obj[3],
          type: obj[5],
        }
      })) 
    return input;
  }

  function changeFilter(newFilter) {
    newKits= kits.filter(kit=>{return kit.type==newFilter})
  }

</script>

<style>
  #kit-de-herramientas{
    background-position: center;
    background-size: 90%;
    background-repeat: no-repeat;
  }
</style>

<div class="md:p-10 pt-0 sm:pt-20 bg-white " id="kit-de-herramientas">
  
  <article class="container mx-auto ">

    <div class="grid md:grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 p-3 gap-8 mb-10 bg-black pb-10 sm:pb-0">

      <div class="pt-10 sm:px-3 py-6 lg:p-8 flex ">
          <img class="mr-4 my-auto w-12 sm:w-14" src="herramientas.png" alt="Logo de herramientas">
          <h1 class="upercase fushia-text text-left	">Kit de herramientas</h1>        
      </div> 
      <div class="text-white flex flex-col justify-center text-left">
        <p class="font-sans pb-3"> Te compartimos este recursero con un poco de todo para habitar internet de forma segura, responsable y empática.</p>
        <h4 class="uppercase pb-3">ENCONTRÁ ArtÍculos, podcast, reflexiones, videos y más.</h4>
      </div>           
      
    </div>

    <div class="flex justify-evenly flex-wrap">

      <button class="w-32 m-3 fushia-text border focus:text-black border-purple-400 border-solid" on:click={()=>changeFilter("ARTÍCULO")}>
        <h4 >Artículo</h4>
      </button>
      <button class="w-32 m-3 fushia-text border focus:text-black border-purple-400 border-solid" on:click={()=>changeFilter("PLATAFORMA")}>
        <h4 >Plataforma</h4>
      </button>
      <button class="w-32	m-3 fushia-text border focus:text-black border-purple-400 border-solid" on:click={()=>changeFilter("VIDEO")}>
        <h4 >Video</h4>
      </button>
      <button class="w-32	m-3 fushia-text border border-purple-400 border-solid focus:text-black" on:click={()=>changeFilter("GUÍA")}>
        <h4 >Guía</h4>
      </button>
      <button class="w-32	m-3 fushia-text border focus:text-black border-purple-400 border-solid" on:click={()=>changeFilter("JUEGO")}>
        <h4 >Juego</h4>
      </button>
    </div>
   
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">

        {#each newKits as item}
          <Kit {...item}  />
        {/each}
      
    </div>
  </article>
  
  
</div>