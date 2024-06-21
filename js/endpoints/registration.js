let xhr = new XMLHttpRequest();

let registration_url = "https://reqres.in/api/register";

document.getElementById("registration").addEventListener("submit", e =>{
    e.preventDefault();
    xhr.open("POST",registration_url);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    let registrationData = {
        email: email,
        password: password
    }

    xhr.onload = function(){
        if(xhr.status >= 200 && xhr.status < 300){
            let responseText = JSON.parse(xhr.responseText)
            console.log("user created")
            console.log(responseText);
        }else{
            console.log("something went wrong: " + xhr.status)
        }
    }

    xhr.send(JSON.stringify(registrationData));
})