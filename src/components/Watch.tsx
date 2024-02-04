import { useEffect, useState } from 'react';

export interface PropsWatch {
    nameClock: string;
    timeZone: string;
    id: string;
    onClickDelete?: (id:string) => void
}

const Watch = ({nameClock, timeZone, id, onClickDelete}: PropsWatch) => {

  const [time, setTime] = useState(
    {
      hour: '',
      minutes: '',
      seconds: ''
    }
  );

  const tick = () => {
    const date = new Date();
    let hour = date.getUTCHours() + Number(timeZone);
    while (hour > 23) hour = hour-24;
    const min = date.getMinutes().toString().padStart(2, '0');
    const sec = date.getSeconds().toString().padStart(2, '0');
    setTime(prevState => {
      return {
        ...prevState,
        hour: String(hour),
        minutes: min,
        seconds: sec,
      }
    })
  }

  useEffect(tick, [])

  useEffect(() => {
    const interval = window.setInterval(tick, 1000);

    return(() => {
      clearInterval(interval);
    }) 
  })


    return (
      <div className="watch">
        <div className="title">{nameClock}</div>
        <span className="time">{`${time.hour}:${time.minutes}:${time.seconds}`}</span>
        <button type='button' onClick={() => onClickDelete(id)}>х</button>
      </div>
    )
}

export default Watch;