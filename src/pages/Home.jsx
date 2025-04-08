import ChartBlock from '/src/components/ChartBlock'
import InputBlock from '/src/components/InputBlock'
import LoadingStatus from '/src/components/LoadingStatus'
import OutBlock from '/src/components/OutBlock'

const Home = () => {
  return (
    <div>
      <InputBlock/>
      <ChartBlock/>
      <LoadingStatus/>
      <OutBlock/>
    </div>
  )
}

export default Home