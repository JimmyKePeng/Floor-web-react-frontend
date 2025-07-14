import { useState, useEffect } from "react";
import ReviewBox from "./ReviewBox";
import "./style.css";

function Reviews() {
  const reviews = [
    "https://res.cloudinary.com/dchrtkvvw/image/upload/v1752449492/Screenshot_2025-07-13_161032_x3durw.png",
    "https://res.cloudinary.com/dchrtkvvw/image/upload/v1752449491/Screenshot_2025-07-13_161041_bbwn6t.png",
    "https://res.cloudinary.com/dchrtkvvw/image/upload/v1752449491/Screenshot_2025-07-13_161057_kwufxj.png",
    "https://res.cloudinary.com/dchrtkvvw/image/upload/v1752449491/Screenshot_2025-07-13_161109_axfwpr.png",
    "https://res.cloudinary.com/dchrtkvvw/image/upload/v1752449490/Screenshot_2025-07-13_163010_rixitl.png",
    "https://res.cloudinary.com/dchrtkvvw/image/upload/v1752449490/Screenshot_2025-07-13_161025_arikfp.png",
  ];
  const [currentReview, setCurrentReview] = useState(0);
  const [prevReview, setPrevtReview] = useState(reviews.length - 1);
  const [nextReview, setNextReview] = useState(1);
  const [stop, setStop] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  function goNext() {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
    setPrevtReview((prev) => (prev + 1) % reviews.length);
    setNextReview((prev) => (prev + 1) % reviews.length);
  }

  useEffect(() => {
    if (stop) return;

    const interval = setInterval(() => {
      goNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [stop, reviews.length]);

  function showImage(url) {
    setStop(true);
    setSelectedImage(url);
  }
  function hidImage() {
    setStop(false);
    setSelectedImage(null);
  }
  return (
    // <ReviewSlider reviews={reviews} />
    <div className="review-container">
      <div className="image-wrapper image left">
        {reviews.map((review, index) =>
          index === prevReview ? <ReviewBox review={review} /> : null
        )}
      </div>
      <div
        className="image-wrapper image-center"
        onMouseOver={() => setStop(true)}
        onMouseLeave={() => setStop(false)}
      >
        {reviews.map((review, index) =>
          index === currentReview ? (
            <ReviewBox
              review={review}
              onClick={() => {
                showImage(review);
              }}
            />
          ) : null
        )}
      </div>
      <div className="image-wrapper image right">
        {reviews.map((review, index) =>
          index === nextReview ? <ReviewBox review={review} /> : null
        )}
      </div>

      {selectedImage && (
        <div className="show-container" onClick={hidImage}>
          <img src={selectedImage} alt="Full view" className="show-image" />
        </div>
      )}
    </div>
  );
}
export default Reviews;
