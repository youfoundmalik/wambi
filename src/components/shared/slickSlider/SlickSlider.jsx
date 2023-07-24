import Slider from "react-slick";
import { IconButton, createSvgIcon } from "@mui/material";

const ArrowLeftIcon = createSvgIcon(<path d="m14 7-5 5 5 5V7z" />, "ArrowLeft");
const ArrowRightIcon = createSvgIcon(
  <path d="m10 17 5-5-5-5v10z" />,
  "ArrowRight"
);

const SlickSlider = (props) => {
  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <IconButton
        sx={{ border: "1px solid #172955" }}
        size="small"
        color="primary"
        onClick={onClick}
        className={className}
        aria-label="next"
      >
        <ArrowRightIcon fontSize="large" />
      </IconButton>
    );
  };

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <IconButton
        sx={{ border: "1px solid #172955" }}
        size="small"
        color="primary"
        onClick={onClick}
        className={className}
        aria-label="prev"
      >
        <ArrowLeftIcon fontSize="large" />
      </IconButton>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 15000,
    slidesToShow: props.slidesToShow || 1,
    slidesToScroll: props.slidesToScroll || 1,
    nextArrow: props.showArrows ? <NextArrow /> : <></>,
    prevArrow: props.showArrows ? <PrevArrow /> : <></>,
    adaptiveHeight: true,
  };

  return <Slider {...settings}>{props.children}</Slider>;
};

export default SlickSlider;
