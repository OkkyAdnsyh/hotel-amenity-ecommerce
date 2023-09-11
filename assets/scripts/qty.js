// adding quantity
let defaultCount = 1;
const qty = document.querySelector('#qty');

document.querySelector('.plus').addEventListener('click', () => {
    defaultCount++;
    qty.setAttribute('value', defaultCount);
})
document.querySelector('.min').addEventListener('click', () => {
    defaultCount--;
    if(defaultCount <= 0){
        defaultCount = 1
    }
    qty.setAttribute('value', defaultCount);
})

// slider item-details
const btnNext = document.querySelector('.next')
const btnPrev = document.querySelector('.prev')
const cardSlider = new Swiper('.swiper', {
    slidesPerView : 1,
    spaceBetween : 10,
    breakpoints: {
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1024 : {
            slidesPerView: 4,
            spaceBetween: 32
        }
    },
    navigation: {
        nextEl: btnNext,
        prevEl: btnPrev,
      },
})