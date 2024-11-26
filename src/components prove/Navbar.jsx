function Navbar({ setShowPage }){

  function handleShowPage(e){
    setShowPage(e.target.innerText)
  }

  return (
    <nav className="navbar">
      <ul>
        <a onClick={(e) => handleShowPage(e)}><li>Home</li></a>
        <a onClick={(e) => handleShowPage(e)}><li>About</li></a>
        <a onClick={(e) => handleShowPage(e)}><li>Contacts</li></a>
        <a onClick={(e) => handleShowPage(e)}><li>Subscribe</li></a>
      </ul>
    </nav>
  )
}

export default Navbar