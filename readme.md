# Final Integrated Project
**Demonstration of knowledge on HTML, CSS and JS to make a cohesive website with interactive elements.**

## Installation
No istallation needed. Just download the zip file, unzip it, and open the index file in a browser of your choice.

## Usage
Open the index file in your browser of choice.

## Contribuing
- Fork it!
- Create your feature branch: git checkout -b my-new-feature
- Commit your changes: git commit -am 'Add some feature'
- Push to the branch: git push origin my-new-feature
- Submit a pull request :D

## History
April 14th 2025

## Credits
Hansini Chetan Dhameliya - Harlowe D

## License
MIT

## LightBox Functionality Plan
- ***Start Point*** : Each product on the shop and index pages has an "Add to Cart" button. The site should provide visual feedback confirming that the product was added, without navigating away or refreshing the page.
- ***Problem*** : Initially, clicking the buttons does not provide any user confirmation. Users may be unsure if the product was added. Multiple lightboxes are needed, and managing them individually creates repetitive code.
- ***Solution*** : Create a JavaScript object (lightBoxController) to link each button ID to its matching lightbox ID.
Use a loop to attach event listeners dynamically to each button.
Add functionality to show the lightbox on click and close it via a closeBtn.
Ensure all lightboxes share the same close button logic using querySelectorAll() and forEach().
- ***End Point*** : When a user clicks "Add to Cart," the correct lightbox appears. The user can dismiss the lightbox with a close button. This solution improves user experience and minimizes repetitive code.

## Carousel Functionality Plan
- ***Start Point*** : The homepage has a horizontal image carousel intended to showcase featured content. It includes left and right arrows for navigation.
- ***Problem*** : Initially, the carousel elements were not functioning due to JavaScript being executed on pages that lacked the carousel.
- ***Solution*** : Wrap all carousel functionality in a conditional block that checks if carousel, arrowLeft, and arrowRight exist.
Use getItemWidth() to calculate the slide distance based on the first child element’s width.
For left slides, use CSS transform to animate, then rearrange DOM elements after transition.
For right slides, rearrange elements before animating to give a looping effect.
Ensure transitions are smooth by toggling transition and forcing reflow with offsetHeight.
- ***End Point*** : The carousel successfully scrolls left and right with smooth animation. It loops through items endlessly, even when reaching the start or end, improving homepage interactivity and engagement.


