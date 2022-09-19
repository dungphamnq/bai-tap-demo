// Get Slide and Slide Content
let posterContainer = document.querySelector('.poster-container');
let slideContent = document.querySelectorAll(".slide-content");
let posterSlide = document.querySelector(".poster-slide");

// Register Button
let prevBtn = posterContainer.querySelector('.prevBtn');
let nextBtn = posterContainer.querySelector('.nextBtn');

let size = slideContent[0].clientWidth;
let counter = 0;
// Poster Slide

nextBtn.addEventListener('click', () => {

    if (counter > slideContent.length - 2) {
        counter = -1;
    }
    counter++;
    posterSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {

    if (counter < 1) {
        counter = slideContent.length;
    }
    counter--;
    posterSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
});



// Category Slide

let catContainer = document.querySelectorAll('.cat-container');

function showCategorySlide(n) {
    let counter = 0;
    let catSlide = n.querySelector('.cat-slide');
    let catItem = n.querySelectorAll('.cat-item');


    let catprevBtn = n.querySelector('.catPrevBtn');
    let catnextBtn = n.querySelector('.catNextBtn');


    catnextBtn.addEventListener('click', () => {
        if (counter > (catItem.length/5) - 2) {
            counter = -1;
        }
        counter++;
        catSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
    });


    catprevBtn.addEventListener('click', () => {
        if (counter < 1) {
            counter = (catItem.length/5);
        }  
        counter--;
        catSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
    });
}

for (i = 0; i < catContainer.length; i++) {
    showCategorySlide(catContainer[i]);
}





// Function Return Home Button in footer
function topFunction() {
    document.documentElement.scrollTop = 0;
  }
  