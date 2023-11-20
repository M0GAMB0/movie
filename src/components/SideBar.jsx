import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';

const SideBar=()=>{
    const history=useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[active, setActive] = useState(0);
    const handleClick =(key,menu) =>{
        if(menu=="Home")menu='';
        setActive(key)
        history(`/${menu}`);
    }
    const accessMenu = ["Home","Movies"];
    return (
        <>
          <Button variant="link" onClick={handleShow}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
            <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><g transform="scale(5.12,5.12)"><path d="M0,7.5v5h50v-5zM0,22.5v5h50v-5zM0,37.5v5h50v-5z"></path></g></g>
            </svg>
          </Button>
    
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <ListGroup>
                {accessMenu.map((menu,key)=><ListGroup.Item className={active==key?"active":""} style={{color : '#000133',border:'none'}} onClick={()=>handleClick(key,menu)} key={key}>{menu}</ListGroup.Item>)}
            </ListGroup>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      );
}
export default SideBar;