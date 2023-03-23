$(function () {
  $(".m-txt-list a").hide();
  $(".txt-box").click(function (e) {
    console.log(1);
    e.preventDefault();
    $(this).find($(".m-txt-list a")).next().stop().slideToggle("fast");
    $(this).toggleClass("active");
    $(".txt-box").removeClass("active");
  });
});
// 여기서 this를 쓰게 되면 누른 부분만 선택됨. 그리고 next는 그 다음 태그를 가져오고, show함.
// 여기서 show는 보여주기만 하는데 toggle을 쓰면 열림 + 닫힘 동시에 사용 가능.
// fadeToggle을 서서히 열리는 효과
// slideToggle 슬라이드 효과
// slideToggle(100); 이렇게 fast, slow 속도를 주는데 안주면 제이쿼리가 알아서 최적속도에 맞춤.
// stop() 메서드를 쓰면 클릭을 100번해도 멈추면 바로 멈춰짐. 이게 없으면 100번 계속 진행됨.
//  $(".accordion .content").eq(0).show(); << eq라는 메서드는 0부터 인덱스 번호로 시작됨.
