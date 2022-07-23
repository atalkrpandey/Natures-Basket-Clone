
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
}


let arrFromLS =JSON.parse (localStorage.getItem("UserAddress"));
  
displayUser(arrFromLS)

function  displayUser(arrFromLS){

 document.querySelector("#addDet").innerHTML=""

  arrFromLS.forEach(function(elem,dlt){

      let box = document.createElement("div")
      box.setAttribute("class" , "result")

      let para1 = document.createElement("p")
      para1.innerText = elem.fname
      para1.style.fontSize="16px"

      let para2 = document.createElement("p")
      para2.innerText = elem.lname
      para2.style.lineHeight="0px"

      let para3 = document.createElement("p")
      para3.innerText = elem.adds
      let para4 = document.createElement("p")
      para4.innerText = elem.cty

      let para5 = document.createElement("p")
      para5.innerText = elem.pin

      let para6 = document.createElement("p")
      para6.innerText = elem.mob

      box.append(para1,para2,para3,para4,para5,para6)
      document.querySelector("#addDet").append(box)
  })
}
