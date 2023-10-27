import React from 'react'


export default function ResetButton({resetBoard}) {
  return (
    <button style={{color:'white',backgroundColor:'blue',border:'none',borderRadius:'5%',height:'50px'}} onClick={resetBoard}>Reset Board</button>
  )
}
