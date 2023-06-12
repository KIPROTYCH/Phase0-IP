
// Adding event listner and alert to submit button
    document.addEventListener('DOMContentLoaded', function() {
        // Get the submit button element
        var submitButton = document.querySelector('button[type="submit"]');
        submitButton.addEventListener('click', function(event) {
            alert('Form submitted!');
        });
    });

//Adding event Listner and alert to download button

document.addEventListener('DOMContentLoaded',function(){
    var downloadButton = document.querySelector('button[type="download"]');

    downloadButton.addEventListener('click',function(event){
        alert('CV has been Downloaded');
    })
})

// $(document).ready(function() {
//     $('#menu').click(function(){
//         $(this).toggleClass('fa-times');
//         $('header').toggleClass('toggle');

//     });


// $(window).on('scroll load', function(){
//     $('#menu').removeClass('fa-times');
//     $('header').removeClass('toggle');
// });


// // To enable smooth scrolling effect
// $(`a[href*="#"]`).on('click', function(e){
//     e.preventDefault();
//     $('html, body').animate({
//         scrollTop : $($(this).attr(`href`)).offset().top,
//     },
//     500,
//     `linear`
//     )

// })

// });
