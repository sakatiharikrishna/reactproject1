import React, { useEffect, useState } from 'react'
import './DarkMode.css'


function DarkMode() {
  const [theme, setTheme] = useState("light-theme")

  const toggleTheme = () =>{
    if(theme === "dark-theme"){
      setTheme("light-theme")
    }else{
      setTheme("dark-theme")
    }
  }

  useEffect( () =>{
    document.body.className = theme;
  },[theme])

  return (
    <>
      <header>
        <a href='/' alt='logo'>Mode Change</a>
        <nav>
          <ul className='navigations'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <div className='container grid grid-two-column'>
            <div className='hero-section-data'>
                <h1>React Dark Mode</h1>
                <p>
                function makes the dependencies of useEffect Hook function makes the dependencies of useEffect Hook function makes the dependencies of useEffect Hook function makes the dependencies of useEffect Hook
                </p>
                <a href='#' className='btn' onClick={()=>toggleTheme()}>
                   Toggle Mode
                </a>
            </div>
            <div className='hero-section-image'>
                <img 
                  src='https://i.pinimg.com/550x/a7/ef/e5/a7efe5adc44b000f87897232b1900c10.jpg'
                  alt='lady'
                />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default DarkMode
