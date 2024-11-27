import { useState } from "react"
import './App.css'
import Navbar from "./components prove/navbar/Navbar"
import Home from "./components prove/home/Home"
import About from "./components prove/about/About"
import Contacts from "./components prove/contacts/Contacts"
import Subscribe from "./components prove/subscribe/Subscribe"
import Footer from "./components prove/footer/Footer"

const descrizione = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'

function AppProve(){
  const [cities, setCities] = useState([
    {
      id: 1,
      isVisited: true,
      title: 'Tokyo',
      imgUrl: 'https://media.istockphoto.com/id/904453184/it/foto/immagine-composita-del-monte-fuji-e-dello-skyline-di-tokyo.webp?a=1&b=1&s=612x612&w=0&k=20&c=8Wb2Smu816T-sMFVjxV7VM6zTiqV9kw45PzlUi-x3LQ=',
      descrizione: descrizione
    },
    {
      id: 2,
      isVisited: false,
      title: 'Rome',
      imgUrl:'https://media.istockphoto.com/id/509475506/it/foto/roman-citscape-panorama-al-tramonto-roma-italia.webp?a=1&b=1&s=612x612&w=0&k=20&c=jfJZ4-AOZEDm8eKKBAHNu4DYjKIbEjKynFvaOdaCjNc=',
      descrizione: descrizione
    },
    {
      id: 3,
      isVisited: true,
      title: 'Paris',
      imgUrl: 'https://media.istockphoto.com/id/1185953092/it/foto/lattrazione-principale-di-parigi-e-di-tutta-leuropa-%C3%A8-la-torre-eiffel-nei-raggi-del-sole-al.webp?a=1&b=1&s=612x612&w=0&k=20&c=V1MffEUVDLYnnzpalFPhKfuDPTnxSqyoODrkmsWS118=',
      descrizione: descrizione
    },
    {
      id: 4,
      isVisited: false,
      title: 'London',
      imgUrl: 'https://media.istockphoto.com/id/1298168948/it/foto/albero-in-fiore-in-primavera-a-hyde-park-londra-regno-unito.webp?a=1&b=1&s=612x612&w=0&k=20&c=vJ5bTer0Z66VrNU0d3eSF-81-14smA725kVL3SBXKlQ=',
      descrizione: descrizione
    },
  ])
  
  const [showPage, setShowPage] = useState('Home')

  return (
    <>
      <Navbar setShowPage={setShowPage}></Navbar>
      <div className="mainContent">
        { showPage === 'Home' &&
        <Home setCities={setCities} cities={cities}></Home>
        }
        { showPage === 'About' &&
        <>
        <About></About>
        </>
        }
        { showPage === 'Contacts' &&
        <>
        <Contacts></Contacts>
        </>
        }
        { showPage === 'Subscribe' &&
        <>
        <Subscribe></Subscribe>
        </>
        }
      </div>
      <Footer></Footer>
    </>
  )
}

export default AppProve