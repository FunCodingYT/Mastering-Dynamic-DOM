const form = document.querySelector("#loginform");
const input = document.querySelectorAll("input");
const message = document.querySelector("#message");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const username = input[0].value;
    const useremail = input[1].value;
    const userpassword = input[2].value;

    if(username === "" || useremail === "" || userpassword === ""){
        message.textContent = "Please fill in all the fields";
        message.style.color = "red";
    }
    else{
        message.textContent = `Welcome ${username}`;
        message.style.color = "green";
        console.log(username, useremail, userpassword);
        
        input.forEach(i => i.value = "");

    }

})