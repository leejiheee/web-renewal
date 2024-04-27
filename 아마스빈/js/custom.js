// 인기메뉴 슬라이드
jQuery(function($) {

  window.onresize = function(){
    document.location.reload();
  };

});
if (matchMedia("screen and (min-width: 992px)").matches) {
  console.log("데스크탑");
  var slides = document.querySelector('.items'),
      slide = document.querySelectorAll('.items li'),
      currentIdx = 0,
      slideCount = slide.length,
      slideWidth = 218,
      slideMargin = window.innerWidth * (2.5/100),
      prevBtn = document.querySelector('.prev'),
      nextBtn = document.querySelector('.next');
  
  function moveSlide(num){
    slides.style.left = -num * (slideWidth + slideMargin) + 'px';
    currentIdx = num;
  }
  nextBtn.addEventListener('click', function(){
    if(currentIdx < slideCount - 4){
      moveSlide(currentIdx + 1);
    }else{
      moveSlide(0);
    }
  });
  prevBtn.addEventListener('click', function(){
    if(currentIdx > 0){
      moveSlide(currentIdx - 1);
    }else{
      moveSlide(slideCount - 4);
    }
  })
} else if(matchMedia("screen and (min-width: 576px) and (max-width: 991px)").matches){
  console.log("테블릿");
  var slides = document.querySelector('.items'),
    slide = document.querySelectorAll('.items li'),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 180,
    slideMargin = window.innerWidth * (4/100),
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next');

  function moveSlide(num){
  slides.style.left = -num * (slideWidth + slideMargin) + 'px';
  currentIdx = num;
  }
  nextBtn.addEventListener('click', function(){
    console.log(currentIdx);
    if(currentIdx < slideCount - 3){
      moveSlide(currentIdx + 1);
    }else{
      moveSlide(0);
    }
  });
  prevBtn.addEventListener('click', function(){
    if(currentIdx > 0){
      moveSlide(currentIdx - 1);
    }else{
      moveSlide(slideCount - 3);
    }
  })
}else if(matchMedia("screen and (max-width: 575px)").matches){
  console.log("모바일");
  var slides = document.querySelector('.items'),
    slide = document.querySelectorAll('.items li'),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 122,
    slideMargin = window.innerWidth * (2/100),
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next');

  function moveSlide(num){
    slides.style.left = -num * (slideWidth + slideMargin) + 'px';
    currentIdx = num;
  }
  nextBtn.addEventListener('click', function(){
    if(currentIdx < slideCount - 1){
      moveSlide(currentIdx + 1);
    }else{
      moveSlide(0);
    }
  });
  prevBtn.addEventListener('click', function(){
    if(currentIdx > 0){
      moveSlide(currentIdx - 1);
    }else{
      moveSlide(slideCount - 1);
    }
  })
}