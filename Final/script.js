$(document).ready(function () {
   $(window).scroll(function () {
      if ($(this).scrollTop() < $("#green").height()) {
         $(".navbar").removeClass("bg-dark");
      } else {
         $(".navbar").addClass("bg-dark");
      }
   });

   $(window).scroll(function () {
      if ($(this).scrollTop() < $("#green").height()) {
         $(".dropdown-menu").removeClass("dropdowncolor");
      } else {
         $(".dropdown-menu").addClass("dropdowncolor");
      }
   });

   $('#target').click(function () {
      $('#output').html(function (i, val) {
         return val * 1 + 1
      });
   });

   AOS.init({
      duration: 1200,
   })
   $('.carousel').carousel()
});