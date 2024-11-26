function Card({title, imgUrl, isVisited, children, cities, id, setFilteredCities, setCities, filterData, filteredCities, allVisited, setAllVisited}){

  const visitedLabel = isVisited ? '✔️ visitata' : '❌ non visitata';
  const visited = isVisited ? 'visited' : '';

  function handleVisited(){
    const updatedCities = cities.map(city => city.id === id ? {...city, isVisited: !isVisited} : city)
    setCities(updatedCities)

    const updatedFilteredCities = updatedCities.filter(city => city.isVisited);
    
    setFilteredCities(updatedFilteredCities);
    setAllVisited(updatedFilteredCities.length === updatedCities.length)
    setFilteredCities(updatedCities)
  }

  return(
    <>
    <div className="card">
      <img src={imgUrl} alt="" />
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <div className="visitedSection">
        <button
          onClick={()=>handleVisited()}>
          <span className={visited}>{visitedLabel}</span>
        </button>
      </div>
    </div>
    </>
  )
}

export default Card