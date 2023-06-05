import './Login.css'
import FacebookLogo from '../../Imagens/facebooklogo.png'
import GoogleLogo from '../../Imagens/googlelogo.png'
import AppleLogo from '../../Imagens/applelogo.png'
import XboxLogo from '../../Imagens/xboxlogo.png'
import RiotGamesLogo from '../../Imagens/riotgameslogo.png'

import { useState } from 'react'

function Login() {
    const [usernameFocus, setUsernameFocus] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)
    const [usernameInput, setUsernameInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')


    const handleUsernameFocus = () => {
        setUsernameFocus(true)
    }

    const handlePasswordFocus = () => {
        setPasswordFocus(true)
    }

    const handleUsernameBlur = () => {
        setUsernameFocus(usernameInput === '' ? false : true)
    }

    const handlePasswordBlur = () => {
        setPasswordFocus(passwordInput === '' ? false : true)
    }


    const loginButtonClass = `login ${usernameInput === '' || passwordInput.length < 4 ? 'disabled' : ''}`
    const usernameClass = `inside-span ${usernameFocus ? 'span-active' : ''}`
    const passwordClass = `inside-span ${passwordFocus ? 'span-active' : ''}`

    return(
        <div className="container">
            <div className='riot-logo'>
                <img src={RiotGamesLogo} alt="Riot Games Logo" />
            </div>
            <h1>Sign In</h1>
            <div className='login-space'>
                <div className="info-input">
                    <label>
                        <input 
                        onFocus={handleUsernameFocus} 
                        onBlur={handleUsernameBlur}
                        onChange={(e) => setUsernameInput(e.target.value)} 
                        type="text" />
                        <span className={usernameClass}>USERNAME</span>
                    </label>
                </div>
                <div className='info-input'>
                    <input 
                    onFocus={handlePasswordFocus} 
                    onBlur={handlePasswordBlur}
                    onChange={(e) => setPasswordInput(e.target.value)} 
                    type="password" />
                    <span className={passwordClass}>PASSWORD</span>
                </div>
                <div className='login-with'>
                    <div className='bg-facebook login-button'>
                        <div className='facebook-icon login-button'><img src={FacebookLogo} alt="" /></div>
                    </div>
                    <div className='google-icon login-button'><img src={GoogleLogo} alt="" /></div>
                    <div className='apple-icon login-button'><img src={AppleLogo} alt="" /></div>
                    <div className='xbox-icon login-button'><img src={XboxLogo} alt="" /></div>
                </div>
                <div className='stay-signed'>
                    <label>
                        <input type="checkbox" />
                        <span>Stay signed in</span>
                    </label>
                </div>
            </div>
            <button className={loginButtonClass}> 
                <div className='svg'></div>
          </button>
          <div className='help'>
            <span>Cant sign in?</span>
            <span className='create-acc'>Create account</span>
            </div>
        </div>   
    )
}

export default Login