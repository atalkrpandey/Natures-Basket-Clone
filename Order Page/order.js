
let contianer = document.getElementById("cartadd")
let cartLS = JSON.parse(localStorage.getItem("product")) 


let appendData=(cartLS)=>{
    document.querySelector("#cartadd").innerHTML=null;
  cartLS.forEach(ele => {
  
      let div=document.createElement("div");
      div.classList.add("AItemdiv")
      
  
      let img=document.createElement("img");
      img.src=ele.image;
      img.classList.add(".img")
      img.style.width = "10%"
      img.style.marginLeft = "100px"
     
      let h3=document.createElement("p");
      h3.classList.add("Atitle")
      h3.innerText=ele.title;
      h3.style.marginLeft = "12%"
      h3.style.fontSize = "15px"

      let span=document.createElement("span");
      span.classList.add("Aprice")
      span.style.marginLeft = "12%"
      span.style.border = "0px"
      span.style.display = "flex"
      span.style.justifyContent = "center"
      span.style.alignItems = "center"

      let price= +(ele.price)*1;
      price.innerText = ele.price
      span.innerText= price;

    
      
      let total = document.createElement("h3")
      total.innerText = `${price.toFixed(2)}`
      total.setAttribute("id" , "total")
      


        
      div.append(img,h3,span,total);
      contianer.append(div);
    });
  }
  appendData(cartLS)


  function totalAmt(){

    let total = document.getElementById("final-amt")
  

    cartLS.forEach(ele => {
 

        let h2 = document.createElement("p")
        h2.innerText = `Payable Amount :-  ₹ ${ele.price}`
        h2.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif"

         total.append(h2)
    });
   

  }

  totalAmt()

  