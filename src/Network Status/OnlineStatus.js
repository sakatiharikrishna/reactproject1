import React, { useEffect, useState } from 'react'
import { AiOutlineGlobal } from "react-icons/ai"

function Onlinestatus() {
  //declare UseState
  const[isOnline, setOnline] = useState(false);

  useEffect(() =>{

      function handleOnlineStatus() {
        setOnline(true);
      }

      function handleOfflineStatus() {
        setOnline(false);
      }
      
      window.addEventListener("online",handleOnlineStatus);
      window.addEventListener("offline",handleOfflineStatus);

      return () =>{
        window.addEventListener("online",handleOnlineStatus);
        window.addEventListener("offline",handleOfflineStatus);
      }
  },[])

  return (
    <div style={{
      position:'absolute',
      top:'40%',
      left:'45%',
      textAlign:'center'
      }}>

        {
            isOnline === true ? 
            <><AiOutlineGlobal  style={{color:'Green',fontSize:'5rem'}} />
            <p style={{fontSize:'2rem',fontWeight:500,letterSpacing:'2px'}}>ONLINE</p>
            </> 
            : 
            <>
            <AiOutlineGlobal  style={{color:'red',fontSize:'5rem'}} />
            <p style={{fontSize:'2rem',fontWeight:500,letterSpacing:'2px'}}>OFFLINE</p>
            </>
        }     
    </div>
  )
}

export default Onlinestatus
