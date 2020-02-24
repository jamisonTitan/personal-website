lastDeg = 0;
$(window).on("scroll", () => {
  $(".cube").css(
    "transform",
    `translateZ(-100px) rotateY(${(window.scrollY - lastDeg) * 90}deg)`
  );
  //.css("top", Math.max((100, window.scrollY)) + "px");
  $(".scene")
    //.css("top", Math.max((100, window.scrollY)) + "px")
    .css("perspective", -window.scrollY + "px");
  //$(".cube__face").css("top", Math.max((100, window.scrollY)) + "px");
  lastDeg = window.scrollY;
});
