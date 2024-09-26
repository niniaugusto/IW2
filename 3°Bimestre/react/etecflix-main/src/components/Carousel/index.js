import  "./carousel.css";
import Slider from "react-slick";

function Carousel({ children }) {
    
    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
        slidesToScroll: 1,
    }

    return (
        <div>
            <Slider {...settings}>
                { children }
            </Slider>
        </div>
    );
}

export default Carousel;