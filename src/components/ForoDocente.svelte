<script>
import { onMount } from "svelte";

 
  onMount(()=>{
    (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() 
  }) 
</script>

<div class="bg-black p-10" id="foro-docente">
  <article class="container mx-auto">
    <div class="flex items-center justify-start">
      <div class="mr-5">
        <h1 class="uppercase bg-white text-black text-5xl p-2 text-bold">
          <span class="text-blue-300">FORO</span> DOCENTE
        </h1>
      </div>
      <img src="dialog.png" alt="icono de dialogo"/>
    </div>
    <p class="text-white mt-10 text-xl font-sans">
      Un espacio para intercambiar ideas, sugerir bibliografía,<br>
      dialogar y debatir sobre el uso de internet, las redes sociales<br>
       y la convivencia digital entre les jovenes y en las aulas
    </p>
    <div class="text-left mt-10">
      <a 
        href="https://drive.google.com/file/d/1ZpCo3Kx5Og0I7tnBVIEElxa1bIkp5MEe/view?usp=sharing" 
        target="_blank"
        class="bg-white uppercase mt-5 p-3 leading-6"> 
          Descargá actividades para trabajar en clase
      </a>
    </div>
    <div class="typeform-widget mt-10" data-url="https://form.typeform.com/to/abLtziWm?typeform-medium=embed-snippet" style="width: 100%; height: 500px;"></div> 
  </article>
</div>