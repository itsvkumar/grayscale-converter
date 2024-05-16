// Import the grayscale conversion function from grayscale.js
import { convertToGrayscale } from './grayscale.js';

// Get the file input element from the HTML
const fileInput = document.getElementById('image-upload');

// Add an event listener to the file input element
fileInput.addEventListener('change', handleFileUpload);

function handleFileUpload(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function(event) {
    const image = new Image();
    image.src = event.target.result;

    image.onload = function() {
      // Display the original image on the page
      displayImage(image.src);
    };
  };

  reader.readAsDataURL(file);
}

const convertButton = document.getElementById('convert-button');

convertButton.addEventListener('click', function() {
  const imageElement = document.getElementById('uploaded-image');
  const image = new Image();
  image.src = imageElement.src;

  image.onload = function() {
    // Convert the image to grayscale and display it
    const grayscaleImage = convertToGrayscale(image);
    displayImage(grayscaleImage);
  };
});

// Function to display the image on the page
function displayImage(image) {
  // Get the image element from the HTML
  const imageElement = document.getElementById('uploaded-image');

  // Set the source of the image element to the grayscale image
  imageElement.src = image;
}