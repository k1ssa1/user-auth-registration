async function getAll(){
    let myPromise = new Promise(function(resolve){
        let xhr = new XMLHttpRequest()
        xhr.open("GET","https://reqres.in/api/users?page=2");
        xhr.onload = function(){
            if(xhr.status >= 200 && xhr.status < 300){
                let response = JSON.parse(xhr.responseText)
                resolve(response)
            }else{
                console.log("something went wrong : " , xhr.status)
            }
        }
        xhr.send()
    })
    try {
        let response = await myPromise;
        let users = response.data;
        let usersHTML = users.map(user => `
          <div>
            <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}">
            <p>${user.first_name} ${user.last_name}</p>
            <p>${user.email}</p>
          </div>
        `).join('');
        document.getElementById("usersList").innerHTML = usersHTML;
      } catch (error) {
        console.error(error);
        document.getElementById("usersList").innerHTML = `<p>${error}</p>`;
      }
    }

getAll();