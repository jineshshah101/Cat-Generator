// Function to generate the cat for the button

function CreateCat(){
    // Creating an image
    var image = document.createElement('img');
    // Accessing the div element where the images should be
    var div = document.getElementById('cat');
    // Source of the image
    image.src = "https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small";
    // Append that source image to the child and bring it back to the div element
    div.appendChild(image);
}