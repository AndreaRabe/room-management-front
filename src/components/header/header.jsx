import logoOmnis from '../../assets/images/logo-omnis.png';
import './header.css';
import { SingInButton, SingUpButton, AccountButton, LogOut } from '../button/button';
import { Link, useNavigate } from 'react-router-dom';
import { decodeToken } from '../../services/jwtDecode';

// const navbarInformation = ["Acceuil", "Reserver Salle", ""]

export function Header({header}){
    const navigate = useNavigate()
    const isLogged = localStorage.getItem('access_token')
    const userInformation = decodeToken()
    return(
        <header className='header'>
            <a href="https://omnis.mg/" className='header-a'>
                <img src={logoOmnis} alt="OMNIS Logo" className='header-img'/>
            </a>
            <span className='header-item' onClick={() => navigate('/')} >Accueil</span>
            <span className='header-item' onClick={() => navigate('/RoomList')} >Reserver salle</span>    

            {(isLogged && !userInformation.user_status ) &&
                <span className='header-item' onClick={() => navigate('/ReservationList')} >Liste des réservations</span>
            }

            {(isLogged && userInformation.user_status)&&
                <>
                    <span className='header-item' onClick={() => navigate('/AddRoom')} >Ajouter Salle</span>
                    <span className='header-item' onClick={() => navigate('/ReservationListAdmin')} >Liste des réservations</span>    
                    <span className='header-item' onClick={() => navigate('/UserList')} >Liste des utilisateurs</span>    
                </>
            }


            {(!isLogged && header !== "none")&&
            <>
                <Link to="/singIn"> <SingInButton /> </Link>
                <Link to="/singUp"> <SingUpButton /> </Link>
            </>}
            {(isLogged && header !== "none") &&
            <>
                <AccountButton />
                <LogOut />
            </>}

            {header === "none" &&
            <>
            </>}
        </header>
    )
}