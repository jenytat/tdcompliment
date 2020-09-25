$(document).ready(function(){
    $('.product__image-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product__image-small'
      });
      $('.product__image-small').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product__image-big',
        dots: false,
        arrows: false,
        focusOnSelect: true
      });
});