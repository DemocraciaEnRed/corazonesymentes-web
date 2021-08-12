<script>
	export let segment;
	let opened = false;
	let toogle = () =>{
		opened = !opened;
	}
  let classInactive = "text-gray-600 hover:text-blue-700";
  let classActive = "text-blue-700 "
  let getActive = (currentSegment) =>{
    return currentSegment === segment ? classActive : classInactive;
  }
  
</script>
<nav class="bg-white shadow font-sans">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button type="button" on:click={toogle} class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!--
            Icon when menu is closed.
          -->
          <svg class="h-6 w-6 {opened ? 'hidden' : 'block'}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <!--
            Icon when menu is open.
          -->
          <svg class="h-6 w-6 {opened ? 'block' : 'hidden'}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex-1 flex items-center justify-between sm:items-stretch">
        <div class="flex-shrink-0 flex items-center">
          <img class="block h-8 w-auto ml-10" src="logo-horizontal.png" alt="Logo de Corazones y mentes">
        </div>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4 items-end">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <a href="#home" class="{getActive(undefined)}  px-3 py-2 text-sm font-medium">HOME</a>
            <a href="#toda-la-data" class="{getActive("toda-la-data")} px-3 py-2 text-sm font-medium">#TodaLaData</a>
            <a href="#libro" class="{getActive("libro")}  px-3 py-2 text-sm font-medium">Libro</a>
            <a href="#kit-de-herramientas" class="{getActive("kit-de-herramientas")} px-3 py-2 text-sm font-medium">Kit De Herramientas</a>
            <a href="#sos-docente" class="{getActive("sos-docente")}  px-3 py-2 text-sm font-medium">Soy Docente</a>
            <a href="#quienes-somos" class="{getActive("quienes-somos")} px-3 py-2 text-sm font-medium">Quiénes Somos</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div class="sm:hidden {opened ? 'block' : 'hidden'}" id="mobile-menu" >
    <div class="px-2 pt-2 pb-3 space-y-1">
      <a href="#home" class="{getActive(undefined)} block px-3 py-2 text-base font-medium">HOME</a>
      <a href="#toda-la-data" class="{getActive("toda-la-data")} block px-3 py-2 text-base font-medium">#TodaLaData</a>
      <a href="#libro" class="{getActive("libro")} block px-3 py-2 text-base font-medium">LIBRO</a>
      <a href="#kit-de-herramienpmntas" class="{getActive("kit-de-herramientas")} block px-3 py-2 text-base font-medium">Kit De Heramientas</a>
      <a href="#sos-docente" class="{getActive("sos-docente")} block px-3 py-2 text-base font-medium">Soy Docente</a>
      <a href="#quienes-somos" class="{getActive("quienes-somos")} block px-3 py-2 text-base font-medium">Quiénes Somos</a>
    </div>
  </div>
</nav>