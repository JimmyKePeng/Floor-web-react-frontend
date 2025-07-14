import ImageSlider from "../components/ImageSlider/ImageSlider";
// https://console.cloudinary.com/app/product-explorer for images
// https://tinypng.com/ for images compress
function Refinishing() {
  const images = [
    "https://res.cloudinary.com/dchrtkvvw/image/upload/v1752419901/8_mqcv7u.jpg",
    "https://res.cloudinary.com/dchrtkvvw/image/upload/v1752422464/11_elq9c8.jpg",
    "https://res.cloudinary.com/dchrtkvvw/image/upload/v1752372617/1_qchj6s.png",
    "https://res.cloudinary.com/dchrtkvvw/image/upload/v1752372619/5_hj8l2m.png",
    "https://res.cloudinary.com/dchrtkvvw/image/upload/v1752372621/2_fnmu1i.png",
    "https://res.cloudinary.com/dchrtkvvw/image/upload/v1752372614/6_iwdin0.png",
    "https://res.cloudinary.com/dchrtkvvw/image/upload/v1752372620/3_cjqiy3.png",
    "https://res.cloudinary.com/dchrtkvvw/image/upload/v1752372620/4_klgbak.png",
    "https://res.cloudinary.com/dchrtkvvw/image/upload/v1752419899/7_owcco4.jpg",
  ];

  return <ImageSlider images={images} />;
}
export default Refinishing;
