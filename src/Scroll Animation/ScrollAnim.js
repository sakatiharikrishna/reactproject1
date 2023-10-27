import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './animation.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ScrollAnim() {
    useEffect(()=>{
          AOS.init({duration: 2000});
    },[])
  return (
    <div className='top'>
      <h1>Welcome to React Scroll Animation</h1>
      <div>
        <p style={{textAlign:'justify'}}>Building an exit-intent popup is a great way to get your audience to subscribe to your mailing list, but it’s also a great way to learn more about mouse and keyboard events. With this project, you will learn how to trigger a popup right when the mouse is about to leave the page, how to close the popup in three different ways, and how to work with cookies in order to prevent the popup from appearing again for every session.
        Building an exit-intent popup is a great way to get your audience to subscribe to your mailing list, but it’s also a great way to learn more about mouse and keyboard events. With this project, you will learn how to trigger a popup right when the mouse is about to leave the page, how to close the popup in three different ways, and how to work with cookies in order to prevent the popup from appearing again for every session.
        Building an exit-intent popup is a great way to get your audience to subscribe to your mailing list, but it’s also a great way to learn more about mouse and keyboard events. With this project, you will learn how to trigger a popup right when the mouse is about to leave the page, how to close the popup in three different ways, and how to work with cookies in order to prevent the popup from appearing again for every session.
        Building an exit-intent popup is a great way to get your audience to subscribe to your mailing list, but it’s also a great way to learn more about mouse and keyboard events. With this project, you will learn how to trigger a popup right when the mouse is about to leave the page, how to close the popup in three different ways, and how to work with cookies in order to prevent the popup from appearing again for every session.
        Building an exit-intent popup is a great way to get your audience to subscribe to your mailing list, but it’s also a great way to learn more about mouse and keyboard events. With this project, you will learn how to trigger a popup right when the mouse is about to leave the page, how to close the popup in three different ways, and how to work with cookies in order to prevent the popup from appearing again for every session.
        Building an exit-intent popup is a great way to get your audience to subscribe to your mailing list, but it’s also a great way to learn more about mouse and keyboard events. With this project, you will learn how to trigger a popup right when the mouse is about to leave the page, how to close the popup in three different ways, and how to work with cookies in order to prevent the popup from appearing again for every session.
        Building an exit-intent popup is a great way to get your audience to subscribe to your mailing list, but it’s also a great way to learn more about mouse and keyboard events. With this project, you will learn how to trigger a popup right when the mouse is about to leave the page, how to close the popup in three different ways, and how to work with cookies in order to prevent the popup from appearing again for every session.
</p>
      </div>
      <div className='anmimation' data-aos="fade-up">
      <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/d7/fe/f4/d7fef4f1954a984f999996ff5f9aaf45.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
      <div className='anmimation' data-aos="fade-down">
      <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="http://2.bp.blogspot.com/-99ggym_0788/Ub9eSnX7U1I/AAAAAAAAKB8/pGEbvg29u0Q/s1600/this_road_goes_to_the_dark_Wallpaper_8d71e.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
      <div className='anmimation' data-aos="fade-left">
      <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://www.desktopbackground.org/download/1280x1024/2011/09/29/273550_beautiful-places-desktop-backgrounds-pictures-5-hd-wallpapers_1600x1200_h.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
      <div className='anmimation' data-aos="fade-right">
      <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="http://images4.fanpop.com/image/photos/20100000/-beautiful-Japan-beautiful-places-20150798-1200-900.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
      <div style={{margin:'20px'}}><h1>Flip</h1></div>
      <div className='anmimation' data-aos="flip-right">
      <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="http://1.bp.blogspot.com/-iEKl0godxnc/UAkn0xWoPzI/AAAAAAAAHsE/rwjVPUYuBJ4/s1600/Hdhut.blogspot.com+(15).jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
      <div style={{margin:'20px'}}><h1>Zoom</h1></div>
      <div className='anmimation' data-aos="zoom-in">
      <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="http://hdqwalls.com/wallpapers/beautiful-city-bridge-wallpaper.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
    </div>
  )
}

export default ScrollAnim;
