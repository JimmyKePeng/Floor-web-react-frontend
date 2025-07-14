import { useState, useEffect } from "react";
import "./style.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
// https://console.cloudinary.com/app/product-explorer for images
// https://tinypng.com/ for images compress
function ImageSlider({ images = [] }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    // myInterval = setInterval(function, milliseconds);
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
    //clearInterval(myInterval);
  }, [autoPlay, images.length]);

  function handleImageClick(url) {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  }
  return (
    <div className="image-container">
      <div className="image-div">
        <div className="btn-div">
          {images.map((item, index) => (
            <button
              onClick={() => {
                setCurrentImage(index);
                setAutoPlay(false);
              }}
              className={index === currentImage ? "btn active" : "btn"}
              key={index}
            ></button>
          ))}
        </div>
        <FaArrowAltCircleLeft
          className="left-arrow"
          onClick={() => {
            setCurrentImage((prev) =>
              prev - 1 < 0 ? images.length - 1 : prev - 1
            );
            setAutoPlay(false);
          }}
        />
        <FaArrowAltCircleRight
          className="right-arrow"
          onClick={() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
            setAutoPlay(true);
          }}
        />
        {images.map((item, index) =>
          index === currentImage ? (
            <img
              className="image"
              src={item}
              key={index}
              onClick={() => handleImageClick(item)}
            />
          ) : null
        )}
      </div>
    </div>
  );
}
export default ImageSlider;
