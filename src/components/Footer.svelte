<style>
  .logo{
    /* width: 150px; */
    object-fit: scale-down;
  }
  .developers{
    /* width: 260px; */
    object-fit: scale-down;
  }
  .minu{
    object-fit: scale-down;
    /* width: 70px; */
  }

  @media only screen and (max-width: 740px){
    .logo{
      width: auto;
      height: 300px;
    }
    .developers{
      max-width: 300px;
      margin-left: 35px;
    }
    .minu{
      max-width: 300px;
      margin-left: 50px;

    }
  }
</style>
<footer class="bg-gray-200 py-20 px-3 ">
  <div class="container mx-auto my-auto flex lg:justify-between  justify-center justify-items-center content-center align-center flex-wrap sm:flex-row">
      <img class=" sm:w-40  lg:mt-35  my-auto" src="logo-circular.png" alt="Logo de Corazones y mentes" />
      <div class="mt-10 lg:w-4/6">
        <div class="sm:flex sm:flex-row lg:flex-col  justify-center justify-items-center content-center align-center ">
          <p class="sm:text-xl lg:text-xs">Impulsado por:</p>
          <div class="sm:flex lg:flex-row  sm:justify-center sm:justify-items-center sm:content-center sm:align-center ">
            <img class="logo sm:w-1/6 lg:w-2/6	" src="developers2.png" alt="Logos Plataforma democrática, Fundacion fhc centro edelstein" />
            <img class="developers  sm:w-1/6 lg:w-2/6	" src="DER_Logo.png" alt="Logos de Democracia en Red" />
            <img class="minu  sm:w-1/6 lg:w-2/6	" src="minu-logo.png" alt="Logo de Minu asociación civil"/>
          </div>
        </div>
      </div>
      <ul class="uppercase text-bold lg:mt-30  my-auto  text-center sm:text-left">
        <li><a class="hover:underline" href="#home">Home</a></li>
        <li><a class="hover:underline" href="#toda-la-data">#TodaLaData</a></li>
        <li><a class="hover:underline" href="#libro">Libro</a></li>
        <li><a class="hover:underline" href="#kit-de-herramientas">kit de herramientas</a></li>
        <li><a class="hover:underline" href="#sos-docente">Soy docente</a></li>
        <li><a class="hover:underline" href="#quienes-somos">Quiénes Somos</a></li>
      </ul>
  </div>
  <p class="text-center text-xs text-bold mt-10">Todos los materiales originales están bajo una licencia de 
    <a class="text-xs" href="https://creativecommons.org/licenses/by/4.0/deed.es" target="_blank">Creative Commons Reconocimiento 4.0 Internacional.</a>
  </p>
</footer>