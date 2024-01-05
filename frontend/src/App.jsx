import NavBar from './components/NavBar'
import Destinos from './pages/Destinos';
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Global.css'

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Destinos/>
      <Footer/>
    </div>
  )
}

export default App
