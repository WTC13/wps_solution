tailwind.config = {
    theme: {
        extend: {
            colors: {
                royal: '#4169E1',
                darkRoyal: '#1e3a8a',
            }
        }
    }
}

$(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            autoplay: true,
            autoplayTimeout: 3000,
            responsive:{
                0:{ items:1 },
                600:{ items:2 },
                1000:{ items:4 }
            }
        });
    });