function navAnimation() {

    let nav = document.querySelector("nav");
    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline();
        tl.to(".nav-bottom", {
            height: "27vh"
        })
        tl.to(".nav-right h5", {
            display: "block"
        })
        tl.to(".nav-right h5 span", {
            y: 0,
            stagger: {
                amount: 0.8
            }
        })
    })

    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline();

        tl.to(".nav-right h5 span", {
            y: 20,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".nav-right h5", {
            display: "none",
            duration: 0.1

        })
        tl.to(".nav-bottom", {
            height: 0,
            duration: .2
        })
    })
}


function page2Animation() {

    let rightElems = document.querySelectorAll(".right-elem");

    rightElems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })

        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })

        elem.addEventListener("mousemove", function (dets) {
            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 48,
                y: dets.y - elem.getBoundingClientRect().y - 130
            })
        })
    })

}


navAnimation();
page2Animation();