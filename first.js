console.log("hello");

const element = document.querySelector(".row");

element.addEventListener("mousemove", (e) => {
    const { x, y } = element.getBoundingClientRect();
    element.style.setProperty("--x", e.clientX - x);
    element.style.setProperty("--y", e.clientY - y);

})