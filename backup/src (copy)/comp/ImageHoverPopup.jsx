import React, {useState} from 'react';
import img1 from '../assets/gamb.png';
import img2 from '../assets/gamb.png';
import img3 from '../assets/gamb.png';

const ImageHoverPopup = () => {
  const [popupImageSrc, setPopupImageSrc] = useState(true);

  const handleImageHover = (src) => {
    setPopupImageSrc(src); // Update popup image source on hover
  };

  const handleImageClick = (src) => {
    // Handle additional actions when an image is clicked (optional)
    console.log('Image clicked:', src);
  };

  return (
    <div className="image-container">
      <div className="image-wrapper">
        <img src={img1} alt="Image 1" onMouseOver={() => handleImageHover(img1)} onClick={() => handleImageClick(img1)} />
        <img src={img2} alt="Image 2" onMouseOver={() => handleImageHover(img2)} onClick={() => handleImageClick(img2)} />
        <img src={img3} alt="Image 3" onMouseOver={() => handleImageHover(img3)} onClick={() => handleImageClick(img3)} />
      </div>

      {popupImageSrc && (
        <div className="popup">
          <span className="close-button" onClick={() => setPopupImageSrc('')}>&times;</span>
          <img src={popupImageSrc} alt="Popup Image" />
        </div>
      )}
    </div>
  )
}

export default ImageHoverPopup;
