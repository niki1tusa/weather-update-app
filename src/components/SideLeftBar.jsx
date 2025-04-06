import {FaHome} from "react-icons/fa";

const SideBar = () => {
    
  return (
    <div className='h-3/4 bg-white/50 w-[200px] rounded-lg'>
<nav>
<div className="flex items-baseline"><FaHome/> <p className="pl-2">Home</p></div>
{/* {ITEMS.map(item=>div)} */}
</nav>
    </div>
  )
}

export default SideBar