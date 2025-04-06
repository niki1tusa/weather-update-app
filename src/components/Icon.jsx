import { WiCloudy, WiDaySunny, WiCloud, WiDayRain, WiThunderstorm } from "react-icons/wi";
import { IconType } from "../utilities/IconType";

const Icon = ({iconType}) => {
const className = 'w-full my-5 text-7xl'
   switch(iconType){
    case  IconType.HEAVY_CLOUD: return <WiCloudy  className={className}/>;
    case  IconType.MODERATE_CLOUD : return <WiCloud className={className}/>;
    case  IconType.LIGHT_CLOUD: return <WiDaySunny className={className}/>;
    case  IconType.HEAVY_RAIN: return <WiThunderstorm className={className}/>;
    case  IconType.MODERATE_RAIN: return <WiDayRain className={className}/>;
    case  IconType.LIGHT_RAIN: return <WiRain className={className}/>;
    default: break;
};
  return (
    <div></div>
  )
}

export default Icon