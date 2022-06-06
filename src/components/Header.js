import React from 'react'
import image from '../image/vector.jpeg'

const Header = () => {
  return (
            <header>
                <img src={image} 
                className="meme-image"/>
                <h2 className="header-title"> Meme Generator</h2>
                <h3 className="header-project">React Course - Project 3</h3>
            </header>
  )
}

export default Header