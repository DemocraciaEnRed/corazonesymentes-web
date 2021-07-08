<style>
  .logo{
    width: 150px;
  }
  .developers{
    width: 260px;
    float: left;
  }
  .minu{
    float: left;
    width: 70px;
  }
  .fot{
    max-width: 1200px;
    margin:auto
  }
  @media only screen and (max-width: 600px) {
    .fot{
      flex-direction: column;
    }
  }
</style>
<footer class="bg-gray-200 p-20">
  <div class="container fot flex justify-between align-center ">
      <img class="logo mt-5" src="logo-circular.png" alt="corazones y mentes logo" />
      <div class="mt-10">
        <div class="flex flex-col justify-center align-center">
          <small class="text-xs">Impulsado por:</small>
          <div>
            <img class="developers" src="developers2.png" alt="democracya en red, plataforma democratica fundacion fhc centro edelstein" />
            <img class="minu" src="minu-logo.png" alt="Minu asociacion civil"/>
          </div>
        </div>
      </div>
      <ul class="uppercase text-bold mt-5 text-left">
        <li><a class="hover:underline" href="#home">Home</a></li>
        <li><a class="hover:underline" href="#toda-la-data">#todaladata</a></li>
        <li><a class="hover:underline" href="#libro">Libro</a></li>
        <li><a class="hover:underline" href="#talleres-para-docentes">Talleres Para Docentes</a></li>
        <li><a class="hover:underline" href="#kit-de-herramientas">kit de herramientas</a></li>
        <li><a class="hover:underline" href="#quienes-somos">Quiénes Somos</a></li>
      </ul>
  </div>
  <p class="text-center text-xs text-bold mt-10">Todos los materiales originales están bajo una licencia de 
    <a href="https://creativecommons.org/licenses/by/4.0/deed.es" target="_blank">Creative Commons Reconocimiento 4.0 Internacional.</a>
  </p>
</footer>