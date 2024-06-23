document.getElementById("createUsers").addEventListener("submit", async e => {
    e.preventDefault();
    let createUserPromise = new Promise(function(resolve,reject){
        let xhr = new XMLHttpRequest();
        let createEndpoint = "https://reqres.in/api/users";
        xhr.open("POST",createEndpoint);

        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        let username = document.getElementById("username").value
        let job = document.getElementById("job").value

        let newUser = {
            name: username,
            job: job
        }

        let JSONuserData = JSON.stringify(newUser)
        
        xhr.onload = function(){
            if(xhr.status == 201){
                let response = JSON.parse(xhr.responseText);
                resolve(response)
            }else{
                reject(`Something went wrong : ${xhr.status}`)
            }
        }

        xhr.send(JSONuserData)
    })

    try{
        let response = await createUserPromise;
        console.log(response)
    }catch(error){
        console.log(error)
    }
})