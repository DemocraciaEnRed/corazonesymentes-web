<script>
  	import Home from './Home.svelte'
	import Carousel from '@beyonk/svelte-carousel';
  	import SosDocenteHero from './SosDocenteHero.svelte';
  	import Banner from './Banner.svelte'
 	import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons'
</script>

<Carousel  perPage={{ 800: 1, 500: 1 }} duration={500} >
	<span class="control" slot="left-control">
		<ChevronLeftIcon />
	  </span>
	<div class="slide-content">
		<Banner/>
	</div>
	<div class="slide-content px-16">
		<Home/>
	</div>
	<div class="slide-content px-16">
		<SosDocenteHero/>
	</div>
	
	<span class="control" slot="right-control">
		<ChevronRightIcon />
	  </span>
</Carousel>

<style>
	.slide-content {
    
		width: 100%;
	}


</style>

