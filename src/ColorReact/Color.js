import React, { useState } from 'react'
import {SketchPicker} from 'react-color'

function Color() {

    const [currentColor, setCurrentColor] = useState("#ff6")
      const handleChange = (color) =>{
        setCurrentColor(color.hex)
      }

      const appStyle = {
         backgroundColor: currentColor,
         height : "100vh"
      }
  return (
    <div style={appStyle}>
      <h1>Color Generator</h1>

      <h2 style={{top:"50%"}}>Happy Birthday With Colors</h2>

      <SketchPicker 
         color={currentColor}
         onChangeComplete={handleChange}
      />

    </div>
  )
}

export default Color
