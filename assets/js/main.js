(function() {
  //   Fonctions

  const ShowSlides = value => {
    let i;
    const images = document.querySelectorAll('.carrousel__image');

    value > images.length ? (slideIndex = 1) : null;
    value < 1 ? (slideIndex = images.length) : null;

    for (i = 0; i < images.length; i++) {
      images[i].classList.remove('carrousel__image--active');
    }

    images[slideIndex - 1].classList.add('carrousel__image--active');
  };

  //   Init slides

  let slideIndex = 1;

  ShowSlides(slideIndex);

  const carrouselArrowLeft = document.querySelector('.carrousel__arrow-left');

  const carrouselArrowRight = document.querySelector('.carrousel__arrow-right');

  carrouselArrowLeft.addEventListener('click', () => {
    ShowSlides((slideIndex += -1));
  });

  carrouselArrowRight.addEventListener('click', () => {
    ShowSlides((slideIndex += 1));
  });
})();
