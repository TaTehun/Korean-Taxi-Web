import './ContactForm.css'
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';



const ContactForm = () => {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <section className="section">
      <Container className="contact-container">
      <h1>Appointment</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
        <Form.Group as={Col} controlId="name">
          <Form.Label>이름</Form.Label>
          <Form.Control 
            required
            type="text"
            feedbackType="invalid"
            placeholder="name" />
        </Form.Group>

        <Form.Group as={Col} controlId="phone">
          <Form.Label>전화번호</Form.Label>
          <Form.Control 
            required
            type="number"
            feedbackType="invalid"
            placeholder="469-123-1234" />
        </Form.Group>
      </Row>

      <Form.Group hasValidatio className="mb-3" controlId="email">
          <Form.Label>이메일 </Form.Label>
          <Form.Control 
            required
            type="email"
            feedbackType="invalid"
          placeholder="myemail23@gmail.com" />
        </Form.Group>

        <Row className="mb-3">
        <Form.Group as={Col} controlId="date">
          <Form.Label>날짜</Form.Label>
          <Form.Control 
                      required
                      type="number"
                      feedbackType="invalid"
                      placeholder="08/15" />
        </Form.Group>

      <Form.Group as={Col} controlId="time">
          <Form.Label>시간</Form.Label>
          <Form.Control 
                      required
                      type="text"
                      feedbackType="invalid"
                      placeholder="3시30분" />
        </Form.Group>

      <Form.Group as={Col} controlId="time-kind">
          <Form.Label>시간대</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>선택...</option>
            <option value="am">오전</option>
            <option value="pm">오후</option>
          </Form.Select>
        </Form.Group>
        </Row>

      <Form.Group className="mb-3" controlId="departure">
        <Form.Label>출발지</Form.Label>
        <Form.Control 
                              required
                              type="text"
                              feedbackType="invalid"
        placeholder="1234 Main St, Dallas TX 75000" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="arrival">
        <Form.Label>목적지</Form.Label>
        <Form.Control 
                              required
                              type="text"
                              feedbackType="invalid"
                              placeholder="5678 Norman St, Dallas TX 75023" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="accountability">
          <Form.Label>인원수</Form.Label>
          <Form.Control 
                                required
                                type="text"
                                feedbackType="invalid"
                                placeholder="7명" />
        </Form.Group>

        <Form.Group as={Col} controlId="service-kind">
          <Form.Label>서비스</Form.Label>
          <Form.Select defaultValue="Choose..." >
            <option>선택...</option>
            <option value="taxi">택시</option>
            <option value="car">대리</option>
            <option value="delivery">딜리버리</option>
            <option value="errand">심부름</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="car-kind">
          <Form.Label>차 종류</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>선택...</option>
            <option value="sedan">세단(4인승) - $2.50/mi </option>
            <option value="suv">미니밴(6인승) - $3.00/mi</option>
            <option value="van">서버밴(8인승) - $4.00/mi</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>요청사항</Form.Label>
        <Form.Control as="textarea" rows={3} 
        placeholder="예시)무료 카시트 서비스 1개 부탁드립니다." />
      </Form.Group>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check 
        required
        feedback="체크박스를 눌러주세요"
        feedbackType="invalid"
        type="checkbox" label="정확한 전화번호, 이메일을 입력하셨나요?" />
      </Form.Group>

      <Button variant="primary" type="submit">
        예약하기
      </Button>
        </Form>
      </Container>
      </section>
  )
}

export default ContactForm;