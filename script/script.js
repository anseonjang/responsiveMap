// defer 키워드 : 모든 파일을 다 받을 때까지 HTML이 브라우저 상에 표시가 안되니, 이를 방지하기 위해 사용
var toggleBtn = document.querySelector(".navbar-toggleBtn");
var menu = document.querySelector(".navbar-menu");
var icons = document.querySelector(".navbar-icons");

toggleBtn.addEventListener('click',()=>
{
    menu.classList.toggle("active");
    icons.classList.toggle("active");
});

// .toggle() : 선택한 요소가 보이면 숨기고, 숨겨져있으면 나타냄