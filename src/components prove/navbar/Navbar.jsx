import './navbar.css'
import { useState } from 'react'

function Navbar({ setShowPage }){
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  function handleMenuVisible(){
    setIsMenuVisible(!isMenuVisible)
  }

  function handleShowPage(e){
    setShowPage(e.target.innerText)
  }

  return (
    <nav id="navbar">
      <button 
        onClick={handleMenuVisible}
        className='hamburgerMenu'>
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </button>
      <ul className={isMenuVisible ? 'visible' : ''}>
        <a onClick={(e) => handleShowPage(e)}><li>Home</li></a>
        <a onClick={(e) => handleShowPage(e)}><li>About</li></a>
        <a onClick={(e) => handleShowPage(e)}><li>Contacts</li></a>
        <a onClick={(e) => handleShowPage(e)}><li>Subscribe</li></a>
      </ul>

    </nav>
  )
}

export default Navbar