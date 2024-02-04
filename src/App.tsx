import { useState } from 'react'
import './App.css'
import FormWatches from './components/FormWatches'
import { PropsWatch } from './components/Watch'
import ListWatches from './components/ListWatches'
import uniqid from 'uniqid';


function App() {
  
  const [value, setValue] = useState<PropsWatch>({
    nameClock: '',
    timeZone: '',
    id: uniqid(),
  })

  const [list, setList] = useState<PropsWatch[]>([]);
  
  const handleNameClock = (e: { target: { value: string } }) => {
    setValue(preform => ({...preform, nameClock: e.target.value}))
  }

  const handleTimeZone = (e: { target: { value: string } }) => {
    setValue(preform => ({...preform, timeZone: e.target.value}))
  }

  const clearForm = () => {
    setValue(prevState => {
      return {
        ...prevState, 
        nameClock: '',
        timeZone: '',
        id: uniqid(), 
      }
    }
      )
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setList(prevState => {
      return [
        ...prevState, 
        value,
      ]
    })
    clearForm();
  }

  const handleDeleteItem = (id: string) :void=> {
    setList((prevState) => {
      return prevState.filter((list: { id: string }) => list.id !== id)
    })
  }

  return (
    <div className="container">
      <FormWatches handleFormSubmit={handleFormSubmit} value={value} handleNameClock={handleNameClock} handleTimeZone={handleTimeZone}/>
      <ListWatches list={list} onClickDelete={handleDeleteItem}/>
    </div>    
  )
}

export default App