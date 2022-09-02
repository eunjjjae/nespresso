// 마우스커서

$(document).on('mousemove', function(e){
    $('.cursor').css({ left: `${e.pageX - 10}px`, top: `${e.pageY - 10}px` })
  })


  $('a').on('mouseenter', function(){
    $('.cursor').css({ opacity: 1,scale: '0.7' })
  }).on('mouseleave', function(){
    $('.cursor').css({ opacity: 0.3,  scale: '1' })
  })



  //gnb
$(".depth2").hide();
$(".depth1 .on .depth2").show();
$(".depth1 > li:not(.on)").hover(function() {
  $(".depth1 .on .depth2").hide();
  $(this).children('.depth2').stop().fadeIn(200)
}, function() {
  $(this).children('.depth2').stop().fadeOut(100)
  $(".depth1 .on .depth2").show();

})


//반응형 메뉴
let state = 0;
      $("#gnbView").on('click', function() {
        if ( state == 0 ){
          $("#gnb").animate({ right: 0 }, function() {
            state = 1;
          })
        }
        else {
          $("#gnb").animate({ right: -200 }, function() {
            state = 0;
          })
        }
      })
      


// 각 섹션별 페이드효과 플러그인
AOS.init();


//서브 brand
$(window).on('scroll', function() {
    if ( $(window).scrollTop() > 3000 ) {
      $("#coffee_line line").css({ animation: 'coffee 2s linear alternate' })
    }
  })
  