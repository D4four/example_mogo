$(function() {

    let header = $("#header")
    let introH = $("#intro").innerHeight() // height od intro block
    let scrollOffSet = $(window).scrollTop()

    // Fixed Header
    checkScroll(scrollOffSet)

    $(window).on("scroll", function() {
        
        scrollOffSet = $(this).scrollTop()

        checkScroll(scrollOffSet)

    })

    function checkScroll (scrollOffSet) {

        if (scrollOffSet >= introH) {
            header.addClass("fixed")
        } else {
            header.removeClass("fixed")
        }

    }

    // Smooth Scroll

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault()

        let $this = $(this)
        let blockId = $this.data('scroll') 
        let blockOffSet = $(blockId).offset().top

        $("#nav a").removeClass("active")
        $this.addClass("active")

        $("html, body").animate({
            scrollTop: blockOffSet
        }, 500)

    })

    // Menu nav toggle
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault()

        $(this).toggleClass("active")
        $("#nav").toggleClass("active")
    })

    // Collapse 
    $("[data-collapse]").on("click", function (event) {
        event.preventDefault()

        let $this = $(this)
        let blockId = $this.data("collapse")
        
        $this.toggleClass("active")
    })

    // Slider
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    })
}) 