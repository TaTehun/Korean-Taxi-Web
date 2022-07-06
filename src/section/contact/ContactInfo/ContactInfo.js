import './ContactInfo.css'
import styles from './ContactInfo.css';
import {Row, Col, Container } from 'react-bootstrap'
import phoneIcon from '../../../img/icons/phoneIcon.svg'
import emailIcon from '../../../img/icons/emailIcon.svg'
import kakaoIcon from '../../../img/icons/kakaoIcon.svg'


const ContactInfo = () => {
  return (
    <Container className="contact-container">
    <div className="contact-info">
        <h1>Contact Us</h1>
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
        </div>
    </Container>
    
  )
}

export default ContactInfo;