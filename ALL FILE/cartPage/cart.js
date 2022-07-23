

let contianer = document.getElementById("cartadd")
let cartLSG = JSON.parse(localStorage.getItem("product")) 
document.querySelector("#Item").innerText=cartLSG.length;

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
      btn1.addEventListener("click",function(){
        if(ele.quantity==0){
          alert("Worng Credentials")
        }else{
            for(let i=0;i<cartLSG.length;i++){
                if(cartLSG[i].title==ele.title){
                    cartLSG[i].quantity--;
                }
            }
            localStorage.setItem("product",JSON.stringify(cartLSG))
            window.location.reload();
        }
        
      })
      btn1.setAttribute("id" , "btnDec")
      
      let total = document.createElement("h3")
      total.innerText = `${(ele.price*ele.quantity).toFixed(2)}`
      total.setAttribute("id" , "total")

      let btn2 = document.createElement("button")
      btn2.innerText = ele.quantity;
      btn2.setAttribute("id" , "btnDisp")

      let btn3 = document.createElement("button")
      btn3.innerText = "+"
      btn3.setAttribute("id" , "btnInc")
       btn3.addEventListener("click",function(){
        for(let i=0;i<cartLSG.length;i++){
            if(cartLSG[i].title==ele.title){
                cartLSG[i].quantity++;
            }
        }
        localStorage.setItem("product",JSON.stringify(cartLSG))
        window.location.reload();
       }) 
      div.append(img,td,span,btn1,btn2,btn3,total);
      contianer.append(div);
    });
  }
  appendData(cartLS)

 
  let sum=0;
  for(let i=0;i<cartLSG.length;i++){
  sum+=cartLSG[i].price*cartLSG[i].quantity;
  }
  document.querySelector("#totalamt").innerText=sum;



    let total = document.getElementById("totalamt")

   
   

  

  

