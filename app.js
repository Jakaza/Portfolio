const openBtn = document.querySelector("#open-btn")
const closeBtn = document.querySelector("#close-btn")
const sideMenu = document.querySelector("#sidebar")
const closeLinks = document.querySelectorAll('.close')


  if(window.innerWidth <= 883){
    document.querySelector('.user-details').classList.toggle('user-details-svg')
  }


openBtn.addEventListener('click', function(){
  openBtn.classList.toggle('first-spin')
  sideMenu.classList.toggle('show-sidebar')
  
  setTimeout(function(){
    openBtn.classList.toggle('hide-btn')
    closeBtn.classList.toggle('hide-btn')
    openBtn.classList.toggle('first-spin')
  }, 300)
})


closeBtn.addEventListener('click', function(){
  closeSideMenu()
})

closeLinks.forEach(button => {
    button.addEventListener('click', ()=>{
      closeSideMenu()
    })
});

function closeSideMenu(){
  closeBtn.classList.toggle('first-spin')
  sideMenu.classList.toggle('show-sidebar')
  
  setTimeout(function(){
    closeBtn.classList.toggle('hide-btn')
    openBtn.classList.toggle('hide-btn')
    closeBtn.classList.toggle('first-spin')
  }, 300)
}


const buttonScroll = document.querySelector('.button-scroll');

buttonScroll.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})

window.onscroll = () => {
    toggleTopButton();
}

function toggleTopButton() {
    if (document.body.scrollTop > 750 ||
        document.documentElement.scrollTop > 750) {
        buttonScroll.classList.remove("hide-button-scroll")
    } else {
        buttonScroll.classList.add("hide-button-scroll")
    }
}











// window.addEventListener("scroll", function () {
//   if (window.pageYOffset > 80) {
//     navbar.classList.add("navbar-fixed");
//   } else {
//     navbar.classList.remove("navbar-fixed");
//   }
// });

// navBtn.addEventListener("click", function () {
//   sidebar.classList.add("show-sidebar");
// });
// closeBtn.addEventListener("click", function () {
//   sidebar.classList.remove("show-sidebar");
// });

// date.innerHTML = new Date().getFullYear();