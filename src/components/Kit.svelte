<script>
  import articleIcon from '/static/icons/article-icon.png';
  import videoIcon from '/static/icons/video-icon.png';
  import podcastIcon from '/static/icons/podcast-icon.png';
  import download from '/static/icons/download.png';
  import plataform from '/static/icons/app.png';
  import game from '/static/icons/puzzle.png';

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
      icon = articleIcon;
    break; 
    case "PODCAST":
      icon = podcastIcon
    break;
    case "VIDEO":
    case "PELICULA":
      icon = videoIcon
    break;
    case "PLATAFORMA":
      icon= plataform
    break;
    case "JUEGO":
      icon = game
    break; 
    default:
      icon= articleIcon
    break;
  }
</script>
<style>
  .document-icon{
    margin-right: 15px;
  }
</style>
<div class="flex flex-col border-b border-black mt-5 mb-5 m-2">
  <div class="flex">
    <img src={icon} class="document-icon" alt={type} />
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
      <img class="float-right" src={download} alt="descarga">
    </a>
  {/if}
</div>
