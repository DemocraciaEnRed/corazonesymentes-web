<script>
	//COMPONENTS
	import TodaLaData from '../components/Todaladata.svelte'
	import Articulo from '../components/Articulo.svelte'
	import ForoDocente from '../components/ForoDocente.svelte'
	import KitHerramientas from '../components/KitHerramientas.svelte'
	import QuienesSomos from '../components/QuienesSomos.svelte'
	import PedagogiaDigital from '../components/PedagogiaDigital.svelte'
	import Footer from '../components/Footer.svelte';
	import HeroSlider from '../components/HeroSlider.svelte';
	import { onMount } from 'svelte';
	import SosDocente from '../components/SosDocente.svelte';
	onMount(()=>{
		//Global site tag (gtag.js) - Google Analytics 
		window.dataLayer = window.dataLayer || [];
  	function gtag(){dataLayer.push(arguments);}
  	gtag('js', new Date());
  	gtag('config', 'G-LJWHDC5L57');
	})
</script>
<svelte:head>
	<title>Corazones Y Mentes</title>
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap" rel="stylesheet">
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-LJWHDC5L57"></script>
</svelte:head>

<HeroSlider/>
<PedagogiaDigital/>
<TodaLaData/>
<Articulo/>
<KitHerramientas/>
<SosDocente/>
<QuienesSomos/>
<Footer/>