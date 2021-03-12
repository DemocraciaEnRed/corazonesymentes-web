<script>
  import articleIcon from '/static/icons/article-icon.png';
  import videoIcon from '/static/icons/video-icon.png';
  import podcastIcon from '/static/icons/podcast-icon.png';
  
  export let description
  export let type;
  export let title;
  export let url;
  let openDocument = () =>{
    window.open(url, '_blank');
  }
  let opened = false;
  let toggle = () =>{
    opened = !opened;
  }
  let icon
  switch(type){
    case "articulo":
      icon = articleIcon;
    break; 
    case "podcast":
      icon = podcastIcon
    break;
    case "video":
      icon = videoIcon
    break;
  }
</script>

<div class="flex mt-5 mb-5" on:click={openDocument}>
  <img src={icon} class="document-icon" alt={type} />
  <div class="flex flex-col border-b border-black pb-3">
    <h5 class="text-xs uppercase font-bold">{type}</h5>
    <h3 class="uppercase font-bold text-md">{title}</h3>
    <button>{opened ? "+" : "-"}</button>
  </div>
  <p >
    {description}
  </p>
</div>