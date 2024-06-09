const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    //'bullets' | 'fraction' | 'progressbar' | 'custom'
  },


  centeredSlides: true, 

  //자동 슬라이드
  autoplay: {
    delay: 5000, //딜레이 
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

$('.search_menu span').click(function(){
  $(this).addClass('active')
  $(this).siblings().removeClass('active')

  var tab = $(this).attr('data-alt')
  $('#' + tab).addClass('active')
  $('#' + tab).siblings().removeClass('active')
})

// 1. 탭 버튼과 탭 내용 부분들을 querySelectorAll을 사용해 변수에 담는다.
const tabBook = document.querySelectorAll(".today_book");
const tabContent = document.querySelectorAll(".main_wrap");

// 2. 탭 버튼들을 forEach 문을 통해 한번씩 순회한다.
// 이때 index도 같이 가져온다.
tabBook.forEach((item, index) => {
  // 3. 탭 버튼에 클릭 이벤트를 준다.
  item.addEventListener("click", (e) => {
    // 4. 버튼을 a 태그에 만들었기 때문에, 
    // 태그의 기본 동작(링크 연결) 방지를 위해 preventDefault를 추가한다.
    e.preventDefault(); // a 
    
    // 5. 탭 내용 부분들을 forEach 문을 통해 한번씩 순회한다.
    tabContent.forEach((content) => {
      // 6. 탭 내용 부분들 전부 active 클래스를 제거한다.
      content.classList.remove("active");
    });

    // 7. 탭 버튼들을 forEach 문을 통해 한번씩 순회한다.
    tabBook.forEach((content) => {
      // 8. 탭 버튼들 전부 active 클래스를 제거한다.
      content.classList.remove("active");
    });

    // 9. 탭 버튼과 탭 내용 영역의 index에 해당하는 부분에 active 클래스를 추가한다.
    // ex) 만약 첫번째 탭(index 0)을 클릭했다면, 같은 인덱스에 있는 첫번째 탭 내용 영역에
    // active 클래스가 추가된다.
    tabBook[index].classList.add("active");
    tabContent[index].classList.add("active");
  });
});

const tabMain = document.querySelectorAll(".main_select span");
const mainContent = document.querySelectorAll(".main_books");

tabMain.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    mainContent.forEach((content) => {
      content.classList.remove("active");
    });

    tabMain.forEach((main) => {
      main.classList.remove("active");
    })

    tabMain[index].classList.add("active");
    mainContent[index].classList.add("active");
  })
});

const tabNowadays = document.querySelectorAll(".nowadays_list");
const nowadaysContent = document.querySelectorAll(".nowadays_left");
const line = document.querySelectorAll('hr');

tabNowadays.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    nowadaysContent.forEach((content) => {
      content.classList.remove("active");
    });

    tabNowadays.forEach((main) => {
      main.classList.add("active");
    })

    line.forEach((a) => {
      a.classList.add("active");
    })

    tabNowadays[index].classList.remove("active");
    nowadaysContent[index].classList.add("active");
    line[index].classList.remove("active");
  })
});