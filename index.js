let slideIndex = 1;
$(document).ready(() => {
  const showDivs = n => {
    let i;
    let slides = $(".slide").toArray();
    let descriptions = $(".project-desc").toArray();
    let websiteLinks = ["https://jamisontitan.github.io/arpeggio.io/", "https://jamisontitan.github.io/mtgDeckHelp/"];
    let githubLinks = ["https://github.com/jamisonTitan/arpeggio.io", "https://github.com/jamisonTitan/mtgDeckHelp"];
    console.log(slides);
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      descriptions[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    descriptions[slideIndex - 1].style.display = "block";
    $('.github-link').attr("href", githubLinks[slideIndex - 1]);
    $('.website-link').attr("href", websiteLinks[slideIndex - 1]);
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

  const resizeBlurbs = () => {
    let maxWidth = window.innerWidth - 500;
    $(".blurb").css("max-width", maxWidth + "px");
  }

  showDivs(slideIndex);
  $(window).resize(() => {
    resizeBlurbs();
  });
  resizeBlurbs();
  $('.about-btn').on('click', () => {
    window.location.hash = 'about-anchor';
  })
  $('.contact-btn').on('click', () => {
    window.location.hash = 'contact-anchor';
  })
  $('.projects-btn').on('click', () => {
    window.location.hash = 'projects-anchor';
  })
});
