import { useState } from "react";
import './ImageHoverPopup.css';

const ImageHoverPopup = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => setIsHovering(true);
  const handleMouseOut = () => setIsHovering(false);

  return (
    <div>
      <div
        className="image-container"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <img
                    src="https://source.unsplash.com/50x50/?portrait"
                    alt=""
                    className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300"
                  />
        {isHovering && <div className="popup">Username</div>}
      </div>
    </div>
  );
};

export default ImageHoverPopup;
