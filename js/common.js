//마우스 커서 
$(document).on('mousemove', function(e){
  $('.cursor').css({ left: `${e.pageX - 10}px`, top: `${e.pageY - 10}px` })
})

// $("a").removeAttr("href")

$('a').on('mouseenter', function(){
  $('.cursor').css({ opacity: 1,scale: '0.7' })
}).on('mouseleave', function(){
  $('.cursor').css({ opacity: 0.3,  scale: '1' })
})


//gnb
$(".depth2").hide();
$(".depth1 > li").hover(function() {
  $(this).children('.depth2').stop().fadeIn(200)
}, function() {
  $(this).children('.depth2').stop().fadeOut(100)
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
      

// slider
let liLength = $("#slideList li").length;
let num;
let classNum;
let state1 = 1;

let autoSlider = function() {
  classNum = $("#slideList li:first").attr("class").substr(12, 1);
  if (classNum == liLength) classNum = 0;
  $("#btnwrap a").removeClass('on');
  $("#btnwrap a:eq("+ classNum +")").addClass('on');
  $("#slideList li:eq(1)").addClass("active").css({ opacity: 0 }).animate({ opacity: 1 }, 1000, function() {
    $("#slideList").append($("#slideList li:eq(0)"))
    $("#slideList li:last").removeClass('active');
    state1 = 1;
        })
    }

  let timer = setInterval(autoSlider, 3000)

$("#btnwrap a").on('click', function(e) {
  e.preventDefault();
  clearInterval(timer);
  timer = setInterval(nextSlider, 7000)
  if ( state1 == 1 ) {
    state1 = 0;
    let btnIndex = $(this).index()+1;
    num = btnIndex;
    if ( $(".slider"+btnIndex).hasClass('active') ) {
      state1 = 1;
      return;
    }
    $("#btnwrap a").removeClass('on');
    $(this).addClass('on');
    $(".slider"+btnIndex).addClass('active').css({ opacity: 0 })
    .animate({ opacity: 1 }, 750, function() {
        $("#slideList li").not($(this)).removeClass('active');
        for ( let i=1; i<liLength; i++ ) {
            if ( num == liLength ) num = 0;
        num++;
        $("#slideList").append($(".slider"+num));
            }
        state1 = 1;
        })
  }
})

// 각 섹션별 페이드효과 플러그인
AOS.init();



//tase box
$('#taste_vertuo').on('mouseenter', function(){

  $(this).children('h4').stop().animate({ marginTop: 90 }, 600).css({ color: '#422e27' })
}).on('mouseleave', function(){
  $(this).css({ backgroundImage: 'url("")' })
  $(this).children('h4').stop().animate({ marginTop: 0 }, 600).css({ color: '#8c8c8c'})
})

$('#taste_original').on('mouseenter', function(){
  $(this).children('h4').stop().animate({ marginTop: 100 }, 600).css({ color: '#422e27' })
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
  $("article ul:not(:animated)").animate({ scrollLeft: '+=310' }, 800)
})
$(".prev").on('click', function(e) {
  e.preventDefault();
  $("article ul:not(:animated)").animate({ scrollLeft: '-=310' }, 800)
})


//recycle 캡슐
$(window).on('scroll', function() {
  if ( $(window).scrollTop() > 3000 ) {
    $("#svg svg").css({ animation: 'dash 1s linear forwards'})
  }
})

$('.img_capsule').hover(function(e){
  e.preventDefault();
  $('.img_coffee').css({ clip: 'rect( 0, 450px, 450px, 450px)' });
  $('#capsule').stop().fadeIn(1000);
},function(){
  $('.img_coffee').css({ clip: 'rect( 0, 450px, 450px, 225px)' });
  $('#capsule').stop().fadeOut();
})

$('.img_coffee').hover(function(e){
  e.preventDefault();
  $(this).css({ clip: 'rect( 0, 450px, 450px, 0)' });
  $('#coffee').stop().fadeIn(1000);
}, function(){
  $(this).css({ clip: 'rect( 0, 450px, 450px, 225px)' });
  $('#coffee').stop().fadeOut();
})

//recycle 슬라이드
let n = 1;
let dlLength = $("#recycle_slider dl").length;
let classnum;
let state2 = 1;
$("#recycle_slider dl").not($(".active2")).css({ opacity: 0})
let nextSliding = function(){
  n++;
  if( n === 6 ){
    n = 1;
  }
  classnum = $('#recycle_slider dl:first').attr('class').substr(13, 1);
  if (classnum == dlLength) classN = 0;
  $('#btnwrap3 p span').text(`0${n}`);
  $("#recycle_slider dl:eq(0)").animate({ opacity: 0 }, 1000)
  $('#recycle_slider dl:eq(1)').addClass('active2').css({ opacity: 0 }).animate({ opacity: 1 }, 1000, function(){
    $('#recycle_slider').append($('#recycle_slider dl:eq(0)'))
    $('#recycle_slider dl:last').removeClass('active2');
    state2 = 1;
  })
}

let prevSliding = function(){
  n--;
  if( n === 0 ){
    n = 5;
  }
  classnum = $('#recycle_slider dl:last').attr('class').substr(13, 1)-1;
  $('#btnwrap3 p span').text(`0${n}`);
  $("#recycle_slider dl:eq(0)").animate({ opacity: 0 }, 1000)
  $('#recycle_slider dl:last').addClass('active2').css({ opacity: 0 }).animate({ opacity: 1 }, 1000, function(){
    $('#recycle_slider').prepend($('#recycle_slider dl:last'));
    $('#recycle_slider dl:eq(1)').removeClass('active2');
    state2 = 1;
  })
}

$('.recycle_next').on('click', function(){
  if (state2 == 1 ){
    state2 = 0;
    nextSliding();
  }
})

$('.recycle_prev').on('click', function(){
  if( state2 == 1 ){
    state2 = 0;
    prevSliding();
  }
})

let timer2 = setInterval(nextSliding, 4000)
$('#btnwrap3').on('click', function(e){
  e.preventDefault();
  clearInterval(timer2);
  timer2 = setInterval(nextSliding, 4000)
})



//서브 brand


$(window).on('scroll', function() {
  if ( $(window).scrollTop() > 3000 ) {
    $("#coffee_line line").css({ animation: 'coffee 2s linear alternate' })
  }
})
