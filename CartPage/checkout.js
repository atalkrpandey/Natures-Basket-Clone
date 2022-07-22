let data=[
    {
        image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/b39a7966-b0fe-485d-8cec-39d85c570a8f_425x425.jpg",
        title: "REAL GOOD CHICKEN CURRY CUT 500G",
        price:175
    } ,
    {
        image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/863d1720-c563-449d-85fb-a85a699fc54d_425x425.jpg",
        title: " REAL GOOD CHICKEN BREAST BONELE",
        price:190
    } ,
    {
        image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/5f0bf801-bc90-4715-acaf-b980a919f9aa_425x425.jpg",
        title: "ZORABIAN CHICKEN DRUMSTICK",
        price:265
    } ,
    {
        image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/7fb83bef-4c1c-4f81-96e6-44c4d3eac077_425x425.jpg",
        title: "Apple Royal Gala - New Zealand",
        price:199
    } 
    
]

let append=(data)=>{
  document.querySelector("#appenddiv").innerHTML=null;
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
   
        h31.innerText="Delivered In 90 Minutes"
        h31.classList.add("Aplacedtime")
       
        
      
    div.append(img,h31,h3,span,button);
    document.querySelector("#appenddiv").append(div);
  });
}
append(data)