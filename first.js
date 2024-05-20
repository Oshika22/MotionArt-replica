
const main =  document.querySelector(".body-content");
const curs1 = document.querySelector("#cursor1");
const curs2 = document.querySelector("#cursor2");


main.addEventListener("mousemove",function(dets){
    gsap.to(curs1,{
        x: dets.x,
        y: dets.y,
        scale: 1,
        background: "whitesmoke",
    })
    gsap.to(curs2,{
        x: dets.x,
        y: dets.y,
        scale: 5,
        background: "radial-gradient( whitesmoke, pink,rgb(239, 160, 173),rgb(228, 133, 149),rgb(221, 64, 153),whitesmoke )",
    })
    gsap.to(curs2,{
        x: dets.x,
        y: dets.y,
        duration: 2,
        scale: 0,
    })
    gsap.to(curs1,{
        x: dets.x,
        y: dets.y,
        duration: 1.75,
        scale: 0,
    })
})