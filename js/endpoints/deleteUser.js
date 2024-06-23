document.getElementById("deleteUser").addEventListener("submit", async e =>{
    e.preventDefault();
    let deletePromise = new Promise(function(resolve,reject){
        let deletedUser = document.getElementById("deletedid").value;
        let deleteEndpoint = "https://reqres.in/api/users/"
        let xhr = new XMLHttpRequest();
        xhr.open("DELETE", deleteEndpoint + deletedUser);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onload = function(){
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(`User id : ${deletedUser} deleted successfuly`)
            }else{
                reject(`Something went wrong : ${xhr.status}`)
            }
        }
        xhr.send()
    })

    try{
        let res = await deletePromise;
        console.log("user deleted: ", res)
    }catch(err){
        console.log("error: ",  err)
    }
})