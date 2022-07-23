

let contianer = document.getElementById("cartadd")
let cartLSG = JSON.parse(localStorage.getItem("product")) 


let appendData=(cartLS)=>{
    document.querySelector("#cartadd").innerHTML=null;
  cartLS.forEach(ele => {
  
      let div=document.createElement("div");
      div.classList.add("AItemdiv")
      
  
      let img=document.createElement("img");
      img.src=ele.image;
      img.classList.add(".img")
      img.style.width = "10%"
     
      let td=document.createElement("td");
      td.classList.add("Atitle")
      td.innerText=ele.title;
      td.style.marginLeft = "10%"
      td.style.fontSize = "15px"

      let span=document.createElement("span");
      span.classList.add("Aprice")
      span.style.marginLeft = "7%"
      span.style.border = "0px"
      span.style.display = "flex"
      span.style.justifyContent = "center"
      span.style.alignItems = "center"

      let price= +(ele.price)*1;
      price.innerText = ele.price
      span.innerText= price;

      let btn1 = document.createElement("button")
      btn1.innerText = "-"
      btn1.setAttribute("id" , "btnDec")
      
      let total = document.createElement("h3")
      total.innerText = `${price.toFixed(2)}`
      total.setAttribute("id" , "total")

      let btn2 = document.createElement("button")
      btn2.innerText = "1"
      btn2.setAttribute("id" , "btnDisp")

      let btn3 = document.createElement("button")
      btn3.innerText = "+"
      btn3.setAttribute("id" , "btnInc")
        
      div.append(img,td,span,btn1,btn2,btn3,total);
      contianer.append(div);
    });
  }
  appendData(cartLS)




  counter = localStorage.getItem("localCounter") || 1;
  document.querySelector("#btnDisp").innerText = counter;
  
  document.querySelector("#btnInc").addEventListener("click", incFunc);
  function incFunc(){
      counter++;
      document.querySelector("#btnDisp").innerText = counter;
      localStorage.setItem("localCounter", counter);
      let amount =  (document.querySelector(".Aprice").innerText);
      let amount_new = 0;
      
      if (amount.includes(",")){
          let amount_arr = amount.split(',');
          amount_new = amount_arr[0] + amount_arr[1];
      }else{
          amount_new = amount;
      }
      
      console.log(amount_new);
      document.getElementById("total").innerText = `${amount_new * counter}`;
      document.getElementById("totalamt").innerText = `₹ ${amount_new * counter}`;
  }

  document.querySelector("#btnDec").addEventListener("click", decFunc);
  function decFunc(){
      counter--;
      document.querySelector("#btnDisp").innerText = counter;
      localStorage.setItem("localCounter", counter);
      let amount =  (document.querySelector(".Aprice").innerText);
      let amount_new = 0;
      if (amount.includes(",")){
          let amount_arr = amount.split(',');
          amount_new = amount_arr[0] + amount_arr[1];
      }else{
          amount_new = amount;
      }
      console.log(amount_new);
      document.getElementById("total").innerText = `${amount_new * counter}`;
      document.getElementById("totalamt").innerText = `₹ ${amount_new * counter}`;
  }


  function total(){

    let total = document.getElementById("totalamt")

    cartLS.forEach(ele => {
        let h2 = document.createElement("p")
        h2.innerText = `₹.${ele.price}`
        h2.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif"

         total.append(h2)
    });
   

  }

  total()

