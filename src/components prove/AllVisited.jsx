function AllVisited({filteredCities}){
  return(
    <div className="allVisitedContainer">
      <h1>TUTTE VISITATE!</h1>
      <ul>
        {filteredCities.map(city =>
          <li key={city.id}>{city.title}</li>
        )}
      </ul>
    </div>
  )
}

export default AllVisited