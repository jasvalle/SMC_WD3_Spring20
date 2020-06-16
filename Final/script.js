$(document).ready(function () {
   $(window).scroll(function () {
      if ($(this).scrollTop() > $("#green").height()) {
         $(".navbar").addClass("bg-dark");
      } else {
         $(".navbar").removeClass("bg-dark");
      }
   });

   $(window).scroll(function () {
      if ($(this).scrollTop() > $("#green").height()) {
         $(".dropdown-menu").removeClass("dropdowncolor");
      } else {
         $(".dropdown-menu").addClass("dropdowncolor");
      }
   });

   $('#target').click(function () {
      $('#output').html(function (i, val) {
         return val * 1 + 1
      });
      $('#output').addClass('countnum');
      $('#cart').attr('src', 'images/cart1.png');
   });


   AOS.init({
      // Global settings:
      disable: 'phone',
      duration: 1200, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
   });

   $('.carousel').carousel()
});