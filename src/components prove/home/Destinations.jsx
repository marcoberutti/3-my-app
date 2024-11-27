function Destinations({cities}){
  return (
    <div className="destinations">
    <h1>Our destinations:</h1>
    {cities.map((city)=> 
      <li key={city.id}>{city.title}</li>
    )}
    </div>
  )
}

export default Destinations