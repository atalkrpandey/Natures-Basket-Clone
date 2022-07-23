
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
      
      span.style.alignItems = "center"
      span.style.textAlign="center"

      let price= (ele.price)*ele.quantity;
     
      span.innerText= ele.quantity;

    
      
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
    let sum=0;
    for(let i=0;i<cartLS.length;i++){
    sum+=cartLS[i].price*cartLS[i].quantity;
    }
    let h2 = document.createElement("p")
    h2.innerText = `Payable Amount :-  ₹ ${sum}`
    h2.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif"

     total.append(h2)
   
   

  }

  totalAmt()

  