import { useState, useEffect } from "react"
import './home.css'
import CardForm from "./CardForm"
import SubNavbar from "./SubNavbar"
import AllVisited from "./AllVisited"
import Card from "./Card"
import Destinations from "./Destinations"

function Home({setCities, cities, descrizione}){
  const [filterData, setFilterData] = useState(false)
  const [allVisited, setAllVisited] = useState(false)
  const [filteredCities, setFilteredCities] = useState(cities)
  const [isFormVisible, setIsFormVisible]= useState(false)
  const [isDestinationVisible, setIsDestinationVisible]= useState(false)
  const [filterStatus, setFilterStatus] = useState(false)
  const [isFilterBtnOn, setIsFilterOnBtn] = useState(false)
  const [isFormBtnOn, setIsFormOnBtn] = useState(false)
  const [isDestinationsBtnOn, setIsDestinationsOnBtn] = useState(false)

  useEffect(() => {
    setFilterStatus(isFilterBtnOn)
  }, [isFilterBtnOn])

  const addCity = (city) => {
    setCities([...cities, city])
    setFilteredCities([...filteredCities, city])
  }
  
  function handleFilterData(){    
    setFilterData(!filterData)
    let filteredCities = cities.filter(city => city.isVisited === true)
    setFilteredCities(filteredCities)
    if(filteredCities.length === cities.length){
      setAllVisited(true)
    }
  }
  
  function handleResetFilter(){
    setFilterData(!filterData)
    setFilteredCities(cities)
    setAllVisited(false)
  }
  
  function handleFormVisibility(){
    setIsFormVisible(!isFormVisible)
    setIsFormOnBtn(!isFormBtnOn)
  }

  function handleDestinationsVisible(){
    setIsDestinationVisible(!isDestinationVisible)
    setIsDestinationsOnBtn(!isDestinationsBtnOn)
  }

  return(
    <div className="homeContainer">
      <SubNavbar 
        filterData={filterData} 
        isFormVisible={isFormVisible}
        handleFilterData={()=>handleFilterData()}
        handleResetFilter={()=>handleResetFilter()}
        handleFormVisibility={()=>handleFormVisibility()}
        handleDestinationsVisible={()=>handleDestinationsVisible()}
        isDestinationVisible={isDestinationVisible}
        filterStatus={filterStatus}
        isFormBtnOn={isFormBtnOn}
        isDestinationsBtnOn={isDestinationsBtnOn}
        >
      </SubNavbar>
      <div className="formAllVisitiedContainer">
        {/* TODO usare uno switch per non fare vedere 2 cose allo stesso tempo? */}
        {/* oppure fare uno stato di quando sono attvi con un bg diverso? */}
        {!isFormVisible && !allVisited && !isDestinationVisible ? <h1>working area...</h1> : ''}
        {isFormVisible && <CardForm addCity={addCity} descrizione={descrizione}></CardForm>}
        {allVisited && <AllVisited filteredCities={filteredCities}/>}
        {isDestinationVisible && <Destinations cities={cities}/>}
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
    </div>
  )
}

export default Home