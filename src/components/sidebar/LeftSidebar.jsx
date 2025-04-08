import ItemBar from './ItemBar'
import { IoRainyOutline } from "react-icons/io5";
import { FaHome } from 'react-icons/fa'
import { IoNewspaperOutline } from "react-icons/io5";
import { TbMap2 } from "react-icons/tb";
import { FaHandshakeSimple } from "react-icons/fa6";
import { RiLoginBoxLine } from "react-icons/ri";

const listData = [
  {
    icon: <FaHome size={28}/>,
    title: 'Home'
  },
  {
    icon: <IoNewspaperOutline size={28}/>,
    title: 'Blog'
  },
  {
    icon: <TbMap2 size={28}/>,
    title: 'Map'
  },
  {
    icon: <FaHandshakeSimple size={28}/>,
    title: 'Contact'
  },
  {
    icon: <RiLoginBoxLine size={28}/>,
    title: 'Login'
  },
]
const LeftSidebar = () => {
  return (
       <div className=' bg-white/50 w-[200px] rounded-lg '>
<div className='flex justify-center my-5'>
  <IoRainyOutline size={90} />
</div>
 <div className='ml-5 mt-7'>{listData.map((item, i)=>(
  <ItemBar key={`${item.title}-${i}`} icon={item.icon} title={item.title}/>
 ))}
  </div>
<div className='mt-39'>
 @All copyright 2025
</div>
       </div>
  )
}

export default LeftSidebar