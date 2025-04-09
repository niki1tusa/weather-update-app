import React from 'react'
import { useSelector } from 'react-redux'
import Icon from '../Icon'
import { FaWind } from "react-icons/fa";
import Title from '../Title';

const RightSidebar = () => {
  const {data} = useSelector(state=>state.weather)
  const arrCurr = data?.currentForecast || []
  const objectCurr = arrCurr.flat() 

  
  return (          
    <div className='bg-white/50 rounded-lg p-4'>
     <Title title={'Current weather'}/>
{objectCurr.map((item, i)=>(
  <div key={i}>
    <Icon iconType={item.iconType}/> 
<p>{item.rain > 0? 'raning': "isn't raining"}</p>
<p>{item.temperature}&deg;C</p>
<div className='flex items-center gap-1'><FaWind/><p>{item.wind}km/h</p></div>
  </div>
))}
    </div>
  )
}

export default RightSidebar