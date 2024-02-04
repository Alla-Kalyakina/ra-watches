
interface PropsForm {
  value: {nameClock: string, timeZone: string},
  handleNameClock: React.ChangeEventHandler<HTMLInputElement>,
  handleTimeZone: React.ChangeEventHandler<HTMLInputElement>,
  handleFormSubmit: React.FormEventHandler<HTMLFormElement>
}

const FormWatches = ({value, handleNameClock, handleTimeZone, handleFormSubmit}: PropsForm) => {

  return (
    <form onSubmit={handleFormSubmit}> 
      <input type="text" value={value.nameClock} onChange={handleNameClock} required/>
      <input type="number" value={value.timeZone} onChange={handleTimeZone} required/>
      <button type="submit">Добавить</button>
    </form>
  )
}

export default FormWatches;