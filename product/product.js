var Data1 =JSON.parse(localStorage.getItem("showProduct"))  

var image1= document.querySelector("#img1");
var im1=document.createElement("img");
im1.setAttribute("src",Data1.image_url1)
image1.append(im1)

let head=document.getElementById("head")
let hr=document.createElement("h2");
hr.innerText=Data1.heading
head.append(hr)

let prdct =document.getElementById("prdct")
let prdcth3=document.createElement("h3")
prdcth3.innerText="Product of : "+Data1.prd;
prdct.append(prdcth3)

var pric=document.getElementById("price");
pric.innerText=Data1.price;


var buto=document.querySelector("#add")
let count=0;
buto.addEventListener("click",function(){
 

  count++;
  console.log(count)
  document.querySelector("#spanQ").innerText=count;
  buttonfunction(Data1)
});

   


//------add to cart part---->
let cart=JSON.parse(localStorage.getItem("product")) || [];
function buttonfunction(Data1){
  let newdata=cart.filter(ele => {
    return ele.title=Data1.heading;
  });
  if(newdata.length!==0){
    
    for(let i=0;i<cart.length;i++){
      if(cart[i].title==newdata[0].title){
        cart[i].quantity=count;
      }
      localStorage.setItem("product",JSON.stringify(cart))
      alert("Item Added to Cart");
    }
  }else{
    let obj={
    image:Data1.image_url1,
    title:Data1.heading,
    price:Data1.box,
    quantity:1
    }
cart.push(obj);
    localStorage.setItem("product",JSON.stringify(cart))
    alert("Item Added to Cart");
  }
    }
// function carthtml(){
//     window.location.href="cart.html";
// }
