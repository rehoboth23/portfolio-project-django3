$(document).ready(function () {
    const carItems = $("div .mymodal")
    const body = $(document.body)
    const exit_btn = $(".exit_btn")
    let modal = null
    const open_modal = $(".see_more")
    const nav = $("#navBar")
    let current = []

    slideLogo = () => {
        for (let item in current){
                const id = current[item].getAttribute("id")+"bfr"
                if (id){
                    const element = document.getElementById(id)
                    if (element){
                        element.style.display = "none"
                    }
                }
            }
        setTimeout(function (){
            current = []
            for (let item in carItems){
                if(carItems.hasOwnProperty(item))
                try{
                    const check = item[0]
                    if(check && carItems[item].classList.contains("active")){
                        current.push(carItems[item])
                    }

                } catch {

                }

        }
        for (let item in current){
            const id = current[item].getAttribute("id")+"bfr"
            if (id){
                const element = document.getElementById(id)
                if (element){
                    element.style.display = "block"
                }
            }
        }
        },
        100)
    }

    slideLogo()

    for (let item in current){
        const id = current[item].getAttribute("id")+"bfr"
        if (id){
            const element = document.getElementById(id)
            if (element){
                element.style.display = "block"
            }
        }
    }

    exit_btn.click(function (e){
        modal.css("display", "none")
        body.css("overflow", "scroll")
        nav.css("display", "flex")
        modal = null
    })
    open_modal.click(function () {
        modal = $(`${$(this)[0].getAttribute('data-target')}`)
        modal.css("display", "block")
        nav.css("display", "none")
        body.css("overflow", "hidden")
    })
})