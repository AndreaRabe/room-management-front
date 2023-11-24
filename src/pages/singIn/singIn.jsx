import { Header } from "../../components/header/header"
import SinInImg from '../../assets/images/signIn.png';
import './singIn.css'


const departement = ["Informatique", "Ressources Humaines", "Patrimoine"]

export function SingIn(){
    return(
        <div className="pg-singin">
            <header>
                <Header header={false} />
            </header>
            <div className="pg-singin-body">
                <div className="pg-singin-txt-img">
                    <span>Nous sommes ravis de vous accueillir !</span>
                    <img src={SinInImg} alt="Conference table" />
                </div>
                <SingInForm />
            </div>
        </div>
    )
}

function SingInForm(){
    return(
        <div className="form-singin">
            <div className="form-singin-div-1">
                <span className="form-singin-span">Créer un compte</span>
                    <SingInFormClient />
                <div className="form-singin-div-3">
                    Vous avez déjà un compte ?<b className="form-singin-div-3-b">Se connecter</b>
                </div>
            </div>
        </div>
    )
}

function SingInFormClient(){
    return(
        <div>
                <form className="formClient-singin-div-2">

                    <div className="formClient-singin-div-4">
                        <input type="text" placeholder="Email" className="formClient-singin-input" />
                        <input type="text" placeholder="Nom" className="formClient-singin-input" />
                        <input type="text" placeholder="Prenom" className="formClient-singin-input" />
                        {/* <div className="content-tel"> */}
                            {/* <span className="formClient-singin-input-tel-prefix" >+261</span> */}
                            <input type="text" placeholder="Tel +261" className="formClient-singin-input" />
                        {/* </div> */}

                        <input type="password" placeholder="Mot de passe" className="formClient-singin-input" />
                        <input type="password" placeholder="Confirmer mot de passe" className="formClient-singin-input" />

                        <input type="text" placeholder="Entreprise" className="formClient-singin-input" />

                        <select id="deparement" name="departement" className="formClient-singin-dropdown">
                            <option value="" disabled selected>Votre departement</option>
                            {departement.map((item, key)=> <option value={item} key={{key}}>{item}</option> )}
                        </select>

                        <button className="formClient-singin-btn">Creer compte</button>
                    </div>
                </form>
        </div>
)
}

function SingInFormAdmin(){
    return(
        <div>
            <form className="form-singin-div-2">
                <span className="form-singin-span">Créer un compte</span>

                <div className="form-singin-div-4">
                    <input type="text" placeholder="Email" className="form-singin-input" />
                    <input type="password" placeholder="Mot de passe" className="form-singin-input" />
                    <div className="form-singin-input-span" >Mot de passe oublié ?</div>
                    <button className="form-singin-btn">Creer compte</button>

                </div>
            </form>
            <div className="form-singin-div-3">
                Vous avez déjà un compte ?<b className="form-singin-div-3-b">Se connecter</b>
            </div>
        </div>
    )
}