import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://m.media-amazon.com/images/I/81Gc-wNCQpL._SX3000_.jpg" },
  { url: "https://m.media-amazon.com/images/I/81HNYezhr+L._SX3000_.jpg" },
  { url: "https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg" },
  { url: "https://m.media-amazon.com/images/I/71KFjDepTaL._SX3000_.jpg" },
  { url: "https://m.media-amazon.com/images/I/61aUfpZteZL._SX3000_.jpg" },
  { url: "https://m.media-amazon.com/images/I/61NrznnMjTL._SX3000_.jpg" },
  { url: "https://m.media-amazon.com/images/I/618B1HnAxLL._SX3000_.jpg" },
];

 const Slider = () => {
  return (
    <div>
      <SimpleImageSlider
        width="100%"
      
        height={600}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
    </div>
  );
}

export default Slider