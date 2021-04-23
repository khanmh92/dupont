$(document).ready(function () {

    //scrollify pluging//
    // $.scrollify({
    //     section : ".scrollify",
    //     setHeights: false,
    //     updateHash: false,
    //   }); (jquery.scrollify.min.js)-deleted

    //smooth scroll on navigation//

    $("a").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000);
        }
    });

    // AVTIVE LINK //
    $("nav ul li a").click(function () {
        $("nav ul li a").removeClass("active");
        $(this).addClass("active");
    });

    $("nav a img.logo").click(function () {
        $("nav ul li a").removeClass("active");
        $("nav ul li:first-child a").addClass("active");
    });

});
//function for mobile menu//
function openNav() {
    document.getElementById("myNav").style.width = "100%"
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%"
}


// mixitup plaugings //

var mixer = mixitup('.grid-port');

//scrollify plaugings// 

// $(function() {
//     $.scrollify({
//       section : ".scrollify",
//       setHeights: false,
//       updateHash: false,
//     });
//   });