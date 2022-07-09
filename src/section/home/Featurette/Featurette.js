import './Featurette.css'
import {Row, Col, Container, Button } from 'react-bootstrap'
import Divider from '@mui/material/Divider';
import Box from '@mui/system/Box';
import Sedan from '../../../img/graphics/sedan.jpg'
import Suv from '../../../img/graphics/suv.jpg'
import Ready from '../../../img/graphics/ready.jpg'

const Featurette = () => {
  return (
    <section className="section">
    <Container>        
    
    <Box mb={10}>
    <Divider variant="middle" />
    </Box>

    <Row className='figure-container'> 
    <Col md={7} md={{ order: 2 }}>
    <div className='text-container'>
    <h1 className="heading"> <span className="text-muted"> 4 인승 </span>  Sedan </h1>
    <p> $2.50/mi </p>
    <p className="text-muted">*The vehicle image shown is for illustration purposes only and may not be an exact representation of the service vehicle.</p>
    <div class="d-flex justify-content-center">
    <Button a href="/contact" variant="dark">예약하기</Button>
    </div>
    </div>
    </Col> 

    <Col md={5} md={{ order: 1 }}>
    <div className='pic-container'>
    <img
          className="feature-img"
          src={Sedan}
        />
    </div>
    </Col>
    </Row>

    <Box mt={10} mb={10}>
    <Divider variant="middle" />
    </Box>

    <Row className='figure-container'>
    <Col md={5} md={{ order: 1 }}>
    <div className='text-container'>
    <h1 className="heading"> <span className="text-muted"> 6 인승 </span> SUV </h1>
    <p> $3.00/mi </p>
    <p className="text-muted">*The vehicle image shown is for illustration purposes only and may not be an exact representation of the service vehicle.</p>
    <div class="d-flex justify-content-center">
    <Button a href="/contact" variant="dark">예약하기</Button>
    </div>
    </div>
    </Col>

    <Col md={7} md={{ order: 2 }}>
    <div className='pic-container'>
    <img
          className="feature-img"
          src={Ready}
        />
    </div>
    </Col>
    </Row>

    <Box mt={10} mb={10}>
    <Divider variant="middle" />
    </Box>

    <Row className='figure-container'>
    <Col md={7} md={{ order: 2 }}>
    <div className='text-container'>
    <h1 className="heading"> <span className="text-muted"> 8 인승 </span> Surburban </h1>
    <p> $4.00/mi </p>
    <p className="text-muted">*The vehicle image shown is for illustration purposes only and may not be an exact representation of the service vehicle.</p>
    </div>
    <div class="d-flex justify-content-center">
    <Button a href="/contact" variant="dark">예약하기</Button>
    </div>
    </Col> 
    
    <Col md={5} md={{ order: 1 }}>
    <div className='pic-container'>
    <img
          className="feature-img"
          src={Suv}
        />
    </div>
    </Col>
    </Row>

    <Box mt={10}>
    <Divider variant="middle" />
    </Box>

    </Container>
    </section>

  )
}

export default Featurette;