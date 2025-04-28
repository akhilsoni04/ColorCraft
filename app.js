const btn = document.querySelector("button");
const h3 = document.querySelector("h3");
const div = document.querySelector("div");

btn.addEventListener("click", () => { 
    const randomColor = getRandomColor();
    h3.innerText = `Generated Color: ${randomColor}`;
    
    div.style.backgroundColor = randomColor;
    div.style.transform = "scale(1.05)"; // small zoom effect
    
    setTimeout(() => {
        div.style.transform = "scale(1)";
    }, 300); 
 
    console.log("Color updated!");
});

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
