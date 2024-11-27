function SubNavbar({isDestinationsBtnOn,isFormBtnOn,filterStatus,filterData, handleFilterData, handleResetFilter, handleFormVisibility, isFormVisible, handleDestinationsVisible, isDestinationVisible, }){

  return(
    <div className="btnContainer">
    {filterData === false ?
    <button 
    onClick={handleFilterData} 
    className={filterStatus === true ? 'activated' : ''}
    >Filter by ✔️ visited</button>
    :
    <button 
    onClick={handleResetFilter} 
    className={!filterStatus ? 'activated':''}
    >Reset filter</button>
    }
    <button 
    onClick={handleFormVisibility} 
    className={isFormBtnOn ? 'activated':''}
    >{isFormVisible ? "Hide form" : "Add card"}</button>
    <button 
    onClick={handleDestinationsVisible} 
    className={isDestinationsBtnOn ? 'activated':''}
    >{!isDestinationVisible ? "Our destinations" : 'Do not show destinations'}</button>
    <button>default</button>
    <button>default</button>
    <button>default</button>
  </div>
  )
}

export default SubNavbar