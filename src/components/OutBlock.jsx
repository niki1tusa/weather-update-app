import { useSelector } from "react-redux";
import Icon from "./Icon";

const OutBlock = () => {
  const data = useSelector((store) => store.weather.data);
  const arr = data.temperature;

  return (
    <div className="flex justify-start gap-x-5 mt-10">
      {arr?.map((item) => (
        <div
          key={item.id}
          className="shadow-xl rounded-lg text-center px-5 py-2 bg-white/50"
        >
          <Icon iconType={item.iconType} />
          <p className="p-5 pt-0 text-xl">{item.temp}&deg;C</p>
          <hr className="border-purple-950" />
          <p className="p-5 text-base">{item.time}</p>
        </div>
      ))}
    </div>
  );
};

export default OutBlock;
