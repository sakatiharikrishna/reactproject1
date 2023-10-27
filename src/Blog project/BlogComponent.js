import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import './Blog.css';
import { useState,useEffect } from 'react';
import { MocData } from '../MocData';
import {Row,Col} from 'react-bootstrap';

const BlogComponent = () => {
   const [Data,setData] = useState([])
   const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    setData(MocData);
    setModalShow(true)
  },[]);
  const selectGrid = (type)=>{
    if(type ==="all"){
        setData(MocData);
    }else{
        setData(MocData.filter((item)=>item.type===type));
    }
  }
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Enter Your Email
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Email</h4>
          <input type="email" style={{width:'100%',borderRadius:'5px'}} placeholder='Enter your email'/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Submit</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <>
        <Container>
        <ul className='head'>
            <li onClick={()=>selectGrid("all")}>All</li>
            <li onClick={()=>selectGrid("design")}>Design</li>
            <li onClick={()=>selectGrid("branding")}>Branding</li>
            <li onClick={()=>selectGrid("illustration")}>Illustration</li>
            <li onClick={()=>selectGrid("icons")}>Icons</li>
            <li onClick={()=>selectGrid("themes")}>Themes</li>
        </ul>
        <Row>
        {Data.map((item, i) =>(
                <Col sm={4} md={4} lg={4}>
                    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.Title}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <Button variant="primary" >Read full article</Button>
      </Card.Body>
        </Card>
                </Col>
            ))
        }
        </Row>
        
    </Container>
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
};

export default BlogComponent;

