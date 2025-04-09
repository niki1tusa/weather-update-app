import React from 'react'
import { useSelector } from 'react-redux'
import Icon from '../Icon'
import { FaWind } from "react-icons/fa";
const RightSidebar = () => {
  const {data} = useSelector(state=>state.weather)
  const arrCurr = data?.currentForecast || []
  const objectCurr = arrCurr.flat() 
  console.log(objectCurr);
  
  return (          
    <div className='bg-white/50 rounded-lg p-4'>
{objectCurr.map((item, i)=>(
  <div key={i}>
    <Icon iconType={item.iconType}/>
      <p>Current forecast</p>
<p>rain{item.rain}</p>
<p>temperature: {item.temperature}</p>
<div className='flex items-center gap-1'><FaWind/><p>{item.wind}km/h</p></div>

  </div>

))

}
    </div>
  )
}

export default RightSidebar