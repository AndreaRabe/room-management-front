import { Header } from "../../components/header/header"
import SinUpImg from '../../assets/images/singUp.png';
import './singUp.css'
import { useState } from "react";
export function SingUp() {
    return(
        <div className="pg-singup">
            <header>
                <Header header={"none"} />
            </header>
            <div className="pg-singup-body">
                <div className="pg-singup-txt-img">
                    <span>Heureux de vous revoir !</span>
                    <img src={SinUpImg} alt="Conference table" />
                </div>
                <SingUpForm />
            </div>
        </div>
    )
}

function SingUpForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            username: email,
            password: password,
            grant_type: '',
            scope: '',
          }),
        });
  
        if (response.ok) {
          const data = await response.json();
          const accessToken = data.access_token;
  
        // Store the token where needed (localStorage, global state, etc.)
        localStorage.setItem('access_token', accessToken);
  
        // Redirect the user to the desired page or state after successful login
        // window.location.href = '/dashboard';
        console.log('Successfully logged in! Token:', accessToken);
      } else {
        const errorData = await response.json();
        console.error('Login failed:', errorData.detail);
      }
    } catch (error) {
      console.error('Error during the request:', error);
    }
  };
  
    return (
      <div className="form-singup">
        <div className="form-singup-div-1">
          <form className="form-singup-div-2">
            <span className="form-singup-span">Se connecter</span>
            <div className="form-singup-div-4">
              <input
                type="text"
                placeholder="Email"
                className="form-singup-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Mot de passe"
                className="form-singup-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="form-singup-input-span">Mot de passe oublié ?</div>
              <button className="form-singup-btn" onClick={handleLogin}>
                Se connecter
              </button>
            </div>
          </form>
          <div className="form-singup-div-3">
            Vous n'avez pas de compte ?<b className="form-singup-div-3-b">Créer un compte</b>
          </div>
        </div>
      </div>
    );
  }