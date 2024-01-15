import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { SeeMore } from "../../components/button/button";
import './home.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, IMG_URL } from "../../constants/url";
import { Link } from 'react-router-dom';


export function Home(){
    return(
        <div className="home transparent">
            <Header header={true}/>

            <div className="home-body background-color">
                <div className="home-text transparent">
                    <span className="home-body-span-1 transparent">Découvrez des espaces de conférence spacieux pour accueillir votre événement !</span> <br />
                    <div className="home-body-span-2 transparent" >Trouvez la salle parfaite pour votre conférence parmi nos espaces spacieux et équipés des dernières technologies pour assurer le succès de votre événement. Que ce soit une réunion d'équipe dynamique ou une conférence d'envergure, nous avons l'endroit idéal qui répond à vos besoins. Commencez dès maintenant à planifier votre prochain événement mémorable.</div>
                </div>
                <ListRoomHome />
            </div>

            <Footer />
        </div>
    )
}

function ListRoomHome() {
    const [roomInformation, setRoomInformation] = useState([]);
  
    useEffect(() => {
      const token = window.localStorage.getItem('access_token');
  
      axios
        .get(`${BASE_URL}/room`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setRoomInformation(response.data);
        })
        .catch((error) => {
          console.error('Erreur lors de la récupération des réservations :', error.message);
        });
    }, []);
  
    return (
      <>
        {roomInformation.map((room, index) => (
      <div className="home-list-Room transparent">
          <div key={room.id} className="home-list-Room-item transparent">
            <div className="home-list-Room-description">
              <div className="home-list-Room-title">
                Salle {index < 9 ? `0${index + 1}` : index + 1}
              </div>
  
              <div className="home-list-Room-text">
                Explorez notre salle raffinée située à <b>{room.location}</b>,
                conçue pour accueillir confortablement jusqu'à <b>{room.capacity}</b> participants.
              </div>
  
              <div className="home-list-Room-btn">
                {/* Assuming SeeMore is a component to show more details */}
                <Link to={`/RoomList/${room.id}`} style={{ textDecoration: 'none', background: 'transparent' }}>
                  <SeeMore room={room} />
                </Link>
              </div>
            </div>
            <div className="home-list-Room-image transparent">
              {/* Assuming you have only one image per room, you may need to modify this part */}
              {room.images && (
                <img src={ IMG_URL + room.images[0].link} alt={`Conference Room ${index + 1}`} />
              )}
            </div>
          </div>
      </div>
        ))}
        </>
    );
}