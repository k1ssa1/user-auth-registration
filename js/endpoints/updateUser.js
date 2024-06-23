document.getElementById("updateUser").addEventListener("submit", async e => {
    e.preventDefault()
    let updatePromise = new Promise(function(resolve,reject){
        let xhr = new XMLHttpRequest();
        let updateEndpoint = "https://reqres.in/api/users/";
        let userID = document.getElementById("id").value;
        xhr.open("PUT", updateEndpoint + userID);
        let new_name = document.getElementById("update_username").value;
        let new_job = document.getElementById("update_job").value;

        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        
        let updatedUser = {
            name: new_name,
            job: new_job
        }

        let JSONData = JSON.stringify(updatedUser)

        xhr.onload = function(){
            if(xhr.status >= 200 && xhr.status < 300){
                let response = JSON.parse(xhr.responseText);
                resolve(response)
            }else{
                reject(`Something went wrong : ${xhr.status}`)
            }
        }

        xhr.send(JSONData)
    })

    try{
        let response = await updatePromise;
        console.log(response)
    }catch(error){
        console.log(error)
    }
})