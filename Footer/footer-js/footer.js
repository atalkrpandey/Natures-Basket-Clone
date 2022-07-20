

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
  
