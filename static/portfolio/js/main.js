$(document).ready(function ready (){
    // my vars
    let win = $(window)
    let formerWinHeight = null
    let formeWinWidth = null
    let top = $("header")
    let formerTopHeight = null
    let main = $("main")
    let intro = $("#intro")
    let navBar = $("#navBar")
    let navToggle = $("#navToggle")
    let navLinks = $("#siteLinks")
    let logo = $("#logo")
    let linkText = $(".link-text")
    let img = $("img")
    let myImg = $("#myImgHolder")

    const randomColor = () => {
        return Math.floor(Math.random()*16777215).toString(16);
    }

    $(".navbar-nav, a, b").hover(function (e) {
        const id = e.target.getAttribute("id")
        const element = $(`#${id}`)
        $(`#${id} b`).css("color", e.type === "mouseenter" ? "red":
            (navBar.hasClass("bg-dark") ? "white":"#472776"))
        element.css(e.type === "mouseenter" ?
            {"text-decoration": "none", "text-shadow": "2px 2px 3px black"}:
            {"text-decoration": "none", "text-shadow": "0px 0px 0px white"})
    })
    $("#social span a").hover(function (e) {
        const id = e.target.getAttribute("id")
        const element = $(`#${id}`)
        element.css("color", e.type === "mouseenter" ? "red":"rgb(0, 123, 255)")
    })

    navToggle.click(function () {
        $(this).css("background", "inherit")
        $(this).css("position", "absolute")
        if (!navLinks.hasClass("show")) {
            navLinks.addClass("mr-auto")
            navLinks.removeClass("ml-auto")
            navLinks.removeClass("m-auto")
            if(!(navBar.css("height") === "65px")){
                navLinks.css("background", "white")
                navLinks.css("margin-top", 45)
            }
            else {
                navLinks.css("margin-top", 65)
                navLinks.css("background", "inherit")
            }
        }
        else {
            navLinks.css("margin-top", 0)
            navLinks.css("back")
            navLinks.css("background", "inherit")
            intro.css("margin-top", 0)
        }
    })
    handleNav = (event) => {
        event.preventDefault()
        const id = event.target.getAttribute("id").split("_")[0]
        const element = $(`#${id}`)
        let elementTop = element[0].offsetTop
        $("html, body").animate({scrollTop: elementTop - 65}, 300)
        if (navLinks.hasClass("show")) {
            navLinks.removeClass("show")
        }
        const clicked = event.target.getAttribute("id")
        $(`#${clicked} b`).css("color", (navBar.hasClass("bg-dark") ? "white":"#472776"))
        $(`#${clicked}`).css({"text-decoration": "none", "text-shadow": "0px 0px 0px white"})
    }

    $(".nav-item").click(function (event) {
        handleNav(event)
    })

    win.on('click', function(event) {
        if(event.target.className !== "navbar-toggler-icon" && navToggle[0].getAttribute("aria-expanded") === "true") {
            let collapsibleDiv = $(".navbar-collapse")
            collapsibleDiv.slideUp('fast', function() { $(this).removeClass('show'); $(this).attr('style', null); });
        }
    })

    img.onload = function(){
        if (img.height > img.width){
            img.height = '100%'
            img.width = 'auto'
        }
    }

    win.resize(function (){
        if (win.width() < 992) {
            myImg.css('display', 'none')
            intro.css('width', '100%')
            if (navBar.css("height") === "65px") {
                navLinks.removeClass("ml-auto")
                navLinks.css("background", "inherit")
                navLinks.addClass("mr-auto")
                navLinks.removeClass("m-auto")
                navLinks.css("margin-top", 65)
            }
            else {
                navLinks.removeClass("ml-auto")
                navLinks.css("background-color", "white")
                navLinks.addClass("mr-auto")
                navLinks.removeClass("m-auto")
                navLinks.css("margin-top", 45)
            }
            logo.css("display", "none")
        }
        else {
            myImg.css('display', 'block')
            if(navBar.css("height") === "65px") {
                navLinks.addClass("ml-auto")
                navLinks.removeClass("mr-auto")
                logo.css("display", "block")
            }
            else {
                navLinks.css("background", "white")
            }
            navLinks.css("background", "inherit")
            if((navLinks.hasClass("mr-auto") || navBar.hasClass("ml-auto")) && navLinks.height() < 50){
                navLinks.removeClass("mr-auto")
                navLinks.removeClass("ml-auto")
                navLinks.addClass("m-auto")
            }
            navLinks.css("margin-top", 0)
        }

        if (win.width() < 255) {

        }
    })

    win.on('load', function () {
        let isFixed = navBar.hasClass("fixed-top")
        main.css("margin-top", top.height)
        formerWinHeight = win.height()
        formeWinWidth = win.width()
        formerTopHeight = top.height()
        formerYoffset = win[0].pageYOffset
        if (win[0].pageYOffset >= 300) {
            navBar.css("transform", "translateY(0%)")
            navBar.css("transition", "all 0.5s ease-in-out")
            navBar.addClass("fixed-top").removeClass("bg-transparent").addClass("bg-dark")
            navBar.css("height", "65")
            linkText.css("color", "white")
            if (win.width() >= 992){
                logo.css("display", "block")
                navLinks.addClass("ml-auto")
                navLinks.removeClass("mr-auto")
                navLinks.removeClass("m-auto")
                navLinks.css("background", "inherit")
                navLinks.css("margin-right", 50)
            }
            else {
                navLinks.addClass("mr-auto")
                navLinks.removeClass("ml-auto")
                navLinks.removeClass("m-auto")
                navLinks.css("background", "inherit")
            }
        }
        else if (win[0].pageYOffset < 300 && isFixed) {
            navBar.removeClass("fixed-top").addClass("bg-transparent").removeClass("bg-dark")
            navBar.css("height", "45")
            linkText.css("color", "#472776")
            logo.css("display", "none")
            if (win.width() >= 992){
                logo.css("display", "none")
                navLinks.removeClass("ml-auto")
                navLinks.removeClass("mr-auto")
                navLinks.addClass("m-auto")
                navLinks.css("background", "inherit")
            }
            else {
                navLinks.addClass("mr-auto")
                navLinks.removeClass("ml-auto")
                navLinks.removeClass("m-auto")
                navLinks.css("background-color", "white")
            }
        }

    })

    win.on('scroll', function () {
        let isFixed = navBar.hasClass("fixed-top")
        if (win[0].pageYOffset >= 300 && !isFixed) {
            navBar.css("transition", "all 0.5s ease-in-out")
            navBar.addClass("fixed-top").removeClass("bg-transparent").addClass("bg-dark")
            navBar.css("height", "65")
            linkText.css("color", "white")
            if (win.width() >= 992){
                logo.css("display", "block")
                navLinks.addClass("ml-auto")
                navLinks.removeClass("mr-auto")
                navLinks.removeClass("m-auto")
                navLinks.css("background", "inherit")
                navLinks.css("margin-right", 50)
            }
            else {
                navLinks.addClass("mr-auto")
                navLinks.removeClass("ml-auto")
                navLinks.removeClass("m-auto")
                navLinks.css("background", "inherit")
            }
        }
        else if (win[0].pageYOffset < 300 && isFixed) {
            navBar.removeClass("fixed-top").addClass("bg-transparent").removeClass("bg-dark")
            navBar.css("height", "45")
            linkText.css("color", "#472776")
            logo.css("display", "none")
            if (win.width() >= 992){
                logo.css("display", "none")
                navLinks.removeClass("ml-auto")
                navLinks.removeClass("mr-auto")
                navLinks.addClass("m-auto")
                navLinks.css("background", "inherit")
            }
            else {
                navLinks.addClass("mr-auto")
                navLinks.removeClass("ml-auto")
                navLinks.removeClass("m-auto")
                navLinks.css("background-color", "white")
            }
        }
    })
})