document.addEventListener("DOMContentLoaded", function() {
    // Light Box Functionality on Add to Cart Buttons on index page and shop page

// Define an object where each key-value pair links a button ID to its corresponding lightbox ID
const lightBoxController = {
    btn1: 'lightBox1',
    btn2: 'lightBox2',
    btn3: 'lightBox3',
    btn4: 'lightBox4'
};


// Loop through each key-value pair in the object using Object.entries()
// Object.entries(lightBoxController) returns an array of arrays: [[key1, value1], [key2, value2], ...]
for (const [btnId, boxId] of Object.entries(lightBoxController)) {
    // Select the button and lightbox elements
    const button = document.querySelector(`#${btnId}`);
    const lightBox = document.querySelector(`#${boxId}`);

    

    // Select the close button inside the lightbox
    const closeBtn = document.querySelectorAll(".closeBtn");

    // Function to display the lightbox
    function displayLightBox() {
        lightBox.style.display = "block";
    };

    // Function to hide the lightbox
    function hideLightBox() {
        lightBox.style.display = "none";
    };

    button.addEventListener("click", displayLightBox);

    closeBtn.forEach(btn => {
        btn.addEventListener("click", hideLightBox);
    });

};


    // Carousel Functionality

    // carousel not working, idk why i tired everything, but the variables are not being read

const carousel = document.querySelector("#heroCar");
const arrowLeft = document.querySelector("#arrowLeft");
const arrowRight = document.querySelector("#arrowRight");

// Function to get the width of the first child element of the carousel to make it responsive
function getItemWidth () {
    return carousel.firstElementChild.offsetWidth;
};

// function to slide the carousel to the left
function slideLeft() {
    // put the item width in a variable to use it in the transform property
    const itemWidth = getItemWidth();
    carousel.style.transform = `translateX(-${itemWidth}px)`;

    // Event listener to detect when the transition ends
    carousel.addEventListener('transitionend', onTransitionEndLeft);
};

function onTransitionEndLeft() {
    // remove the event listener to avoid multiple triggers
    carousel.removeEventListener('transitionend', onTransitionEndLeft);
    // move the first item to the end of the carousel
    carousel.appendChild(carousel.firstElementChild);
    // remove animation to reset position instantly
    carousel.style.transition = 'none';
    carousel.style.transform = 'translateX(0)';
    // trigger reflow to apply the changes
    carousel.offsetHeight;
    // add the animation back
    carousel.style.transition = 'transform 0.5s ease-in-out';
};

function slideRight() {
    const itemWidth = getItemWidth();
    
    // move the last item to the front of the carousel
    carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild);

    carousel.style.transition = 'none';
    carousel.style.transform = `translateX(-${itemWidth}px)`;
    carousel.offsetHeight;
    carousel.style.transform = 'translateX(0)';
    carousel.style.transition = 'transform 0.5s ease-in-out';
};

arrowLeft.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    slideRight();
  });
  
  arrowRight.addEventListener('click', function(e) {
    e.preventDefault();
    slideLeft();
  });


});
