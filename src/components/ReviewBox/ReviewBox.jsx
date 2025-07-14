import "./style.css";
function ReviewBox({ review, onClick }) {
  return (
    // <div className="review-box-container">
    <img src={review} className="img-box" onClick={onClick} />
    // </div>
  );
}
export default ReviewBox;
