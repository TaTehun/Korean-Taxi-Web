import './Slides.css'
import Carousel from 'react-bootstrap/Carousel';
import FirstSlide from '../../../img/graphics/taximain1.jpg'
import SecondSlide from '../../../img/graphics/taximain2.jpg'
import ThirdSlide from '../../../img/graphics/taximain3.jpg'

const Slides = () => {
  return (
<Carousel fade>
      <Carousel.Item>
        <img
          className="slide-img"
          src={FirstSlide}
          alt="First slide"
        />
        <Carousel.Caption className="slide-cap">
          <h3>24시간 서비스</h3>
          <p>정직과 신뢰를 바탕으로 고객님께 24시간 서비스를 제공해드립니다.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slide-img"
          src={SecondSlide}
          alt="Second slide"
        />
        <Carousel.Caption className="slide-cap">
          <h3>고객만족우선 서비스</h3>
          <p>신속하고 친절한 응대로 고객님께서 만족하실 서비스를 제공해드립니다.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slide-img"
          src={ThirdSlide}
          alt="Third slide"
        />
        <Carousel.Caption className="slide-cap">
          <h3>카카오톡 서비스</h3>
          <p>달라스 맛집, 핫플레이스 추천부터 택시 예약까지 간편하게! </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slides;