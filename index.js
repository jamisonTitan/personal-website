let slideIndex = 1;
$(document).ready(() => {
  const showDivs = n => {
    let i;
    let slides = $(".slide").toArray();
    let slideDescriptions = $(".project-desc").toArray();
    console.log(slides);
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      slideDescriptions[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    slideDescriptions[slideIndex - 1].style.display = "block";
  };

  const changeSlide = n => {
    console.log(n);
    $(".slide").css("animation", "fade 1s ease-in-out");
    $(".project-desc-text").css("animation", "fade 1s ease-in-out");
    $(".project-link-text").css("animation", "fade 1s ease-in-out");
    showDivs((slideIndex += n));
  };

  $(".next-slide").on("click", () => {
    changeSlide(1);
  });
  $(".last-slide").on("click", () => {
    changeSlide(-1);
  });

  showDivs(slideIndex);
  $(window).resize(() => {
    let maxWidth = window.innerWidth - 500;
    console.log(maxWidth);
    $(".blurb").css("max-width", maxWidth + "px");
    $(".projects-container").css("width", html.innerWidth);
    $(".contact-container").css("width", html.innerWidth);
  });
});
