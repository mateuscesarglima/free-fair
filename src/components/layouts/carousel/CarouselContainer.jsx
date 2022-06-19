import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./CarouselContainer.css";
import feira1 from "../../../img/carouselImg/feira1.png";
import feira2 from "../../../img/carouselImg/feira2.png";
import feira3 from "../../../img/carouselImg/feira3.png";

const CarouselContainer = () => {

  const settings = {
    showArrows: true,
    autoPlay: true,
    interval: 4000,
    showThumbs: false,
    dynamicHeight: true,
    swipeable: true,
    emulateTouch: true,
    infiniteLoop: true,
    showStatus: false,
    transitionTime: 900
  }

  return (
    <div className="section-carousel-box" style={{backgroundColor: "black"}}>
      <Carousel {...settings}>
        <div>
          <img src={feira1} alt="" />
        </div>
        <div>
          <img src={feira2} alt="" />
        </div>
        <div>
          <img src={feira3} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
