import React from 'react';
interface ImageGalleryProps {
  images: { src: string; alt: string }[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
      {images.map((image, index) => (
        <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <img 
            src={image.src} 
            alt={image.alt} 
            className="w-full h-48 object-cover transition duration-500 group-hover:scale-[1.02]" 
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;