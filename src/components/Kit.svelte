<script>
  export let description
  export let type;
  export let title;
  export let url;

  let opened = false;
  let toggle = () =>{
    opened = !opened;
  }
  let icon
  
  switch(type){
    case "GUÍA":
    case "ARTÍCULO":
      icon = "icons/article-icon.png";
    break; 
    case "PODCAST":
      icon = "icons/podcast-icon.png"
    break;
    case "VIDEO":
    case "PELICULA":
      icon = "icons/video-icon.png"
    break;
    case "PLATAFORMA":
      icon= "icons/app.png"
    break;
    case "JUEGO":
      icon = "icons/puzzle.png"
    break; 
    default:
      icon = "icons/article-icon.png"
    break;
  }
</script>

<style>
  .document-icon{
    margin-right: 15px;
    width: 80px;
    height: 80px;
  }
  .download img{
    width: 20px;
  }
</style>

<div class="flex flex-col border-b border-black mt-5 mb-5 m-2">
  <div class="flex">
    <img src={icon} class="document-icon hidden md:block" alt={type} />
    <div class="flex-grow text-left flex flex-col pb-1">
      <h5 class="text-xs uppercase font-bold">{type}</h5>
      <h3 class="uppercase font-bold text-md">{title}</h3>
    </div>
    <span class="text-right text-xl cursor-pointer p-1" on:click={toggle}>{opened ? "-" : "+"}</span>
  </div>
  {#if opened}
    <p class="ml-10 text-left">
      {description}
    </p>
    <a class="download p-2" href={url}>
      <img class="float-right" src="icons/download.png" alt="descarga">
    </a>
  {/if}
</div>
