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
    padding:10px
  }

</style>

<div class="w-3/4 md:w-11/12 mx-auto flex flex-col border justify-start border-gray-400 m-5 p-3 ">
  
  <div class="flex justify-end items-center mb-3">
    <p class="uppercase font-bold font-sans text-sm	 text-gray-400">{type}</p>
    <a class=" p-2" href={url}>
      <img  class=" float-right" src="open.png" alt="abrir link">
    </a>
  </div>
  <div class="flex flex-col justify-between items-center">
    <img src={icon} class="document-icon  md:block" alt={type} />
      
    <h3 class="uppercase font-bold text-md pb-1 text-center">{title}</h3>
  </div>
      
    {#if opened}
      <p class="my-3 text-center font-sans">
        {description}
      </p>
    {/if} 

    <img width="20px" class="text-right mx-auto font-sans cursor-pointer p-1" on:click={toggle} src={opened? "less.png":"more.png"} alt="Ver más">
 
</div>
