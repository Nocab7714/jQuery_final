$(document).ready(function(){
    // .menu 下拉式選單
    $('.menu > li > a').click(function(e){
        e.preventDefault();
       $(this).parent().find('.dropToggle').slideToggle();
       $(this).parent().siblings().find('.dropToggle').slideUp();
    });


    // banner 輪播 
    const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // 自動播放
    autoplay: {
      delay: 2500,
    },

    // 輪播特效
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });


  //lightbox2
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  });


  //goTop
  $('.goTop').click(function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop: 0},1000);
  });

})

