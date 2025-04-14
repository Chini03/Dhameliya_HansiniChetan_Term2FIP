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


