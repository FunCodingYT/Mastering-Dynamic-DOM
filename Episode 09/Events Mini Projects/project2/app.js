const themeSelect = document.querySelector("#theme-select");

themeSelect.addEventListener("change", (event)=>{
    document.body.className = event.target.value;        
    
})