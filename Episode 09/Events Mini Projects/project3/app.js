const message = document.querySelector("#message");
const count = document.querySelector("#count");

message.addEventListener("keyup", ()=>{
    const messageLength = message.value.length;
    count.textContent = `Characters: ${messageLength}`;
    
})
