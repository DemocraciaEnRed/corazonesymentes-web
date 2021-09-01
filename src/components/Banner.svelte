<style>
    .banner{
        width: 100%;
    }
    .hide-on-mobile{
        display: inherit;
    }
    .show-on-mobile{
        display: none;
    }
    .show-on-tablet{
        display:none
    }
    .button-se-voz{
        bottom:23%;
        right: 35%;
    }
    
    
    @media only screen and (max-width:768px){
        .hide-on-tablet, .show-on-mobile{
            display: none;
        }
        .show-on-tablet{
            display: inherit;
        }
        .button-se-voz{
        bottom:23%;
        right: 25%;
        }
    }

    @media only screen and (max-width:480px){
        .show-on-tablet{
            display: none;
        }
        .show-on-mobile{
            display: inherit;
        }
        .button-se-voz{
        bottom:12%;
        right: 45%;
        }
        .button-se-voz{
            font-size: 20px;
        }
    }
</style>
<div class="banner relative">
    <img src="banner.jpg" class="hide-on-tablet" alt="Banner de la Campaña Se Voz">
    <img src="banner-tablet.jpg" class="show-on-tablet" alt="Banner de la Campaña Se Voz">
    <img src="banner-mobile.jpg" class="show-on-mobile" alt="Banner de la Campaña Se Voz">
    <a href="https://preguntarparaacordar.typeform.com/to/VTI9VF52" class="bg-black button-se-voz	text-yellow-200	 text-2xl py-2 px-4 absolute" target="_blank">SUBÍ TU MEME</a>
</div>