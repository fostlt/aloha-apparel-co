var elem = document.querySelector('.carousel-container');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.carousel-container', {
  // options
});




// document.addEventListener("DOMContentLoaded", function() {  
//     // console.log("hello world")

//     const elem = document.querySelector('.main-carousel');
//     const flkty = new Flickity( elem, {
//       // options
//       cellAlign: 'left',
//       wrapAround: true,
//       freeScroll: true
//     });



//     const  emailInput = document.getElementById("emailInput");
//     const  subBtn = document.getElementById("subBtn");
//     const  subForm = document.getElementById("emailInfo");

//     subForm.addEventListener("submit", function(event) {
//       event.preventDefault();
//       if (emailInput.value === "") {
//         alert("Please enter a valid email address!");
//       } else {
//         alert("Thanks for subscribing!");
//         emailInput.value = ""
//       }
//     }); 


//     const cartNumber = document.getElementById("cartNumber");
//     const cartBtn = document.getElementsByClassName("cartBtn");
    
//     let clicks = 0;

//     for(let i = 0; i < cartBtn.length; i++){
//       cartBtn[i].addEventListener("click", function addclicks() {
//         clicks++;
//         console.log(clicks);
//         cartNumber.innerHTML = clicks



//       });
//     }




























// }); /// end of doc ready
