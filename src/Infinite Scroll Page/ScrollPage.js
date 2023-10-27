 import React, { useState,useEffect } from 'react'
 import { MocData } from '../MocData';
 import {Row,Col} from 'react-bootstrap';
 import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './scroll.css';
 
 function ScrollPage() {
    const [Count,setCount] = useState(5); 
    const [showLoader,setShowLoader] = useState(false); 

    const handleScroll = () => {

        const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight
    
        if (bottom) {
          setCount(Count+1);
          setShowLoader(true)
        }
      };
      useEffect(() => {
        window.addEventListener('scroll', handleScroll, {
          passive: true
        });
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [handleScroll]);
   return (
    <>
    {showLoader &&
    <div class="slider">
  <div class="line"></div>
  <div class="subline inc"></div>
  <div class="subline dec"></div>
</div>
 }
    <div className='scroll' ></div>
     <div className='main' onScroll = {handleScroll}>
     <Container>    
        <Row>
        {MocData.map((item, index) =>(
            <>
            {index < Count &&
                <Col sm={12} md={12} lg={12}>
                    <Card >
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
            }
            </>
            ))
        }
        </Row>
        
    </Container>
     </div>
     </>
   )
 }
 
 export default ScrollPage
 