import React from 'react';

interface AvatarPictureProps {
  src: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg'; // Controls the size class
}

const AvatarPicture = ({ src, alt: altText = "Profile Picture", size = 'md' }: AvatarPictureProps) => {
  let className = 'w-24 h-24 md:w-36 md:h-36 object-cover'; // Default large size
  if (size === 'sm') {
    className = 'w-12 h-12';
  } else if (size === 'md') {
    className = 'w-24 h-24';
  } else if (size === 'lg') {
    className = 'w-64 h-64';
  }

  return (
    <div className="relative flex items-center justify-center">
      <img 
        src={src} 
        alt={altText} 
        className={`rounded-full object-cover border-4 border-gray-100 ${className}`} 
      />
    </div>
  );
};

export default AvatarPicture;