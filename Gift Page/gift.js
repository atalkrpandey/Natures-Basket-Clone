  async function getproducts(){
    let res=await fetch("https://fakestoreapi.com/products")
    let data=await res.json();
    console.log(data)
  }
  getproducts();