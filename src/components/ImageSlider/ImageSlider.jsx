import { useState, useEffect } from "react";
import "./style.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
// https://console.cloudinary.com/app/product-explorer for images
// https://tinypng.com/ for images compress
function ImageSlider({ images = [] }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // myInterval = setInterval(function, milliseconds);
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
    //clearInterval(myInterval);
  }, [autoPlay, images.length]);

  // open image in a new tab
  // function handleImageClick(url) {
  //   const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  //   if (newWindow) newWindow.opener = null;
  // }

  function showImage(url) {
    setAutoPlay(false);
    setSelectedImage(url);
  }
  function hidImage() {
    setAutoPlay(true);
    setSelectedImage(null);
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
              // onClick={() => handleImageClick(item)}
              onClick={() => showImage(item)}
            />
          ) : null
        )}
      </div>
      {selectedImage && (
        <div
          // className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center"
          className="show-container"
          onClick={hidImage}
        >
          <img
            src={selectedImage}
            alt="Full view"
            className="show-image"
            // className="max-w-full max-h-full rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
}
export default ImageSlider;
