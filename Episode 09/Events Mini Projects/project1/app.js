const box = document.querySelector("#box");
const btn = document.querySelector("#btn");
const colors = ["red", "teal", "orange", "green", "brown", "yellow", "skyblue"];

btn.addEventListener("click", ()=>{
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = randomColor;
});
