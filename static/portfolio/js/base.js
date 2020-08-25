$(document).ready(function () {
    let navBar = $("#navBar")
    let img = $("img")

    $(".navbar-nav, a, b").hover(function (e) {
        const id = e.target.getAttribute("id")
        const element = $(`#${id}`)
        $(`#${id} b`).css("color", e.type === "mouseenter" ? "red":"white")
        element.css(e.type === "mouseenter" ?
            {"text-decoration": "none", "text-shadow": "2px 2px 3px black"}:
            {"text-decoration": "none", "text-shadow": "0px 0px 0px white"})
    })

    handleNav = (event) => {
        const id = event.target.getAttribute("id").split("_")[0]
        console.log(id)
        if(id === 'contacts'){
            event.preventDefault()
        }
        const element = $(`#${id}`)
        let elementTop = element[0].offsetTop
        $("html, body").animate({scrollTop: elementTop - 65}, 300)

        const clicked = event.target.getAttribute("id")
        $(`#${clicked} b`).css("color", (navBar.hasClass("bg-dark") ? "white":"#472776"))
        $(`#${clicked}`).css({"text-decoration": "none", "text-shadow": "0px 0px 0px white"})
    }
    $(".nav-item").click(function (event) {
        handleNav(event)
    })
    img.onload = function(){
        if (img.height > img.width){
            img.height = '100%'
            img.width = 'auto'
        }
    }
})