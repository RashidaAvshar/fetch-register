const BASE_URL = "http://localhost:9000";
let id = document.querySelector("#name").value;
let name = document.querySelector("#name").value;
let surname = document.querySelector("#surname").value;
let password = document.querySelector("#password").value;

fetch(`${BASE_URL}/get-data`)
        .then((res)=>res.json())
        .then((json)=>{
            json.data.map(
                item=>{
                    document.querySelector("#id").value= item.id;
                    document.querySelector("#name").value= item.name;
                    document.querySelector("#surname").value= item.surname;
                    document.querySelector("#password").value= item.password;
                }
            );                   
 });


 document.querySelector("#update").addEventListener("click", ()=>{
    let id = document.querySelector("#id").value;
    let name = document.querySelector("#name").value;
    let surname = document.querySelector("#surname").value;
    let password = document.querySelector("#password").value;

    let data = {
        id,
        name, 
        surname,
        password,
    }

    fetch(`${BASE_URL}/create-data`,{
        method: "Post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
            .then((res)=>res.json())
            .then((json)=>{
                if(json.success == "OK"){
                    document.querySelector("#id").value= "";
                    document.querySelector("#name").value= "";
                    document.querySelector("#surname").value= "";
                    document.querySelector("#password").value= "";
                    swal("Qeydiyyat ugurla tamamlandi", `${json.message}`, "success")
                    .then((willDelete) => {
                        if (willDelete) {
                          swal("Poof! Your imaginary file has been deleted!", {
                            icon: "success",
                          });
                        } 
                      });
                    // location.reload(data);
                }
            })
            .catch((error)=>{
                swal("Qeydiyyat tamamlanmadi", {
                    icon: "error",
                  });
                document.querySelector("#id").value= "";
                document.querySelector("#name").value= "";
                document.querySelector("#surname").value= "";
                document.querySelector("#password").value= "";
            });
 });

document.querySelector("#list").addEventListener("click", ()=>{
    let data = {
        id:Date.now(),
        name, 
        surname,
        password,
    }

    fetch(`${BASE_URL}/update-data:id`,{
        method: "Post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
     })
     .then((res)=>res.json())
     .then((json)=>{
         json.data.map(
             item=>{
                document.querySelector("#id").value= item.id;
                 document.querySelector("#name").value= item.name;
                 document.querySelector("#surname").value= item.surname;
                 document.querySelector("#password").value= item.password;
             }
         );                   
    });

})
 

 