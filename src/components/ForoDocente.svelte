<script>
import { onMount } from "svelte";

 
  onMount(()=>{
    (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() 
  }) 
</script>
<style>
  .inscripcion-talleres{
    position: relative;
    font-family: inherit;
    font-weight: 700;
    cursor: pointer;
    transition-duration: 0.1s;
    transition-property: background-color, color, border-color, opacity, box-shadow;
    transition-timing-function: ease-out;
    outline: none;
    border: 1px solid transparent;
    margin: 0px;
    box-shadow: rgb(0 0 0 / 10%) 0px 3px 12px 0px;
    padding: 8px 18px;
    min-height: 48px;
    background-color: rgb(138, 229, 238);
    color: rgb(0, 0, 0);
    border-radius: 4px;
  }

  @media only screen and (max-width: 600px) {
    img{
      display: none;
    }
  }

  
</style>
<div class="bg-black p-10" id="talleres-para-docentes">
  <article class="container mx-auto">
    <div class="flex items-center justify-start">
      <div class="mr-5">
        <h1 class="uppercase bg-white text-black text-5xl p-2 text-bold">
          <span class="text-blue-300">Talleres</span> para docentes
        </h1>
      </div>
      <img src="dialog.png" id="dialog" alt="icono de dialogo"/>
    </div>
    <p class="text-white mt-10 text-xl font-sans">
      Dos encuentros para trabajar estrategias y herramientas pedagógicas<br>
      sobre fake news y convivencia digital positiva<br>
      para trabajar en el aula y debatir con lxs estudiantes.
    </p>
    <p class="text-white mt-10 tmt-5 text-2xl font-sans "><span class="bg-ligth-blue">¡Sumate a los próximos encuentros!</span></p>
    <p class="text-white mt-5 text-2xl font-sans">Primer encuentro - 18/08 - 17:00 a 18:30</p>
    <p class="text-white mt-5 text-2xl font-sans">Segundo encuentro - 20/08 - 17:00 a 18:30</p>

    <p class="text-white mt-10 text-xl font-sans">La actividad es gratuita y online vía Google Meet, con cupo limitado. </p>
    <div class="text-left mt-10 mb-10">
      <span class="inscripcion-talleres text-2xl">
        <a 
        href="https://form.jotform.com/211795972886072" 
        target="_blank"
        class="uppercase mt-5 p-3 leading-6 "> 
        QUIERO INSCRIBIRME
      </a>
      </span>
  </article>
</div>