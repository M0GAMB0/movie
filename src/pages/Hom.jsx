import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import SideBar from '../components/SideBar';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';


const Hom = ()=>{
   return (
    <Container>
        <Row className="flex justify-content-between">
        <p></p>
        <Col xs={6} md={4}>
          <Image src="https://i.giphy.com/media/ZHLy7N0tUdtHxqfZpA/giphy.webp" fluid rounded />
        </Col>
        <Button />
        </Row>
    </Container>
   )
}
export default Hom;