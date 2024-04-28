// 인기메뉴 슬라이드
jQuery(function($) {

  window.onresize = function(){
    document.location.reload();
  };

});
function vwToPx(vwValue) {
  // 뷰포트 너비 계산
  const viewportWidth = window.innerWidth;
  // px로 변환
  const pxValue = (vwValue * viewportWidth) / 100;
  return pxValue;
}
const home4EventHandler = () => {
  const deliveryImg = document.querySelector('.delivery_img');
  const windowHeight = window.innerHeight;

  // 요소가 화면에 들어올 때
  if (deliveryImg.getBoundingClientRect().top < windowHeight - 200) {
      // 200ms 후에 애니메이션 시작
      setTimeout(() => {
          deliveryImg.style.display = 'block'; // 요소 표시
          deliveryImg.style.animation = 'delivery 1.5s'; // 애니메이션 적용
      }, 200);
      window.removeEventListener('scroll', home4EventHandler); // 스크롤 이벤트 리스너 제거
  }
};

// 스크롤 이벤트 리스너 등록
window.addEventListener('scroll', home4EventHandler);

// 스크롤 이벤트 리스너 등록
window.addEventListener('scroll', home4EventHandler);
if (matchMedia("screen and (min-width: 992px)").matches) {
  console.log("데스크탑");
  var slides = document.querySelector('.items'),
      slide = document.querySelectorAll('.items li'),
      currentIdx = 0,
      slideCount = slide.length,
      slideWidth = 218,
      slideMargin = vwToPx(2.5),
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