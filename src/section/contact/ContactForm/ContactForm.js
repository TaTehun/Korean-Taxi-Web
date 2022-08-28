import './ContactForm.css'
import React, { useState } from 'react';
import {Row, Alert, Col, Form, Container, Button } from 'react-bootstrap'

const ContactForm = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [message,setMessage] = useState("");
    const [date,setDate] = useState('');
    const [time,setTime] = useState('');
    const [departure,setDeparture] = useState("");
    const [stop,setStop] = useState("");
    const [arrival,setArrival] = useState("");
    const [account,setAccount] = useState("");
    const [car,setCar] = useState("");
    const [service,setService] = useState("");

      const handleSubmit = () => {
        fetch("http://familytaxidallas.com/contact",{
          method:"post",
          headers:{
          "Content-Type":"application/json"
          },
          body:JSON.stringify({
          name,
          email,
          message,
          time,
          phone,
          date,
          departure,
          stop,
          arrival,
          account,
          service,
          car,
          })
          }).then(res=>res.json())
          .then(data=>{
          alert(data.message)
          setMessage(''); setName(''); setEmail(''); setTime('');
          setPhone(''); setDate(''); setDeparture(''); setStop(''); setArrival('');
          setAccount(''); setCar(''); setService('');
         })
          .catch(error=>{
          alert(error)
          })
          }

          const [validated, setValidated] = useState(false);

          const validation = (event) => {
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
      <Form noValidate validated={validated} onSubmit={handleSubmit && validation}>
        <Row className="mb-3">
        <Form.Group as={Col} controlId="name">
          <Form.Label>이름</Form.Label>
          <Form.Control 
            required
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="name" />
        </Form.Group>

        <Form.Group as={Col} controlId="phone">
          <Form.Label>전화번호</Form.Label>
          <Form.Control 
            required
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            placeholder="469-123-1234" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="email">
          <Form.Label>이메일 </Form.Label>
          <Form.Control 
            required
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          placeholder="myemail23@gmail.com" />
        </Form.Group>

        <Row className="mb-3">
        <Form.Group as={Col} controlId="date">
          <Form.Label>날짜</Form.Label>
          <Form.Control 
                      required
                      type="text"
                      format="mm/dd"
                      value={date}
                      onChange={(e)=>setDate(e.target.value)}
                      placeholder="08/15" />
        </Form.Group>

      <Form.Group as={Col} controlId="time">
          <Form.Label>시간</Form.Label>
          <Form.Control 
                      required
                      type="time"
                      value={time}
                      onChange={(e)=>setTime(e.target.value)} />
        </Form.Group>
        </Row>

      <Form.Group className="mb-3" controlId="departure">
        <Form.Label>출발지</Form.Label>
        <Form.Control 
                              required
                              type="text"
                              value={departure}
                              onChange={(e)=>setDeparture(e.target.value)}
        placeholder="1234 Main St, Dallas TX 75000" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="stop">
        <Form.Label>경유지</Form.Label>
        <Form.Control 
                              required
                              type="text"
                              value={stop}
                              onChange={(e)=>setStop(e.target.value)}
        placeholder="5678 Alexandria St, Dallas TX 75121" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="arrival">
        <Form.Label>목적지</Form.Label>
        <Form.Control 
                              required
                              type="text"
                              value={arrival}
                              onChange={(e)=>setArrival(e.target.value)}
                              placeholder="5678 Norman St, Dallas TX 75023" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="account">
          <Form.Label>인원수</Form.Label>
          <Form.Control 
                                required
                                type="text"
                                value={account}
                                onChange={(e)=>setAccount(e.target.value)}
                                placeholder="7명" />
        </Form.Group>

        <Form.Group as={Col} controlId="service">
          <Form.Label>서비스</Form.Label>
          <Form.Select required value={service} onChange={(e)=>setService(e.target.value)} >
            
          <option value="선택">선택</option>
            <option value="택시">택시</option>
            <option value="대리">대리운전</option>
            <option value="딜리버리">딜리버리</option>
            <option value="심부름">심부름</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="car">
          <Form.Label>차 종류</Form.Label>
          <Form.Select required value={car} onChange={(e)=>setCar(e.target.value)}>
            <option value="선택">선택...</option>
            <option value="대리">대리 - $5.00/mi </option>
            <option value="세단">세단(4인승) - $2.50/mi </option>
            <option value="suv">미니밴(6인승) - $3.00/mi</option>
            <option value="서버밴">서버밴(8인승) - $4.00/mi</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="message">
        <Form.Label>요청사항</Form.Label>
        <Form.Control as="textarea" rows={3} 
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}
        placeholder="예시)무료 카시트 서비스 1개 부탁드립니다." />
      </Form.Group>

      {/* <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check 
        required
        type="checkbox" label="정확한 전화번호, 이메일을 입력하셨나요?" />
      </Form.Group> */}

      <Button variant="primary" type="submit" onClick={()=>handleSubmit()}>
        예약하기
      </Button>
      <script>
      <Alert>
      예약 해주셔서 감사합니다!
    </Alert>
      </script>
        </Form>
      </Container>
      </section>
  );
}

export default ContactForm;