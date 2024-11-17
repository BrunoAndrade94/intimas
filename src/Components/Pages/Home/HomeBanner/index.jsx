import Slider from "react-slick";

const HomeBanner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="home-banner">
      <Slider {...settings}>
        <div className="item">
          <div className="col-md-3"></div>
          <div className="col-md-7"></div>
        </div>
      </Slider>
    </div>
  );
};

export default HomeBanner;
