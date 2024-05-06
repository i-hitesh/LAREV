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

function page3Animation() {
    let page3center = document.querySelector(".pg3-cent");
    let video = document.querySelector(".page3 video")

    page3center.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            opacity: 1,
            transform: "scaleX(1) scaleY(1)",
            borderRadius: 0

        })
    })

    video.addEventListener("click", function () {
        video.pause();
        video.currentTime = 0;
        gsap.to(video, {
            opacity: 0,
            transform: "scaleX(0.5) scaleY(0)",
            borderRadius: 20
        })
    })
}



// navAnimation();
page2Animation();
page3Animation();