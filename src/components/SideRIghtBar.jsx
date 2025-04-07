import React from 'react'
import { useSelector } from 'react-redux';

const SideRIghtBar = () => {
  const { data, isLoading, error } = useSelector((store) => store.weather);
  const arr = data.arrSeven;
  console.log(arr);
  return (
      <div className='h-3/4 bg-white/50 w-[200px] rounded-lg'>
  <nav>
<h2>Forecast on seven days</h2>
<ul>
  {
    arr.map((item, index)=>(
      <li key={index}>
        <h2>{item.time}</h2>
        <p>{item.tempMax} | {item.tempMin}</p>
        <hr />
      </li>
    ))
  }
</ul>
  </nav>
      </div>
  )
}

export default SideRIghtBar