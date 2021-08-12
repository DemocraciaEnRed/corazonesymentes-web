<script>
  export let chapter;
  export let title;
  export let url;

  let openDocument = () =>{
    window.open(url, '_blank');
  }
</script>
<style>
  .document-icon {
    width: 48px;
    height: 48px
  }
</style>
<div class="flex mt-5 mb-5 cursor-pointer hover:underline" on:click={openDocument}>
  <img src="/icons/icon-document.png" class="document-icon" alt="Ícono de documento" />
  <div class="flex flex-col border-b border-black pb-3">
    <h5 class="text-xs uppercase font-sans font-bold">capitulo {chapter}</h5>
    <h3 class="uppercase text-2xl font-bold text-md">{title}</h3>
  </div>
</div>