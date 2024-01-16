import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Reservation } from "../../components/button/button";
import './room_list.css'
import { Link, useParams } from "react-router-dom";
import { DeleteButtonRoom, EditButtonRoom } from "../../components/button/button";
import { decodeToken } from "../../services/jwtDecode";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { BASE_URL, IMG_URL } from "../../constants/url";

export function RoomList(){
    return(
        <div className="room-list">
            <Header header={true}/>
            <ListRoomInformation />
            <Footer />
        </div>
    )
}

function ListRoomInformation(){
    
    const [roomInformation, setRoomInformation] = useState([]);
    const isLogged = window.localStorage.getItem("access_token")
  
    useEffect(() => {
      const token = window.localStorage.getItem('access_token');
  
      axios.get(`${BASE_URL}/room`, {
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


    useEffect(() => {
        // Scroll to the element with the corresponding room ID on component mount
        const roomIdFromUrl = window.location.pathname.split('/').pop();
        if (roomIdFromUrl) {
          const element = document.getElementById(roomIdFromUrl);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, [roomInformation]); // Add roomInformation as a dependency to trigger the effect when roomInformation changes
    

    return(
    <>
    {roomInformation.map((room,index)=>
        <div className="list-room-information"key={room.id} id={room.id}>


            <div className="list-room-information-item">
                <div className="list-room-information-img">
                    <img src={IMG_URL + room.images[0].link} alt="Conference room" />
                    <img src={IMG_URL + room.images[1].link} style={{ transform: 'scaleX(-1)' }} alt="Conference room" /> {/* modifie quand tu as deux images */}
                </div>
                <div className="list-room-information-table">
                <table id="customers">
                    <tbody>
                        <tr>
                            <td>Description</td>
                            <td>{room.description}</td>
                        </tr>
                        <tr>
                            <td>Lieu</td>
                            <td>Cette salle se situe à {room.location}.</td>
                        </tr>
                        <tr>
                            <td>Capacité</td>
                            <td>Sa capacité est de {room.capacity} personnes.</td>
                        </tr>
                        <tr>
                            <td>Matériels</td>
                            <td>
                                <ul>
                                    {room.materials.map((material,index)=>
                                        <li key={index} >{material.name} (nombre : {material.quantity})</li>
                                    )}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <div className="list-room-information-btn">
                    {/* { (isLogged && userInformation.user_status) &&
                        <>
                        <Link to=''style={{ textDecoration: 'none', background: 'transparent' }} >
                            <DeleteButtonRoom />
                        </Link>                    
                        <Link to=''style={{ textDecoration: 'none', background: 'transparent'  }} >
                            <EditButtonRoom />
                    </Link>
                   </>
                   } */}
                   { 
                   <Link to={`/ReserveRoom/${room.id}`} style={{ textDecoration: 'none', background: 'transparent' }} >
                        <Reservation />
                   </Link> 
                    }
                </div>
            </div>
        </div>
            )}
    </>
    )
}
