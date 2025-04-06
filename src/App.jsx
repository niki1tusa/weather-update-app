
import './App.css'
import ChartBlock from './components/ChartBlock'
import InputBlock from './components/InputBlock'
import LoadingStatus from './components/LoadingStatus'
import OutBlock from './components/OutBlock'
import SideLeftBar from './components/SideLeftBar'
import SideRIghtBar from './components/SideRIghtBar'


function App() {


  return (
    <div className='flex gap-10'>
    <SideLeftBar/>
    <div>
      <InputBlock/>
      <ChartBlock/>
      <LoadingStatus/>
      <OutBlock/>
    </div>
<SideRIghtBar/>
    </div>
  )
}

export default App
