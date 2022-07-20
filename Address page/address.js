document.querySelector("form").addEventListener("submit" , myAddress)
let userAdd = JSON.parse(localStorage.getItem("UserAddress")) || [];

function myAddress(){
   
      let data = {
  fname : document.querySelector("#fname").value,
  lname : document.querySelector("#lname").value,
  pin : document.querySelector("#pin").value,
  adds : document.querySelector("#adds").value,
  cty : document.querySelector("#cty").value,
  mob: document.querySelector("#mob").value,


  };   
 userAdd.push(data)
 localStorage.setItem("UserAddress" ,JSON.stringify(userAdd))
window.open("orderSummary.html");
}