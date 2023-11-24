import { Header } from "../../components/header/header"
import SinUpImg from '../../assets/images/singUp.png';
import './singUp.css'
export function SingUp() {
    return(
        <div className="pg-singup">
            <header>
                <Header header={false} />
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

function SingUpForm(){
    return(
        <div className="form-singup">
            <div className="form-singup-div-1">
                <form className="form-singup-div-2">
                    <span className="form-singup-span">Se connecter</span>
                    <div className="form-singup-div-4">
                        <input type="text" placeholder="Email" className="form-singup-input" />
                        <input type="password" placeholder="Mot de passe" className="form-singup-input" />
                        <div className="form-singup-input-span" >Mot de passe oublié ?</div>
                        <button className="form-singup-btn">Se connecter</button>

                    </div>
                </form>
                <div className="form-singup-div-3">
                    Vous n'avez pas de compte ?<b className="form-singup-div-3-b">Créer un compte</b>
                </div>
            </div>
        </div>
    )
}