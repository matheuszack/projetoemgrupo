document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut;



const form = document.getElementsById('form')
const username = document.getElementsById('username')
const email = document.getElementsById('email')

form.addEventListener ('submit', (e) =>  {
  e.preventDefault ()

  checkInputs()

}  )

function checkInputs() {
  const  usernameValue = username.value.trim()
  const  emailValue = email.value.trim()
  if(usernameValue === '') {
    errorValidation(username, 'Preencha esse campo' )
  }
else {
  successValidation(username)

}
if(emailValue === ''){
  errorValidation(email, 'preencha esse campo')
} else {
  successValidation(email)
}
}
function errorValidation(input, menssage) {
const name = input.parentElement;
const small = name.querySelector('small')
small.innerText = message
name.className = 'name error'
}

function successValidation(input) {
  const name = input.parentElement;


  name.className = 'name success'
}



