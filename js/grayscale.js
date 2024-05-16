// grayscale.js

// Function to convert an image to grayscale
function convertToGrayscale(image) {
  // Create a canvas element
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');

  // Set the canvas dimensions to match the image
  canvas.width = image.width;
  canvas.height = image.height;

  // Draw the image on the canvas
  context.drawImage(image, 0, 0);

  // Get the image data from the canvas
  var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  var data = imageData.data;

  // Loop through each pixel and convert it to grayscale
  for (var i = 0; i < data.length; i += 4) {
    var red = data[i];
    var green = data[i + 1];
    var blue = data[i + 2];

    // Calculate the grayscale value
    var grayscale = 0.299 * red + 0.587 * green + 0.114 * blue;

    // Set the pixel values to the grayscale value
    data[i] = grayscale;
    data[i + 1] = grayscale;
    data[i + 2] = grayscale;
  }

  // Update the canvas with the grayscale image data
  context.putImageData(imageData, 0, 0);

  // Return the grayscale image
  return canvas.toDataURL();
}

// Export the convertToGrayscale function
export { convertToGrayscale };