xhr.open("GET","https://reqres.in/api/users?page=1")

xhr.onload = function(){
    if(xhr.status == 200){
        let respnseMessage = JSON.parse(xhr.responseText)
        document.getElementById("displayer").innerHTML = respnseMessage.first_name
        console.log(xhr.responseText[0].email)
    }else{
        console.log("error :" + xhr.status)
    }
}

xhr.send()