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
      $('#cart').attr('src','images/cart1.png');
   });

   AOS.init({
      duration: 1200,
   })
   $('.carousel').carousel()


   (function () {
      'use strict';
      window.addEventListener('load', function () {
          var forms = document.getElementsByClassName('needs-validation');
          var validation = Array.prototype.filter.call(forms, function (form) {
              form.addEventListener('submit', function (event) {
                  if (form.checkValidity() === false) {
                      event.preventDefault();
                      event.stopPropagation();
                  }
                  form.classList.add('was-validated');
              }, false);
          });
      }, false);
  })();


  
});