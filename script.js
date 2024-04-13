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

// navAnimation();