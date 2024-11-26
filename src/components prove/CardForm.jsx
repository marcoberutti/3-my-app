import { useState } from "react"

function CardForm({addCity, descrizione}){
  const [formData, setFormData] = useState({
    name: '',
    descrizione: '',
    imgUrl: '',
    isVisited: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    const city =     
    {
      id: Math.random(),
      title: formData.name,
      descrizione: formData.descrizione,
      imgUrl: formData.imgUrl,
      isVisited: formData.isVisited,
    }
    addCity(city)
  }

  function handleInputChange(e){
    const {name, value, type, checked} = e.target
    const inputValue = type === 'checkbox' ? checked : value
    setFormData({
      ...formData,
      [name]: inputValue,
    })
  }

  return ( 
    <form onSubmit={handleSubmit} className='cardForm'>
      <div>
        <label>Nome Città
          <input type="text" name="name" value={formData.name} onChange={handleInputChange}/>
        </label>
        <label>Descrizione
          <textarea name="descrizione" value={formData.descrizione} onChange={handleInputChange}></textarea>
        </label>
        <label>Immagine
          <input type="text" name="imgUrl" value={formData.imgUrl} onChange={handleInputChange}/>
        </label>
        <label>Visitata
          <input type="checkbox" name="isVisited" checked={formData.isVisited} onChange={handleInputChange}/>
        </label>
      </div>
      <button type="submit">Aggiungi card</button>
    </form>
  )
}

export default CardForm