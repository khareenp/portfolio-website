import React from 'react';
import './Gallery.css';

const Gallery = () => {
  // Define an array of image objects with id, url, and alt properties
  const images = [
    {
      id: 1,
      url: "images/soccer.jpg",
      alt: "Gallery image 1"
    },
    {
      id: 2,
      url: "images/software.jpg",
      alt: "Gallery image 2"
    },
    {
      id: 3,
      url: "images/travel.jpg",
      alt: "Gallery image 3"
    },
    {
      id: 4,
      url: "images/bim1.jpg",
      alt: "Gallery image 4"
    },
    {
      id: 5,
      url: "images/bim2.jpg",
      alt: "Gallery image 5"
    }
  ];

  return (
    <div className="gallery">
      {/* Gallery header */}
      <h1>Photo Gallery</h1>
      {/* Grid container for images */}
      <div className="gallery-grid">
        {/* Map over the images array and render an img element for each image */}
        {images.map(image => (
          // Each image element should have a unique key based on the id
          <img key={image.id} src={image.url} alt={image.alt} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
