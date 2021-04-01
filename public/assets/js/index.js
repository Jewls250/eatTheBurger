document.querySelector('#submitB').addEventListener('click', () =>{
    let userBurger = document.querySelector("#userBurger").value
    let obj = {
        burger: userBurger
    }
    $.ajax({
    url: "/api/burger",
    method: "POST",
    data: obj,
  }).then(function (response) {
    
    console.log(response);

  });

})

