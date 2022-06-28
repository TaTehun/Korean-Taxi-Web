import './ContactInfo.css'
import styles from './ContactInfo.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import phoneIcon from '../../../img/icons/phoneIcon.svg'
import emailIcon from '../../../img/icons/emailIcon.svg'
import kakaoIcon from '../../../img/icons/kakaoIcon.svg'


const ContactInfo = () => {
  return (
    <div className="contact-info">
        <h1>Contact Us</h1>
    <Container>
        <Row className='info-container'>
        <Col className="col-lg-4 col-md-4 col-sm-12 col-12">

            <h3> <img className='contact-info-icon' src={phoneIcon} /> Phone </h3>
            <p> 111.111.1111 </p>
            </Col>

            <Col className="col-lg-4 col-md-4 col-sm-12 col-12">
            
            <h3> <img className='contact-info-icon' src={emailIcon} /> Email </h3>
            <p> djcbddd212@gmail.com </p>
            </Col>

            <Col className="col-lg-4 col-md-4 col-sm-12 col-12">
            
            <h3> <img className='contact-info-icon' src={kakaoIcon} /> Kakao ID </h3>
            <p> djcbddd212@gmail.com </p>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default ContactInfo;