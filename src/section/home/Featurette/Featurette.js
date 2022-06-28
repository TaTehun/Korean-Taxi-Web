import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Divider from '@mui/material/Divider';
import Image from 'react-bootstrap/Image'

const Featurette = () => {
  return (
    <Container>        
    
    <Divider variant="middle" />
    
    <Row> 
    <Col md={{ order: 2 }}>
    <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
    </Col>
    <Col md={7}>
    <h2 className="featurette-heading">Luxury Sedan 
    <span className="text-muted">3 - 4 인승</span>
    </h2>
        <p className="lead">Some great placeholder content for the first featurette here. 
        Imagine some exciting prose here.
        </p>
    </Col>
    </Row>

    <Divider variant="middle" />

    <Row> 
    <Col md={5}>
    <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
    </Col>
    <Col md={7}>
    <h2 className="featurette-heading">Luxury SUV
    <span className="text-muted">5 - 6 인승</span>
    </h2>
        <p className="lead">Another featurette? Of course. More placeholder content here to 
        give you an idea of how this layout would work with some actual real-world content in place.
        </p>    
    </Col>
    </Row>

    <Divider variant="middle" />

    <Row> 
    <Col md={{ order: 2 }}>
    <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
    </Col>
    <Col md={7}>
    <h2 className="featurette-heading">Luxury Van
    <span className="text-muted">7 - 8 인승</span>
    </h2>
        <p className="lead">And yes, this is the last block of representative placeholder content.
         Again, not really intended to be actually read, simply here to give you a better view 
         of what this would look like with some actual content. Your content.
         </p>
    </Col>
    </Row>

    <Divider variant="middle" />

    </Container>

  )
}

export default Featurette;