    // js follow the slidbar
    var swiper = new Swiper(".slide-swp", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullests: true,
        clickable: true,
    },
    autoplay: {
        delay: 2000,
    },
    loop: true,
    });

    // js follow the  slide-sale
    var swiper = new Swiper(".sale-sec", {
    slidesPerView:5,
    spaceBetween:30,
    autoplay: {
        delay: 3000,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    loop: true,
    breakpoints:{
        1366:{
            slidesPerView:5, 
        },
        1024:{
            slidesPerView:4, 
        },
        768:{
            slidesPerView:3, 
            spaceBetween:15,
        },
        480:{
            slidesPerView:2,
            spaceBetween:10, 
        },
        330:{
            slidesPerView:1,
        }
        
        
    }
    });
    // slide slide-product section number 7
    var swiper = new Swiper(".product_swiper", {
        slidesPerView:4,
        spaceBetween:30,
        autoplay: {
            delay: 3000,
        },
        navigation:{
            nextEl:".swiper-button-next",
            prevEl:".swiper-button-prev"
        },
        loop: true,
        breakpoints:{
            1366:{
                slidesPerView:4, 
            },
            1024:{
                slidesPerView:3, 
                spaceBetween:30,
            },
            968:{
                slidesPerView:2, 
                spaceBetween:15,
            },
            767:{
                slidesPerView:3, 
                spaceBetween:15,

            },
            480:{
                slidesPerView:2,
                spaceBetween:10, 
            },
            330:{
                slidesPerView:1,
                 
            }
            
            
        }
        
        });
        // slide slide_phones swiper
    var swiper = new Swiper(".phones_swiper", {
        slidesPerView:4,
        spaceBetween:30,
        autoplay: {
            delay: 3000,
        },
        navigation:{
            nextEl:".swiper-button-next",
            prevEl:".swiper-button-prev"
        },
        loop: true,
        breakpoints:{
            1366:{
                slidesPerView:4, 
            },
            1024:{
                slidesPerView:4, 
            },
            768:{
                slidesPerView:3, 
                spaceBetween:15,
            },
            480:{
                slidesPerView:2,
                spaceBetween:10, 
            },
            330:{
                slidesPerView:1,
            }
            
            
        }
        });
