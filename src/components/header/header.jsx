import logoOmnis from '../../assets/images/logo-omnis.png';
import './header.css';
import { SingInButton, SingUpButton, AccountButton, LogOut } from '../button/button';
import { Link, useNavigate } from 'react-router-dom';
import { decodeToken } from '../../services/jwtDecode';
import { useEffect, useState } from 'react';
import UserInfoDialog from '../../pages/my_account/my_account';
import axios from 'axios';
import { BASE_URL } from '../../constants/url';


export function Header({header}){
    const navigate = useNavigate()
    const isLogged = localStorage.getItem('access_token')
    const userInformation = decodeToken()

    const [dialogOpen, setDialogOpen] = useState(false);

    const handleOpenDialog = () => {
      setDialogOpen(true);
    };
  
    const handleCloseDialog = () => {
      setDialogOpen(false);
    };


    // list of admin no room

    const [responsable, setResponsable] = useState([]);

    useEffect(() => {
      const token = window.localStorage.getItem('access_token');
  
      axios.get(`${BASE_URL}/users/no_room`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          setResponsable(response.data);
        })
        .catch((error) => {
          console.error('Erreur lors de la récupération des départements :', error.message);
        });
    }, []);
  
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
                    { (userInformation.id === responsable.map(e => e.id)) &&  // need to be verify if work          
                        <span className='header-item' onClick={() => navigate('/AddRoom')} >Ajouter Salle</span> 
                    }
                    <span className='header-item' onClick={() => navigate('/ReservationListAdmin')} >Liste des réservations</span>    
                    <span className='header-item' onClick={() => navigate('/UserList')} >Liste des utilisateurs</span>    
                </>
            }


            {(!isLogged && header !== "none")&&
            <>
                <Link to="/singUp"> <SingInButton /> </Link>
                <Link to="/singIn"> <SingUpButton /> </Link>
            </>}
            {(isLogged && header !== "none") &&
            <>
                <AccountButton onClick={handleOpenDialog} />

                <LogOut />
            </>}

            {dialogOpen && <UserInfoDialog onClose={handleCloseDialog} />}
            {header === "none" &&
            <>
            </>}
        </header>
    )
}