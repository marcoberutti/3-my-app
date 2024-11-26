import { useRef } from 'react'
import { nanoid } from 'nanoid/non-secure'
import { useDispatch } from 'react-redux'
import { added } from '../features/taskSlice'

function Form(){
  const dispatch = useDispatch()
  const inputRef = useRef()

  function handleAdding(){

    dispatch(added({
      id: nanoid(),
      name: inputRef.current.value
    }))
  }

  return (
    <div className="inputForm">
      <h3>Che cosa devo fare:</h3>
      <div className="inputContainer">
        <input 
          ref={inputRef}
          type='text'
        />
        <button onClick={handleAdding}>Aggiungi</button>       
      </div>
    </div>
  )
}

export default Form