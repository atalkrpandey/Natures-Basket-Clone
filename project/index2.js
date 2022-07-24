

let form=document.getElementById("form1");
let userdata=JSON.parse(localStorage.getItem("userdata"))||[];

form.addEventListener("submit",function (event){
    event.preventDefault();
    
    let data={
        email:form.mobileno.value,
        pass:form.pswrdenter.value,
        repass:form.pswrdrenter.value    
    }
    if((data.email &&data.pass)==""){
        alert("feilds are empty")
    }
    else if(data.pass!==data.repass){
        alert('password not match')
    }
    else if(checkmail(data.email)===true){
        userdata.push(data);
        localStorage.setItem("userdata",JSON.stringify(userdata));
        alert("account created succesfully ")
       
       
       
       
    }
    else{
        alert("account already exists")
    }
    form.reset()
 })
 let checkmail =(email)=>{
    let filterd=userdata.filter (function (elem){
        return email===elem.email;
    })
    if(filterd.length>0){
        return false;
    }else{
        return true;
    }
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