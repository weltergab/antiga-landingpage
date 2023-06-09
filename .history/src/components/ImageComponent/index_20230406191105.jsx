import React, { useState } from 'react';

type Props = {
  imageSrc: string;
};

const ImageComponent: React.FC<Props> = ({ imageSrc }) => {
  const [isImageClicked, setIsImageClicked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleImageClick = () => {
    setIsImageClicked(!isImageClicked);
    setIsExpanded(true);
  };

  const handleExpandedImageClick = () => {
    setIsExpanded(false);
  };

  return (
    <div className="relative max-w-full max-h-full mx-auto">
      <div className="relative max-w-full max-h-full mx-auto">
        <img
          src={imageSrc}
          alt="imagem"
          onClick={handleImageClick}
          className="max-w-80 max-h-80"
        />
      </div>
      {isExpanded && (
        <div
          className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center"
          onClick={handleExpandedImageClick}
        >
          <img
            src={imageSrc}
            alt="imagem ampliada"
            className="max-w-4xl max-h-4xl object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default ImageComponent;
