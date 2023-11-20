import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const SideBar = ({ isLoggedIn, setLoggedIn }) => {
  const history = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [active, setActive] = useState(0);

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleClick = (key, menu) => {
    if (menu == 'Home') menu = '';
    setActive(key);
    history(`/${menu}`);
  };
  const handleLogin = () => {
    setLoggedIn(true);
    setShowModal(false);
  };
  const handleLogout = () => {
    setLoggedIn(false);
  };

  const accessMenu = ['Home', 'Movies'];
  const notAccessMenu = ['Home', 'Movies', 'Genres', 'Add Movies'];
  return (
    <>
      <div className="d-flex justify-content-between">
        <Button variant="link" onClick={handleShow}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0,0,256,256">
            <g
              fill="#ffffff"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
              style={{ mixBlendMode: 'normal' }}>
              <g transform="scale(5.12,5.12)">
                <path d="M0,7.5v5h50v-5zM0,22.5v5h50v-5zM0,37.5v5h50v-5z"></path>
              </g>
            </g>
          </svg>
        </Button>
        <Row>
          <Col xs={4} md={12}>
            {!isLoggedIn ? (
              <Button
                variant="primary"
                onClick={handleShowModal}
                style={{ marginTop: '20px' }}>
                Log In
              </Button>
            ) : (
              <Button
                variant="primary"
                onClick={handleLogout}
                style={{ marginTop: '20px' }}>
                LogOut
              </Button>
            )}
          </Col>
        </Row>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup>
            {!isLoggedIn
              ? accessMenu.map((menu, key) => (
                  <ListGroup.Item
                    className={active == key ? 'active' : ''}
                    style={{
                      color: '#000133',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleClick(key, menu)}
                    key={key}>
                    {menu}
                  </ListGroup.Item>
                ))
              : notAccessMenu.map((menu, key) => (
                  <ListGroup.Item
                    className={active == key ? 'active' : ''}
                    style={{
                      color: '#000133',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleClick(key, menu)}
                    key={key}>
                    {menu}
                  </ListGroup.Item>
                ))}
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address :</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Passwords :</Form.Label>
              <Form.Control type="password" placeholder="**************" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleLogin}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default SideBar;
