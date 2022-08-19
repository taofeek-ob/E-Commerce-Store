import { Carousel } from "react-responsive-carousel";
import { urlFor } from "../lib/client";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Slider = ({ herobanner }) => {
  return (
    <Carousel
      autoPlay
      showThumbs={false}
      dynamicHeight={true}
      showStatus={false}
      infiniteLoop={true}
    >
      {herobanner?.map((banner) => {
        return (
          <div className="hero-banner-container">
            <div>
              <p className="beats-solo"> {banner?.smallText}</p>

              <h3>{banner?.midText}</h3>
              <h1>{banner?.largeText1}</h1>
              <img
                src={urlFor(banner.image)}
                alt="beats solo"
                className="hero-banner-image"
              />
              <div>
                <Link href={`/product/${banner?.product}`}>
                  <button type="button">{banner?.buttonText}</button>
                </Link>

                <div className="desc">
                  <h5>Description</h5>
                  <p>{banner?.desc}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Slider;
