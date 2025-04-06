import { useRef } from "react";
import { useDispatch } from "react-redux";
import { getWeather } from "../store/WeatherSlice";
import { BsFillGeoAltFill } from "react-icons/bs";
const InputBlock = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const clickHandler = () => {
    dispatch(getWeather(inputRef.current.value));
  };
  dispatch(getWeather("Moscow"));

  const keyHandler = (e) => {
    if(e.key === 'Enter'){
      clickHandler();
      inputRef.current.focus()
    }
  }
  return (
    <div
      onKeyDownCapture={keyHandler}
      className="flex justify-around gap-x-5 p-5 rounded-lg shadow-xl bg-white/50"
    >
      <div className="flex items-center justify-center text-xl"><BsFillGeoAltFill size={30}/>{inputRef?.current?.value}</div>
      <input
        type="text"
        ref={inputRef}
        className="capitalize outline-none text-xl w-3/4 bg-white/50 rounded-lg
px-5 py-2"
        placeholder="City name"
        defaultValue="Moscow"
        autoFocus
      />
      <button
        onClick={clickHandler}
        className="bg-white/50 rounded-lg px-5 py-2 text-xl"
      >
        Search
      </button>
    </div>
  );
};

export default InputBlock;
