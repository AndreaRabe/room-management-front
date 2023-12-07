import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Reservation } from "../../components/button/button";
import { salles_examples } from "../home/home";
import './room_list.css'
import { useNavigate } from "react-router";

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
    const navigate = useNavigate()
    return(
        <div className="list-room-information">

            {salles_examples.map((item,index)=>

            <div className="list-room-information-item">
                <div className="list-room-information-img">
                    <img src={item.image} alt="Conference room" />
                    <img src={item.image_1} alt="Conference room" />
                </div>
                <div className="list-room-information-table">
                    <table id="customers">
                        <tr>
                            <td>Description</td>
                            <td>{item.description}</td>
                        </tr>
                        <tr>
                            <td>Lieu</td>
                            <td>Cette salle se situe à {item.lieu}.</td>
                        </tr>
                        <tr>
                            <td>Capacité</td>
                            <td>Sa capacité est de {item.capacite} personnes.</td>
                        </tr>
                        <tr>
                            <td>Matériels</td>
                            <td>
                                <ul>
                                    {item.materiel.map(item=>
                                        <li>{item.materiel} (nombre : {item.quantité})</li>
                                        )}
                                </ul>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="list-room-information-btn" onClick={() => navigate('/AddRoom')}>
                    <Reservation />
                </div>
            </div>
            )}
        </div>
    )
}
