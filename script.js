fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => {
    console.log(data);

    let container = document.getElementById("users");
    data.forEach(user=>{
        let div = document.createElement("div");
        div.innerHTML=` <h2>${user.name}</h2>
                        <p>${user.email}</p> 

                         <p>${user.phone}</p> 
                         <p>${user.company.catchPhrase}</p> 
                         <hr/>`;
                  
                         container.appendChild(div);


    })




});