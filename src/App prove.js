import { useState } from "react"
import Card from "./components prove/Card"
import './App.css'
import CardForm from "./components prove/CardForm"
import Navbar from "./components prove/Navbar"
import SubNavbar from "./components prove/SubNavbar"
import AllVisited from "./components prove/AllVisited"
import About from "./components prove/About"
import Contacts from "./components prove/Contacts"
import Subscribe from "./components prove/Subscribe"
// import Home from "./components prove/Home"

const descrizione = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'

function AppProve(){
  const [filterData, setFilterData] = useState(false)
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
  const [allVisited, setAllVisited] = useState(false)
  const [filteredCities, setFilteredCities] = useState(cities)
  const [isFormVisible, setIsFormVisible]= useState(false)
  const [showPage, setShowPage] = useState('Home')

  const addCity = (city) => {
    setCities([...cities, city])
    setFilteredCities([...filteredCities, city])
  }
  
  function handleFilterData(){    
    let filteredCities = cities.filter(city => city.isVisited === true)
    setFilteredCities(filteredCities)
    if(filteredCities.length === cities.length){
      setAllVisited(true)
    }
    setFilterData(true)
  }
  
  function handleResetFilter(){
    setFilteredCities(cities)
    setFilterData(false)
    setAllVisited(false)
  }
  
  function handleFormVisibility(){
    setIsFormVisible(!isFormVisible)
  }

  return (
    <>
      <Navbar setShowPage={setShowPage}></Navbar>
      { showPage === 'Home' &&
      <>
      <SubNavbar 
        filterData={filterData} 
        isFormVisible={isFormVisible}
        handleFilterData={()=>handleFilterData()}
        handleResetFilter={()=>handleResetFilter()}
        handleFormVisibility={()=>handleFormVisibility()}>
      </SubNavbar>
      <div className="formAllVisitiedContainer">
        {isFormVisible && <CardForm addCity={addCity} descrizione={descrizione}></CardForm>}
        {allVisited && <AllVisited filteredCities={filteredCities}/>}
      </div>
      <div className="cardContainer">
        {filteredCities.map((city) => (
          <Card
            key={city.id}
            isVisited={city.isVisited}
            title={city.title}
            imgUrl={city.imgUrl}
            cities={cities}
            id={city.id}
            setFilteredCities={setFilteredCities}
            setCities={setCities}
            filterData={filterData}
            filteredCities={filteredCities}
            allVisited={allVisited}
            setAllVisited={setAllVisited}
          >
          {city.descrizione}
          </Card>)
        )}
      </div>
      </>
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
    </>
  )
}

export default AppProve