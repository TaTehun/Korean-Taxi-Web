import './MainColumns.css';
import styles from './MainColumns.css';
import {Row, Col, Form, Container, Button, Card } from 'react-bootstrap'
import TaxiIcon from '../../../img/icons/taxiIcon.svg'
import CarIcon from '../../../img/icons/carIcon.svg'
import DeliveryIcon from '../../../img/icons/deliveryIcon.svg'
import ShoppingIcon from '../../../img/icons/shoppingIcon.svg'

const MainColumns = () => {
  return (
    <section className="section">
    <Container className="d-flex justify-content-around">
    <Row>
     <Col className="col-lg-3 col-md-6 col-sm-6">
    <Card>
      <Card.Img className="card-img" variant="top" src={TaxiIcon} />
      <Card.Body>
        <Card.Title>택시</Card.Title>
        <Card.Text>
            <h4 className='list-heading'> 
            - 일상생활 
            <p className="list-sub"> 카지노 병원 학교 직장 공항 출장</p> 
            </h4>
            <h4 className='list-heading'>- 단체손님</h4> 
            <h4 className='list-heading'>- 장거리</h4>
            <h4 className='list-heading'>- 무료 카시트 서비스</h4>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

    <Col className="col-lg-3 col-md-6 col-sm-6">
    <Card>
      <Card.Img className="card-img" variant="top" src={CarIcon} />
      <Card.Body>
        <Card.Title>대리</Card.Title>
        <Card.Text>
            <h4 className='list-heading'>- 음주 시</h4> 
            <h4 className='list-heading'>- 약 복용 시</h4>
            <h4 className='list-heading'>- 피로할때</h4>
            <h4 className='list-heading'>- 운전하기 힘든 상황일때</h4>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

    <Col className="col-lg-3 col-md-6 col-sm-6">
    <Card>
      <Card.Img className="card-img" variant="top" src={DeliveryIcon} />
      <Card.Body>
        <Card.Title>딜리버리</Card.Title>
        <Card.Text>
            <h4 className='list-heading'>- 음식 배달</h4> 
            <h4 className='list-heading'>- 차량 운반</h4>
            <h4 className='list-heading'>- 가구 운반</h4>
            <h4 className='list-heading'>- 운동기구 운반</h4>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

    <Col className="col-lg-3 col-md-6 col-sm-6">
    <Card>
      <Card.Img className="card-img" variant="top" src={ShoppingIcon} />
      <Card.Body>
        <Card.Title>심부름</Card.Title>
        <Card.Text>
            <h4 className='list-heading'>- 스몰 이사</h4> 
            <h4 className='list-heading'>- 생필품</h4>
            <h4 className='list-heading'>- 애완동물</h4>
            <h4 className='list-heading'>- 인력 및 핸디맨</h4>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    <div class="d-flex justify-content-center">
    <Button a href="/contact" variant="primary">예약하기</Button>
    </div>
    </section>
);
}

export default MainColumns