document.getElementById("login").addEventListener("submit", async (e) =>{
    e.preventDefault();
    let loginPromise = new Promise(function(resolve,reject){
        let xhr = new XMLHttpRequest();
        let log_url = "https://reqres.in/api/login";
        xhr.open("POST",log_url);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        let login_email = document.getElementById("login_email").value
        let login_password = document.getElementById("login_password").value

        let userCredentials ={
            email: login_email,
            password: login_password
        }

        let stringifyData = JSON.stringify(userCredentials);

        xhr.onload = function(){
            if(xhr.status >= 200 && xhr.status < 300){
                let res = JSON.parse(xhr.responseText);
                resolve(res)
            }else{
                reject(`something went wrong : ${xhr.status}`)
            }
        }

        xhr.onerror = function(){
            reject("request failed")
        }

        xhr.send(stringifyData)
    })

    try{
        let response = await loginPromise;
        console.log("user logged in", response);
    }catch(err){
        console.log(err)
    }
})