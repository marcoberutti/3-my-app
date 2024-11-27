import './footer.css'

function Footer(){
  return(
    <div className="myFooter">
      <div className='descrizioneFooter'>
        <h2>Agenzia turistica I migliori viaggi</h2>
        <p>dal 1986 a disposizione dei propri clienti</p>
        <br />
        <address>Via roma, 57</address>
        <address>Milano, 20019</address>
        <address>MI, Italia</address>
      </div>
      <div className='linksFooter'>
        <ul>
          <a href=""><li>Home</li></a>
          <a href=""><li>About</li></a>
          <a href=""><li>Contacts</li></a>
          <a href=""><li>Subscribe</li></a>
        </ul>
        <ul>
          <a href=""><li>I nostri viaggi</li></a>
          <a href=""><li>Lo staff</li></a>
          <a href=""><li>Dove siamo</li></a>
          <a href=""><li>Blog</li></a>
        </ul>
      </div>
      <p className='rightsPictures'>I diritti delle immagini e dei testi sono riservati. È espressamente vietata la loro riproduzione con qualsiasi mezzo e l'adattamento totale o parziale.</p>
    </div>
  )
}

export default Footer