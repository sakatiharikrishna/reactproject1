import React from 'react'
import './Peffect.css';

function Parallax() {
  return (
    <>
    
    <div>
      <p>In this example we have turned off parallax scrolling for mobile devices. It works as expected on all desktop screens sizes.</p>
     <p>Scroll Up and Down this page to see the parallax scrolling effect.</p>

    <div className="parallax"></div>

   <div style={{height:'1000px',backgroundColor:'skyblue',fontSize:'36px'}}>
     This div is just here to enable scrolling.
    Tip: Try to remove the background-attachment property to remove the scrolling effect.
     </div>

     <div className="parallax"></div>
    </div>
    </>
  )
}

export default Parallax;
