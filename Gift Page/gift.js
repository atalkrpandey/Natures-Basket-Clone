  let data;
  async function getproducts(){
    let res=await fetch("https://fakestoreapi.com/products")
     data=await res.json();
    append(data);
    console.log(data)
  }
  getproducts();

  let append=(data)=>{
    document.querySelector("#Aappenddiv").innerHTML=null;
    data.forEach(ele => {
      let div=document.createElement("div");
      div.classList.add("AItemdiv")
      let img=document.createElement("img");
      img.src=ele.image;
      img.style.borderRadius="10px"
      img.classList.add("Aappendimg")
      let h31=document.createElement("h3");
      
      h31.innerText=null;
      let h3=document.createElement("h3");
      h3.classList.add("Atitle")
      h3.innerText=ele.title;
      let span=document.createElement("span");
      span.classList.add("Aprice")
      let price=+(ele.price)*10;
      span.innerText=`MRP:- ${price.toFixed(2)}`;
      let button=document.createElement("button");
      button.classList.add("Aaddbutton")
      button.innerText="ADD";
      if(price>1000){
        h31.innerText="Delivered In 90 Minutes"
        h31.classList.add("Aplacedtime")
        img.src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/5179afc6-856c-428c-8ff7-41ddcce41710_425x425.jpg"
        h3.innerText="E-Gift Voucher"
      }
      div.append(img,h31,h3,span,button);
      document.querySelector("#Aappenddiv").append(div);
    });
  }
  document.querySelector("#Afilterbutt1").addEventListener("click",function(){
   let newdata= data.filter((ele)=>{
      return +(ele.price)*10>1000
    })
    append(newdata);
  })
  document.querySelector("#Afilterbutt2").addEventListener("click",function(){
   
     append(data);
   })
   document.querySelector("#Agiftsort").addEventListener("change",function(){
    let input=document.querySelector("#Agiftsort").value;
   if(input=="lowtohigh"){
   let newdata =data.sort(function(a,b){
      return(a.price-b.price)
    })
    append(newdata)
   }
   if(input=="hightolow"){
    let newdata =data.sort(function(a,b){
       return(b.price-a.price)
     })
     append(newdata)
    }
    if(input=="all"){
      
       append(data)
      }
  })
  document.querySelector("form").addEventListener("submit",function(){
    let query=document.querySelector("#Aformenq").value;
    if(query!==""){
      alert("Your query has recorded,We will connect with you soon.")
    }else{
      alert("Please fill your query first.")
    }
  })