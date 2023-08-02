let slider = tns({
    container:".my-slider",
    "slideBy" : "2" ,
    "speed" : 400 ,
    "nav" : false ,
    autoplay :true,
    autoplayHoverPause: true,
    autoplayTimeout: 2000,
    controls :false,
    autoplayButtonOutput :false,
    responsive :{
        1600:{
            items :11,
            gutter :20
        },
        1024 : {
            items: 4,
            gutter : 20
        },
        768 : {
            items: 2,
            gutter: 20
        },
        480 : {
            items: 1,
            gutter: 20
        }
    }
    })

  