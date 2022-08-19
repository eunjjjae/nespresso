//gnb

$(".depth2").hide();
$(".depth1 > li").hover(function() {
  $(this).children('.depth2').stop().fadeIn(200)
}, function() {
  $(this).children('.depth2').stop().fadeOut(100)
})

// slider

let liLength = $("#slideList li").length;
let num;
let classNum;
let state = 1;

let autoSlider = function() {
  classNum = $("#slideList li:first").attr("class").substr(12, 1);
  if (classNum == liLength) classNum = 0;
  $("#btnwrap a").removeClass('on');
  $("#btnwrap a:eq("+ classNum +")").addClass('on');
  $("#slideList li:eq(1)").addClass("active").css({ opacity: 0 }).animate({ opacity: 1 }, 1000, function() {
    $("#slideList").append($("#slideList li:eq(0)"))
    $("#slideList li:last").removeClass('active');
    state = 1;
        })
    }

  let timer = setInterval(autoSlider, 3000)

$("#btnwrap a").on('click', function(e) {
  e.preventDefault();
  clearInterval(timer);
  timer = setInterval(nextSlider, 7000)
  if ( state == 1 ) {
    state = 0;
    let btnIndex = $(this).index()+1;
    num = btnIndex;
    if ( $(".slider"+btnIndex).hasClass('active') ) {
      state = 1;
      return;
    }
    $("#btnwrap a").removeClass('on');
    $(this).addClass('on');
    $(".slider"+btnIndex).addClass('active').css({ opacity: 0 })
    .animate({ opacity: 1 }, 750, function() {
        $("#slideList li").not($(this)).removeClass('active');for ( let i=1; i<liLength; i++ ) {
            if ( num == liLength ) num = 0;
        num++;
        $("#slideList").append($(".slider"+num));
            }
        state = 1;
        })
  }
})


// $(window).on('scroll', function() {
//   let winPos = $(window).scrollTop();
//   $('section').each(function() {
//     if (winPos >= $(this).position().top-300) {
//       $(this).children('h3').stop().animate({ opacity: 1 })
//     }
//     else if (winPos <= $(this).position().top-$(window).height() ) {
//       $(this).children('h3').css({ opacity: 0 })
//     }
//   })

// })




//taste

// $(window).on('scroll',function(){
//   let winPos = $(window).scrollTop();
//   $('#taste').
// })


$('#taste_vertuo').on('mouseenter', function(){
  $(this).css({ backgroundImage : 'url(img/vertuo_hover.png)', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 30%' }, 500)
  $(this).children('h4').stop().animate({ marginTop: 100 }, 600).css({ color: '#422e27' })
}).on('mouseleave', function(){
  $(this).css({ backgroundImage: 'url("")' })
  $(this).children('h4').stop().animate({ marginTop: 0 }, 600).css({ color: '#8c8c8c'})
})

$('#taste_original').on('mouseenter', function(){
  $(this).css({ backgroundImage : 'url(img/original_hover.png)', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 15%' })
  $(this).children('h4').stop().animate({ marginTop: 90 }, 600).css({ color: '#422e27' })
}).on('mouseleave', function(){
  $(this).css({ backgroundImage: 'url("")' })
  $(this).children('h4').stop().animate({ marginTop: 0 }, 600).css({ color: '#8c8c8c'})
})




//product슬라이드

$('#product article ul').not($('#product article:first ul')).hide();

$('#product article h3').on('click', function(e){
    e.preventDefault();
    $('section article h3').children('a').removeClass('click')
    $(this).children('a').addClass('click');
    $('section article ul').hide();
    $(this).next('ul').show();
})


$('.next').on('click', function(e) {
  e.preventDefault();
  $("article ul:not(:animated)").animate({ scrollLeft: '+=330' }, 800)
})
$(".prev").on('click', function(e) {
  e.preventDefault();
  $("article ul:not(:animated)").animate({ scrollLeft: '-=330' }, 800)
})

//recycle 슬라이드

let n = 0;


$('.recycle_next').on('click', function(e){
  e.preventDefault();
  n++;
  if( n === 5 ){
    n = 0;
    $('#recycle_slider:not(:animated)').animate({ marginLeft: 0 }, 800);
  }
  else {
    $('#recycle_slider:not(:animated)').animate({ marginLeft: '-=1050' }, 800);
  }
  $('#btnwrap3 p span').text(`0${n+1}`);
})

$('.recycle_prev').on('click', function(e){
  if( n === 1 ){
    n = 5;
    $('#recycle_slider:not(:animated)').animate({ marginLeft: '+=1050' }, 800)
  }
  e.preventDefault();
  $('#btnwrap3 p span').text(`0${n-1}`);

})





