import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { DeleteButton, EditButton, ViewButton } from "../../components/button/button";
import LoupeImg from "../../assets/images/loupe.png";
// import { ReservationListTable } from "../../utils/test";
import './reservation_list.css';

const reservations = [
    {
      heure_debut: "10:00",
      heure_fin: "12:00",
      date_reservation: "2023-12-03",
      nombre_participant: 20,
      lieu_salle: "Salle C",
      specification: "Vous pouvez continuer à ajouter des éléments à cette liste pour représenter différentes réservations dans votre application. Chaque objet dans le tableau représente une réservation avec ses détails tels que l'heure de début, l'heure de fin, la date de la réservation, le nombre de participants, le lieu de la salle et des spécifications supplémentaires.",
    },
    {
      heure_debut: "15:00",
      heure_fin: "17:00",
      date_reservation: "2023-12-05",
      nombre_participant: 8,
      lieu_salle: "Salle D",
      specification: "Configuration en U pour la réunion d'équipe",
    },
    {
      heure_debut: "13:30",
      heure_fin: "15:30",
      date_reservation: "2023-12-08",
      nombre_participant: 12,
      lieu_salle: "Salle A",
      specification: "Présentation avec besoin de matériel audiovisuel",
    },
    {
      heure_debut: "09:30",
      heure_fin: "11:30",
      date_reservation: "2023-12-10",
      nombre_participant: 18,
      lieu_salle: "Salle B",
      specification: "Réunion de planification avec tableau blanc interactif",
    },
    {
      heure_debut: "14:00",
      heure_fin: "16:00",
      date_reservation: "2023-12-12",
      nombre_participant: 25,
      lieu_salle: "Salle C",
      specification: "Formation avec besoin de matériel de formation",
    },
    {
      heure_debut: "11:30",
      heure_fin: "13:30",
      date_reservation: "2023-12-15",
      nombre_participant: 10,
      lieu_salle: "Salle D",
      specification: "Réunion informelle avec service de rafraîchissements",
    },
    {
      heure_debut: "16:30",
      heure_fin: "18:30",
      date_reservation: "2023-12-18",
      nombre_participant: 15,
      lieu_salle: "Salle A",
      specification: "Séance de brainstorming avec tableau et marqueurs",
    },
    {
      heure_debut: "12:00",
      heure_fin: "14:00",
      date_reservation: "2023-12-20",
      nombre_participant: 22,
      lieu_salle: "Salle B",
      specification: "Réunion client avec présentation PowerPoint",
    },
    {
      heure_debut: "08:30",
      heure_fin: "10:30",
      date_reservation: "2023-12-23",
      nombre_participant: 30,
      lieu_salle: "Salle C",
      specification: "Conférence avec système audio pour les intervenants",
    },
    {
      heure_debut: "13:00",
      heure_fin: "15:00",
      date_reservation: "2023-12-25",
      nombre_participant: 12,
      lieu_salle: "Salle D",
      specification: "Réunion virtuelle avec besoin de connexion Internet stable",
    },
  ];
  

export function ReservationList(){
    return(
        <div className="reservation-list">
            <Header header={false} />
            <ReservationListTable />
            <Footer />
        </div>
    )
}

function ReservationListTable(){
    return(
            <div className="reservation-list-table">
                <form action="" className="reservation-list-table-form">
                    <input type="text" placeholder="Rechercher..."></input>
                    <button><img src={LoupeImg} alt="Loupe" /></button>
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>Lieu</th>
                            <th>Date</th>
                            <th>Heure Debut</th>
                            <th>Heure Fin</th>
                            <th>Participants</th>
                            <th>Specification</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservations.map((item, index)=>
                            <tr key={index} >
                                <td>{item.lieu_salle}</td>
                                <td>{item.date_reservation}</td>
                                <td>{item.heure_debut}</td>
                                <td>{item.heure_fin}</td>
                                <td>{item.nombre_participant}</td>
                                <td style={{ maxWidth: '200px', overflow: 'hidden'}}>{item.specification}</td>
                                <td>
                                  <div className="reservation-list-table-form-btn">
                                      <ViewButton />
                                      <EditButton />
                                      <DeleteButton />
                                  </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
            </table>
        </div>
    )
}