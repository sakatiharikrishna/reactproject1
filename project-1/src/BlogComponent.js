import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Blog.css';
import { useState,useEffect } from 'react';
import { MocData } from './MocData';
import {Row,Col} from 'react-bootstrap';

const BlogComponent = () => {
   const [Data,setData] = useState([])
  useEffect(() => {
    setData(MocData);
  },[]);
  const selectGrid = (type)=>{
    if(type ==="all"){
        setData(MocData);
    }else{
        setData(MocData.filter((item)=>item.type===type));
    }
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
        <Button variant="primary">Read full article</Button>
      </Card.Body>
        </Card>
                </Col>
            ))
        }
        </Row>
        
    </Container>
    </>
  )
};

export default BlogComponent;

