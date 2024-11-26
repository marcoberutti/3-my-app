function SubNavbar({filterData, handleFilterData, handleResetFilter, handleFormVisibility, isFormVisible}){
  return(
    <div className="btnContainer">
    {filterData === false ?
    <button onClick={handleFilterData}>Filter by ✔️ visited</button>
    :
    <button onClick={handleResetFilter}>Reset filter</button>
    }
    <button onClick={handleFormVisibility}>{isFormVisible ? "Hide form" : "Show form"}</button>
  </div>
  )
}

export default SubNavbar