import React from 'react'
import { useSelector } from 'react-redux';
import Icon from '../Icon';
import { useLocation } from 'react-router';
import Title from '../Title';
const BottomSidebar = () => {
  const { data, isLoading, error } = useSelector((store) => store.weather);
  const arr = data.arrSeven;
  const location = useLocation()
  
  const formatDate = (date) =>{
     new Intl.DateTimeFormat('ru-Ru',{dateStyle: "full",
      timeStyle: "long",
    }).format(date)
  }
  return (
     location.pathname==='/'?( <div className=' '>
  <nav className='mt-4'>
<Title title={'Forecast on daily'}/>
<ul className='flex justify-around bg-white/50  rounded-lg'>
  {
    arr.map((item, index)=>(
      <li key={index} className='flex  flex-col  border-l'>
        <h2>{formatDate(item.time)}</h2>
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

export default BottomSidebar