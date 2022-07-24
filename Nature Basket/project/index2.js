
import {footer} from './footer-part/footer-main.js';

 console.log(footer);

document.getElementById('imported-Footer').innerHTML = footer();

let  categories = 
  [
   {
     category: "Fruits-and-Vegetables",
     sub_category: "Daily-Vegetables",
     cities: [
       { city: "Mumbai", quantity: 200 },
       { city: "Delhi", quantity: 300 },
       { city: "Bengaluru", quantity: 150 },
       { city: "Chennai", quantity: 100 },
     ],
     product: {
       brand: "Fruit and Vegetable",
       description:
         "Try masala curry which is an amazing mix of brinjals with simmering spices cooked in gravy",
       image:
         "https://th.bing.com/th/id/OIP.xnkmnMHwJ3nYbXYxjLHAVQHaE0?w=284&h=185&c=7&r=0&o=5&pid=1.7",
       title: "mango",
       price: 100,
     },
   },
 
   {
     category: "Fruits-and-Vegetables",
     sub_category: "Daily-Vegetables",
     cities: [
       { city: "Mumbai", quantity: 100 },
       { city: "Delhi", quantity: 200 },
       { city: "Bengaluru", quantity: 190 },
       { city: "Chennai", quantity: 280 },
     ],
     product: {
       brand: "Natures Best",
       title: "mango",
       price: 300,
       image:
         "https://www.producereport.com/sites/default/files/field/image/cover_mango.jpg",
     },
   },
   {
     category: "Fruits-and-Vegetables",
     sub_category: "Daily-Vegetables",
     cities: [
       { city: "Mumbai", quantity: 200 },
       { city: "Delhi", quantity: 300 },
       { city: "Bengaluru", quantity: 150 },
       { city: "Chennai", quantity: 100 },
     ],
     product: {
       brand: "Natures Best",
       title: "mango",
       price: 200,
       image:
         "https://th.bing.com/th/id/R.37c6afd7b193facde170d86743183d9d?rik=sHcm8sSZtNzsIQ&riu=http%3a%2f%2fwww.watchmyfoodgrow.com%2fwp-content%2fuploads%2f2013%2f08%2fIMG_2285.jpg&ehk=Q8d2xysbV3fRizuPt9II0xJ3XWrEqSSwnlz95unc5W0%3d&risl=&pid=ImgRaw&r=0",
     },
   },
   {
     category: "Fruits-and-Vegetables",
     sub_category: "Daily-Vegetables",
     cities: [
       { city: "Mumbai", quantity: 2000 },
       { city: "Delhi", quantity: 100 },
       { city: "Bengaluru", quantity: 3000 },
       { city: "Chennai", quantity: 1300 },
     ],
     product: {
       brand: "Natures Best",
       title: "orange",
       price: 150,
       image:
         "https://th.bing.com/th/id/OIP.YW2khh6jd5_DQkdp5veGTQHaE7?pid=ImgDet&rs=1",
     },
   },
   {
     category: "Fruits-and-Vegetables",
     sub_category: "Daily-Vegetables",
     cities: [
       { city: "Mumbai", quantity: 100 },
       { city: "Delhi", quantity: 68 },
       { city: "Bengaluru", quantity: 220 },
       { city: "Chennai", quantity: 520 },
     ],
     product: {
       brand: "Fruit and Vegetable",
       title: "orange",
       price: 400,
       description:
         "People of all regions and culinary tastes love potatoes.They have a thin skin that covers the hard flesh. It's eaten with or without its peel. It can be consumed as a roast, a mash, in fried form, etc.",
       image:
         "https://yt3.ggpht.com/a/AATXAJzFIlgIjye9H0xcWtrR99ZWM2vVC_LzTJe2AA=s900-c-k-c0xffffffff-no-rj-mo",
     },
   },
   {
     category: "Fruits-and-Vegetables",
     sub_category: "Daily-Vegetables",
     cities: [
       { city: "Mumbai", quantity: 134 },
       { city: "Delhi", quantity: 290 },
       { city: "Bengaluru", quantity: 110 },
       { city: "Chennai", quantity: 1090 },
     ],
     product: {
       brand: "Fruit and Vegetable",
       title: "banana",
       price:50,
       description:
         "Add sage and cheddar to make an extra special and delicious onion soup",
       image:
         "https://th.bing.com/th/id/R.a0e4cdca117c476140960f42dc12bbf3?rik=FgWZxaRlE8WaFA&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f9%2f99%2fBananas.JPG&ehk=3qVULA7uXcRl65bU%2fMe0CELnwLZDLdx5NLpjSm4N9dM%3d&risl=&pid=ImgRaw&r=0",
     },
   },
   {
     category: "Fruits-and-Vegetables",
     sub_category: "Daily-Vegetables",
     cities: [
       { city: "Mumbai", quantity: 200 },
       { city: "Delhi", quantity: 300 },
       { city: "Bengaluru", quantity: 150 },
       { city: "Chennai", quantity: 100 },
     ],
     product: {
       brand: "Fruit and Vegetable",
       title: "banana",
       price: 60,
       description:
         "Stuff tomatoes with some mixed veggies and crumbled panner and enjoy them grilled",
       image:
         "https://3.bp.blogspot.com/-8K_D47jEkxs/UJeoCWpKJFI/AAAAAAAABfg/bXlUIV7GKxE/s1600/20121104_Banana_11.JPG",
     },
   },
]


 

 document.getElementById('query').addEventListener('input',()=>{objData(categories)});

let objData = (categories)=>{

  let query = document.getElementById('query').value;
  for(let i=0;i<categories.length;i++){
    if(query === (categories[i].product.title)){
      console.log(categories[i].product.title)
      let variable = (categories[i].product);
      searchObj(variable);
    }
  }
 
}


let array = [];
let searchObj = (obj)=>{
  console.log(obj)
  let query = document.getElementById('query').value;
  array.push(obj)
 
  let cont = document.getElementById('search-container');
  cont.innerHTML = null;

  array.forEach((el)=>{

      let div = document.createElement('div');
      div.setAttribute('class','search-div');

      let img = document.createElement('img');
      img.src = el.image;
      img.setAttribute('class','searchImage');

      let t = document.createElement('h5');
      t.innerText = el.title;
      t.setAttribute('class','searchTitle');

      let p = document.createElement('p');
      p.innerText = `RS: ${el.price}` ;
      p.setAttribute('class','searchPrice');

      let c = document.createElement('p')
      c.innerText = el.brand;
      c.setAttribute('class','searchBrand')

      let btn = document.createElement('button');
      btn.innerText = "ADD";
      btn.setAttribute('class','searchBtn')
      btn.addEventListener('click',function(){
        addtoCartBtn(el)
      })
   
      div.append(img,t,p,c,btn)
      cont.append(div);
  })

}
let count = 0;
let addtoCartBtn = (el)=>{
  
  let newarr=[]
  let obj={
image:el.image,
title:el.title,
price:el.price,
quantity:1
  }
      count++;
 
    newarr.push(obj)
 
   document.getElementById('cart-count-btn').innerText = count;
    localStorage.setItem('cart-count',JSON.stringify(count));
    localStorage.setItem('product',JSON.stringify(newarr))
}


let form1=document.getElementById("login");
form1.addEventListener("submit",function(event){
    event.preventDefault();
      let data={
          email:form1.email.value,
          pass:form1.pass.value
      }
      if(checksignIn(data.email,data.pass)===true){
          localStorage.setItem("signIn",JSON.stringify(data));
          alert("SignIn Succesfull !")
         
      }
      else{
          alert("Wrong Credentials");
      }
   })
   function checksignIn(email,pass){
   let filterd=userdata.filter (function (elem){
      return elem.email===email&&elem.pass===pass;
   })
   if(filterd.length>0){
      return true;
  
   } else{
      return false;
   }
   }

//    ✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔
document.getElementById('shop-by-category').addEventListener('click',()=>{myFunction()})
let  myFunction = ()=> {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {

        console.log(dropdowns[i])
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
  document.querySelector("#gift").addEventListener("click",function(){
    window.location.href="gift.html";
  })
  document.querySelector("#cart-icon").addEventListener("click",function(){
    window.location.href="../cartPage/checkout.html"
  })