
function convertToImage() {
    var textInput = document.getElementById('textInput').value.trim();
    if (textInput === '') {
      alert('Please enter some text.');
      return;
    }
  
    var apiUrl = 'https://api.unsplash.com/photos/random?query=' + encodeURIComponent(textInput) + '&client_id=li9f_rZofT0i6A8PEXikRTRVv815NZxKctxvRpZx2Bs';
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.urls && data.urls.small) {
          var image = new Image();
          image.src = data.urls.small;
  
          var imageContainer = document.getElementById('imageContainer');
          imageContainer.innerHTML = ''; // Clear previous image
          imageContainer.appendChild(image); // Append the new image
        } else {
          alert('Sorry, no image found for the entered text.');
        }
      })
      .catch(error => {
        console.error('Error fetching image:', error);
        alert('An error occurred while fetching the image. Please try again later.');
      });
  }
  