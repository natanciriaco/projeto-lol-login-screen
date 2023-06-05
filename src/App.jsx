import Login from './Components/Login/Login'
import './App.css'

function App() {
  return(
    <div className='main'>
        <Login />
        <div className='tela-login'>
          <div className='warning'>
            <span className='warning-span'>!</span>
          </div>
        </div>
    </div>
  )
}

export default App
