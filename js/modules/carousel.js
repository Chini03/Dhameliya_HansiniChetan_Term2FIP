export function carousel() {

    console.log("DOM fully loaded and parsed");
    // Light Box Functionality on Add to Cart Buttons on index page and shop page


        // Carousel Functionality

    const carousel = document.querySelector("#heroCar");
    const arrowLeft = document.querySelector("#arrowLeft");
    const arrowRight = document.querySelector("#arrowRight");

    // Check if the elements exist before proceeding
    if (carousel && arrowLeft && arrowRight) {
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
    
    } 
    else {
        console.warn("Carousel elements not found in DOM.");
    }

}