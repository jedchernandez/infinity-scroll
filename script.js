// Unsplash API
const count = 10;
const apiKey = "p9sH0VsUbKUv-d_ODwOdivMsc-McbCf_f3HHOYkFKaw";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get Photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // Catch error here
  }
}

// On Load
getPhotos();
