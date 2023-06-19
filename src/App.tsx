import './App.css'
import Navbar from './components/navbar/navbar'
import './App.css'
import Homepage from './pages/Homepage/Homepage'
import StarsField from './components/background/stars'


function App() {


  return (
    //fix font
    <div className='font-face-gm'>  


    <Navbar></Navbar>
    <Homepage />
    <StarsField></StarsField>
    </div>
  )
}

export default App
