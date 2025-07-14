import ImageSlider from "../components/ImageSlider/ImageSlider";

// https://console.cloudinary.com/app/product-explorer for images
// https://tinypng.com/ for images compress
function Installation() {
  const images = [
    "https://res.cloudinary.com/dchrtkvvw/image/upload/v1752422464/install13_jc0tpc.jpg",
    "https://res.cloudinary.com/dchrtkvvw/image/upload/v1752372635/install1_cyezrl.jpg",
    "https://res.cloudinary.com/dchrtkvvw/image/upload/v1752372643/install2_bhtyju.jpg",
    "https://res.cloudinary.com/dchrtkvvw/image/upload/v1752372643/install3_japopo.jpg",
    "https://res.cloudinary.com/dchrtkvvw/image/upload/v1752372643/install4_igcoqc.jpg",
    "https://res.cloudinary.com/dchrtkvvw/image/upload/v1752372644/install5_axfeut.jpg",
    "https://res.cloudinary.com/dchrtkvvw/image/upload/v1752372651/install6_whnt0f.jpg",
    "https://res.cloudinary.com/dchrtkvvw/image/upload/v1752372653/install7_xckdy7.jpg",
    "https://res.cloudinary.com/dchrtkvvw/image/upload/v1752372655/install8_dbllnx.jpg",
    "https://res.cloudinary.com/dchrtkvvw/image/upload/v1752372652/install9_h1bb3i.jpg",
    "https://res.cloudinary.com/dchrtkvvw/image/upload/v1752372655/install10_oj0q6m.jpg",
    "https://res.cloudinary.com/dchrtkvvw/image/upload/v1752372651/install11_fbwqnw.jpg",
    "https://res.cloudinary.com/dchrtkvvw/image/upload/v1752419856/install12_lxc3lu.jpg",
  ];

  return <ImageSlider images={images} />;
}
export default Installation;
