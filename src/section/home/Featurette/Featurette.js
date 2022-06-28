import './Featurette.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
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
    <h1 className="heading">Luxury Sedan </h1>
    <h2 className="text-muted">3 - 4 인승</h2>
    <p className="text-muted">*The vehicle image shown is for illustration purposes only and may not be an exact representation of the service vehicle.</p>
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
    <h1 className="heading">Luxury SUV </h1>
    <h2 className="text-muted">5 - 6 인승</h2>
    <p className="text-muted">*The vehicle image shown is for illustration purposes only and may not be an exact representation of the service vehicle.</p>
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
    <h1 className="heading">Luxury Van </h1>
    <h2 className="text-muted">7 - 8 인승</h2>
    <p className="text-muted">*The vehicle image shown is for illustration purposes only and may not be an exact representation of the service vehicle.</p>
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