import logoOmnis from '../../assets/images/logo-omnis.png';
import './header.css';
import { SingInButton, SingUpButton } from '../button/button';

const navbarInformation = ["Acceuil", "Reserver Salle", "Liste Reservation"]

export function Header({header}){
    return(
        <header className='header'>
            <a href="https://omnis.mg/" className='header-a'>
                <img src={logoOmnis} alt="OMNIS Logo" className='header-img'/>
            </a>
            {navbarInformation.map((item, index) => <span className='header-item' key={index}>{item}</span>)}
            {header &&
            <>
                <SingInButton />
                <SingUpButton />
            </>}
        </header>
    )
}