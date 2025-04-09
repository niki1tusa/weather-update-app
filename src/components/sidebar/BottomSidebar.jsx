import React from 'react'
import { useSelector } from 'react-redux';
import Icon from '../Icon';
import { useLocation } from 'react-router';

const SideRIghtBar = () => {
  const { data, isLoading, error } = useSelector((store) => store.weather);
  const arr = data.arrSeven;
  const location = useLocation()
  return (
     location.pathname==='/'?( <div className=' bg-white/50  rounded-lg'>
  <nav className='mt-4'>
<h2>Forecast on seven days</h2>
<ul className='flex justify-around'>
  {
    arr.map((item, index)=>(
      <li key={index} className='flex  flex-col border-l'>
        <h2>{item.time}</h2>
        <Icon iconType={item.iconType}/>
        <p>{item.tempMax} / {item.tempMin}</p>
      
      </li>
    ))
  }
</ul>
  </nav>
      </div>): ''
  )
}

export default SideRIghtBar