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
    let li = document.createElement("li");
    li.append(userBurger)
    document.querySelector("#waiting").append(li)
    console.log(response);

  });

})

addEventListener("click", (e) => {
  console.log(e.target.id)
  let burgerID = e.target.id
  let userBurger = document.querySelector("#userBurger").value;
  let obj = {
    burger: userBurger,
  };
  $.ajax({
    url: "/api/burger",
    method: "PUT",
    data: obj,
  }).then(function (response) {
    let li = document.createElement("li");
    li.append(userBurger);
    document.querySelector("#waiting").append(li);
    console.log(response);
  });
});

