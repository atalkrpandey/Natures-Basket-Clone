import {footer} from '../footer-part/footer-main.js';

console.log(footer);

document.getElementById('imported-Footer').innerHTML = footer();
// 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️🤦🤦‍♂️🤦‍♂️🤦‍♂️🤦🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️🤦 

// <!-- Swiper JS -->


// <!-- Initialize Swiper -->

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  document.getElementById('subscribe-btn').addEventListener('click',()=>{subscribe()})
 
 function subscribe(){
 
     event.preventDefault();
     let form = document.getElementById('fifthColumn');
 
     let email = form.email_subscription.value;
 
     console.log(email);
 
         if(email == null){
 
             alert('Please Enter your email address')
   
        }
        else{
     
             alert('Signup sucessful')
             
        }
 
     }



     //🔪🔪🔪🔪🔪🔪🔪🔪🔪🔪🔪🔪🔪🔪🔪🔪🔪🔪🔪🔪🔪🔪🔪🔪🔪🔪🔪

     
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 10,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let objData  = [

  {
    image :'https://d1z88p83zuviay.cloudfront.net/Images/no-images425x425.jpg',
    title : 'BAGRRYS FRT FBR STR JR 1 KG - 1 Pc',
    category: "Health",
    price: 99 ,

  },

  {
   
    image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/a4cc6a4e-e0fd-4426-aecf-27f5a9dfeecb_425x425.jpg", 
    title: "BAGRRYS FRT FBR STR JR 1 KG - 1 Pc",
    category: "Health",
    price: 99,
     
  },

  {

    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/a1b8e8fb-54e0-400e-9ad1-3a3a26c62868_425x425.jpg",
      title: "TROPICANA ORANGE JUICE 1000ML TET - 1 Pc",
      price: 110,
      category: "Health",
  },

  {

    image:
    "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/0f50c233-17c0-40a5-95dd-c8e3a4d79bae_425x425.jpg",
    title: "MUSHROOM BUTTON 1 PC PK NB - 1 Pc",
    price: 50,
    category: "Health",
  },

  {
    image:
    "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/a1b8e8fb-54e0-400e-9ad1-3a3a26c62868_425x425.jpg",
    title: "TROPICANA ORANGE JUICE 1000ML TET - 1 Pc",
    price: 110,
    category: "Offers",
  },
  {
    image:
    "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/a4cc6a4e-e0fd-4426-aecf-27f5a9dfeecb_425x425.jpg",
    title: "TROPICANA PR GUAVA NECTOR 1000ML TET - 1 Pc",
    price: 100,
    category: "Offers",
  },
  {
    image:
    "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/3f563fe9-e01c-4f9e-9558-0a9596c3447c_425x425.jpg",
    title: "BAGRRYS FRT FBR STR JR 1 KG - 1 Pc",
    price: 99,
    category: "Organic",
  },
  {
    image:
    "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/92bb1790-9b86-4df6-86fb-22d5bcb0ba52_425x425.jpg",
    title: "BAGRRYS FRT FBR STR JR 1 KG - 1 Pc",
    price: 99,
    category: "Organic",
  },
  {
    image:
    "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/58d6ed5c-3c1f-4003-9320-edd3ff13548c_425x425.jpg",
    title: "BAGRRYS WHITE OATS PUCH 500g - 1 Pc",
    price: 99,
    category: "Organic",
  },
  {
    image:
    "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/03dff5a4-7597-4057-b485-7305c85b0251_425x425.JPG",
    title: "Brinjal Small 250g",
    price: 40,
    category: "Organic",
  },
  {
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/999a14d9-d3ad-4d97-b637-813aeebfdf69_425x425.jpg",
      title: "CAULIFLOWER 1 PC PK NB - 1 Pc",
      price: 69,
      category: "Offers",
  },
  {
    image:
    "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/6d4cd380-9b73-4092-9704-945abfe09637_425x425.JPG",
    title: "SALAD READY TO EAT 1 PC PK NB - 1 Pc - 500g",
    price: 40,
    category: "Offers",
  },
  {
  image  : "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1f4696d3-e753-463e-a87c-1457b2e2f242_425x425.jpg",
  title:'Organic Flax Seeds - Healthy Alternatives',
  price:200,
  category:'Gifts'
  },
  {
    image:'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/9ea315fa-fcd1-4d3b-a968-17a78bfafc5b_425x425.jpg',
    title:'HA SPROUTED AMARANTH FLOUR 400G 1 Pc',
    price:250,
    category:'Gifts',
  },

  {
    image  : "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1f4696d3-e753-463e-a87c-1457b2e2f242_425x425.jpg",
  title:'Organic Flax Seeds - Healthy Alternatives',
  price:80,
  category:'Gifts'
  },
  {
    image:'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/9ea315fa-fcd1-4d3b-a968-17a78bfafc5b_425x425.jpg',
    title:'HA SPROUTED AMARANTH FLOUR 400G 1 Pc',
    price:100,
    category:'Gifts',
  }

]
let getData = ()=>{
  
   let data = objData;

  console.log(data)
  document.getElementById('filterOfferCate-div').addEventListener('click', ()=>{filterByOffer(data)})


  document.getElementById('filterHealthCate-div').addEventListener('click',()=>{filterByHealth(data)})

  document.getElementById('filterOrganicCate-div').addEventListener('click',()=>{filterByOrganic(data)})

  document.getElementById('filterGiftsCate-div').addEventListener('click',()=>{filterByGifts(data)})

}
getData()

let category = (categories)=>{

  
}
let filterByOffer = (data)=>{
  let newdata=data.filter((ele)=>{
  return ele.category==="Offers"
  })
  console.log(newdata)
  append(newdata)

}

let append = (newdata)=>{

let arr=newdata;

  let container = document.getElementById('filterCategory-div')
  container.innerHTML = null;

  
  for(let i=0; i<arr.length; i++){
    
    let div = document.createElement('div');
    div.setAttribute('class', 'filtereddiv');

    let img = document.createElement('img');
    img.src =arr[i].image;
    img.setAttribute('class','filteredimage')

    let t = document.createElement('h4');
    t.innerText =arr[i].title;
    t.setAttribute('class','filteredtitle');

    let p = document.createElement('p');
     p.innerText = `MRP ${arr[i].price}`;
     p.setAttribute('class','filteredprice');

     let btn = document.createElement('button');
     btn.setAttribute('class','cartAddbtn');
     btn.innerText = "ADD"

      div.append(img,t,p,btn)
      container.append(div)
  }
  
  
}

let filterByOrganic = (data)=>{
  let newdata=data.filter((ele)=>{
  return ele.category==="Organic"
  })
  console.log(newdata)
  append3(newdata)

}

let append3 = (categories)=>{

let arr=categories;

  let container = document.getElementById('filterCategory-div')
  container.innerHTML = null;

  
  for(let i=0; i<arr.length; i++){
    
    let div = document.createElement('div');
    div.setAttribute('class', 'filtereddiv');

    let img = document.createElement('img');
    img.src =arr[i].image;
    img.setAttribute('class','filteredimage')

    let t = document.createElement('h4');
    t.innerText =arr[i].title;
    t.setAttribute('class','filteredtitle');

    let p = document.createElement('p');
    p.innerText = `MRP ${arr[i].price}`;
     p.setAttribute('class','filteredprice');

     let btn = document.createElement('button');
     btn.setAttribute('class','cartAddbtn');
     btn.innerText = "ADD"

      div.append(img,t,p,btn)
      container.append(div)
  }
  
  
}


let filterByGifts = (data)=>{

  
  let newdata=data.filter((data)=>{
   return (data.category==="Gifts" )
 
  })
  console.log(newdata)
  append4(newdata)
     //
  // append4(data.category === "Gifts")

}

let append4 = (categories)=>{

let arr=categories;
    console.log(arr)
  let container = document.getElementById('filterCategory-div')
  container.innerHTML = null;

  
  for(let i=0; i<arr.length; i++){
    
    let div = document.createElement('div');
    div.setAttribute('class', 'filtereddiv');

    let img = document.createElement('img');
    img.src =arr[i].image;
    img.setAttribute('class','filteredimage')

    let t = document.createElement('h4');
    t.innerText =arr[i].title;
    t.setAttribute('class','filteredtitle');

    let p = document.createElement('p');
    p.innerText = `MRP ${arr[i].price}`;
     p.setAttribute('class','filteredprice');

     let btn = document.createElement('button');
     btn.setAttribute('class','cartAddbtn');
     btn.innerText = "ADD"

      div.append(img,t,p,btn)
      container.append(div)
  }
  
  
}


let filterByHealth = (data)=>{
  let newdata=data.filter((ele)=>{
  return ele.category==="Health"
  })
  console.log(newdata)
  append2(newdata)

}

let append2 = (categories)=>{

let arr=categories;

  let container = document.getElementById('filterCategory-div')
  container.innerHTML = null;

  
  for(let i=0; i<arr.length; i++){
    
    let div = document.createElement('div');
     div.setAttribute('class', 'filtereddiv');

    let img = document.createElement('img');
    img.src =arr[i].image;
    img.setAttribute('class','filteredimage')

    let t = document.createElement('h4');
    t.innerText =arr[i].title;
    t.setAttribute('class','filteredtitle');

    let p = document.createElement('p');
    p.innerText = `MRP ${arr[i].price}`;
     p.setAttribute('class','filteredprice');

     let btn = document.createElement('button');
     btn.setAttribute('class','cartAddbtn');
     btn.innerText = "ADD"

      div.append(img,t,p,btn)
      container.append(div)
  }
     
}

function clickimageone(el){
el.style.backgroundColor = "0px solid white";
document.getElementById("filterOfferCate-div").style.backgroundColor = "1px solid white";
}

function clickimagetwo(el){
el.style.backgroundColor = "0px solid #92be4d";
document.getElementById("filterHealthCate-div").style.backgroundColor = "1px solid white";
}

function clickimagethree(el){
el.style.backgroundColor = "0px solid #92be4d";
document.getElementById("filterOrganicCate-div").style.backgroundColor = "1px solid white";
}

function clickimagefour(el){
el.style.backgroundColor = "0px solid #92be4d";
document.getElementById("filterGiftsCate-div").style.backgroundColor = "1px solid white";
}









