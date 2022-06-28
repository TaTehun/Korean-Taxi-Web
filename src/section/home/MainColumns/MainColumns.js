import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TaxiIcon from '../../../img/graphics/icons/taxiIcon.svg'
import CarIcon from '../../../img/graphics/icons/carIcon.svg'
import DeliveryIcon from '../../../img/graphics/icons/deliveryIcon.svg'
import ShoppingIcon from '../../../img/graphics/icons/shoppingIcon.svg'

const MainColumns = () => {
  return (
    <Container className="d-flex justify-content-around">
     <Col className="1 of 4">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={TaxiIcon} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col className="2 of 4">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={CarIcon} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col className="3 of 4">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={DeliveryIcon} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col className="4 of 4">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ShoppingIcon} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    </Container>
);
}

export default MainColumns