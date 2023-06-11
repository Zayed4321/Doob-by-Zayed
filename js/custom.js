// Dark Mode Part starts here 
const mode = document.querySelector(".mode");
const body = document.querySelector("body");

mode.addEventListener("click", function(){
  body.classList.toggle("darkmode")
})
// Dark Mode Part starts here 

feather.replace()

$ (function(){
    $(".prt_btn button").click(function(){
        $("button").removeClass("active")
        $( this ) .addClass("active")
    })
    var mixer = mixitup('.portfolio_filter');

    $('.slide_s').slick({
        arrows: true,
        prevArrow: '.PrevArr',
        nextArrow: '.NxtArr',
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        
        responsive: [
            {
              breakpoint: 1200,
              settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
              }
            },

            {
              breakpoint: 992,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            },

            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            },
            {
              breakpoint: 576,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
    });
})

// Video Part JS Starts Here

new VenoBox({
    selector: '.venobox',
    maxWidth : '1000px',
});

// Video Part JS Ends Here

// Navbar Fixed Part JS starts Here

var navbar = document.getElementById ("navbar")

window.addEventListener("scroll", function(){
  
  value = window.scrollY

  if(value > 100){
    navbar.classList.add("sticky")
  }
  else{
    navbar.classList.remove("sticky")
  }
})
// Navbar Fixed Part JS Ends Here