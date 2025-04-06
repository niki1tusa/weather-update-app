import { useSelector } from "react-redux"
import { AiOutlineLoading } from "react-icons/ai";

const LoadingStatus = () => {
  const isLoading = useSelector(store=>store.weather.isLoading)
  const error = useSelector(store=>store.weather.error)
  return (
    <>
      {isLoading && <AiOutlineLoading className="animate-spin w-full py-10 my-10 h-60"/>}
      {error && <div className="h-60 my-10 flex place-items-center">
         <p className="w-full text-lg text-white font-medium 
      bg-red-500/50 py-5  rounded-lg shadow-lg text-center">
        {error}
        </p>
      </div>
     }
      </>
  )
}

export default LoadingStatus