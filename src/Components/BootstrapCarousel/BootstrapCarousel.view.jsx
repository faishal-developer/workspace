import Carousel from 'react-bootstrap/Carousel';
import flight1 from '../../assets/images/flights/flight3.jpg'
import flight2 from '../../assets/images/flights/flight2.png'
import flight3 from '../../assets/images/flights/flight1.jpg'

function CustomCarousel() {
  return (
    <Carousel data-bs-theme="dark" >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={flight1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={flight2}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={flight3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;