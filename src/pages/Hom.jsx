import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

const Hom = ({ isLoggedIn, setLoggedIn }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Row>
        <Col xs={4} md={2}></Col>
        <Col xs={4} md={8} className="text-center">
          <Image
            src="https://i.giphy.com/media/ZHLy7N0tUdtHxqfZpA/giphy.webp"
            fluid
            rounded
            width="50%"
          />
        </Col>
      </Row>
    </>
  );
};
export default Hom;
