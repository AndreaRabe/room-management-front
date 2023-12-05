import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { DeleteButton, EditButton, ViewButton } from "../../components/button/button";
import LoupeImg from "../../assets/images/loupe.png";
import React, { useEffect, useState } from 'react';
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
  ]


export function ReservationList(){
    return(
        <div className="reservation-list">
            <Header header={false} />
            <ReservationListTable />
            <Footer />
        </div>
    )
}

// function ReservationListTable(){
//     return(
//             <div className="reservation-list-table">
//                 <form action="" className="reservation-list-table-form">
//                     <input type="text" placeholder="Rechercher..."></input>
//                     <button><img src={LoupeImg} alt="Loupe" /></button>
//                 </form>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Lieu</th>
//                             <th>Date</th>
//                             <th>Heure Debut</th>
//                             <th>Heure Fin</th>
//                             <th>Participants</th>
//                             <th>Specification</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {reservations.map((item, index)=>
//                             <tr key={index} >
//                                 <td>{item.lieu_salle}</td>
//                                 <td>{item.date_reservation}</td>
//                                 <td>{item.heure_debut}</td>
//                                 <td>{item.heure_fin}</td>
//                                 <td>{item.nombre_participant}</td>
//                                 <td style={{ maxWidth: '200px', overflow: 'hidden'}}>{item.specification}</td>
//                                 <td>
//                                   <div className="reservation-list-table-form-btn">
//                                       <ViewButton />
//                                       <EditButton />
//                                       <DeleteButton />
//                                   </div>
//                                 </td>
//                             </tr>
//                         )}
//                     </tbody>
//             </table>
//         </div>
//     )
// }

function ReservationListTable() {
  const handleViewReservation = (selectedReservation) => {
    const updatedReservations = reservations.map((reservation) =>
      reservation.lieu_salle === selectedReservation.lieu_salle &&
      reservation.specification === selectedReservation.specification
        ? { ...reservation, view: false } // Mettez 'false' ici pour rendre la réservation non vue
        : reservation
    );
    setReservations(updatedReservations);
  };



  const [reservationToEdit, setReservationToEdit] = useState(null);
  const handleEditReservation = (reservation) => {
    setReservationToEdit(reservation);
  };
  const [reservations, setReservations] = useState([
    {
      view:false,
      heure_debut: "10:00",
      heure_fin: "12:00",
      date_reservation: "2023-12-03",
      nombre_participant: 20,
      lieu_salle: "Salle C",
      specification: "Vous pouvez continuer à ajouter des éléments à cette liste pour représenter différentes réservations dans votre application. Chaque objet dans le tableau représente une réservation avec ses détails tels que l'heure de début, l'heure de fin, la date de la réservation, le nombre de participants, le lieu de la salle et des spécifications supplémentaires.",
    },
    {
      view:true,
      heure_debut: "15:00",
      heure_fin: "17:00",
      date_reservation: "2023-12-05",
      nombre_participant: 8,
      lieu_salle: "Salle D",
      specification: "Configuration en U pour la réunion d'équipe",
    },
    {
      view:true,
      heure_debut: "13:30",
      heure_fin: "15:30",
      date_reservation: "2023-12-08",
      nombre_participant: 12,
      lieu_salle: "Salle A",
      specification: "Présentation avec besoin de matériel audiovisuel",
    },
    {
      view:true,
      heure_debut: "09:30",
      heure_fin: "11:30",
      date_reservation: "2023-12-10",
      nombre_participant: 18,
      lieu_salle: "Salle B",
      specification: "Réunion de planification avec tableau blanc interactif",
    },
    {
      view:true,
      heure_debut: "14:00",
      heure_fin: "16:00",
      date_reservation: "2023-12-12",
      nombre_participant: 25,
      lieu_salle: "Salle C",
      specification: "Formation avec besoin de matériel de formation",
    },
    {
      view:true,
      heure_debut: "11:30",
      heure_fin: "13:30",
      date_reservation: "2023-12-15",
      nombre_participant: 10,
      lieu_salle: "Salle D",
      specification: "Réunion informelle avec service de rafraîchissements",
    },
    {
      view:true,
      heure_debut: "16:30",
      heure_fin: "18:30",
      date_reservation: "2023-12-18",
      nombre_participant: 15,
      lieu_salle: "Salle A",
      specification: "Séance de brainstorming avec tableau et marqueurs",
    },
    {
      view:true,
      heure_debut: "12:00",
      heure_fin: "14:00",
      date_reservation: "2023-12-20",
      nombre_participant: 22,
      lieu_salle: "Salle B",
      specification: "Réunion client avec présentation PowerPoint",
    },
    {
      view:true,
      heure_debut: "08:30",
      heure_fin: "10:30",
      date_reservation: "2023-12-23",
      nombre_participant: 30,
      lieu_salle: "Salle C",
      specification: "Conférence avec système audio pour les intervenants",
    },
    {
      view:true,
      heure_debut: "13:00",
      heure_fin: "15:00",
      date_reservation: "2023-12-25",
      nombre_participant: 12,
      lieu_salle: "Salle D",
      specification: "Réunion virtuelle avec besoin de connexion Internet stable",
    },
  ])

  const [reservationToDelete, setReservationToDelete] = useState(null)
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' })

  const handleSort = (key) => {
    let direction = 'ascending'
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending'
    }
    setSortConfig({ key, direction })
  }

  const [searchTerm, setSearchTerm] = useState('')
  const filteredReservations = reservations.filter((reservation) =>
    Object.values(reservation).some(
      (value) =>
        value &&
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  )

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const confirmDeleteReservation = (lieu_salle) => {
    setReservationToDelete(lieu_salle)
  }

  const cancelDeleteReservation = () => {
    setReservationToDelete(null)
  }

  const deleteReservation = () => {
    const updatedReservations = reservations.filter(
      (reservation) => reservation.lieu_salle !== reservationToDelete
    )
    setReservations(updatedReservations)
    setReservationToDelete(null)
  }

  const sortedReservations = [...filteredReservations].sort((a, b) => {
    if (sortConfig.key && a[sortConfig.key] && b[sortConfig.key]) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1
      }
    }
    return 0
  });

  // Tronquer texte
  function tronquerTexte(texte, limite) {
    if (texte.length <= limite) {
      return texte;
    } else {
      return texte.substring(0, limite) + '...';
    }
  }

  return (
          <div className="reservation-list-table">
            <form action="" className="reservation-list-table-form">
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={handleSearch}
              />
              <button><img src={LoupeImg} alt="Loupe" /></button>
            </form>
            <table>
              <thead>
                <tr>
                  <th onClick={() => handleSort('lieu_salle')}>Lieu</th>
                  <th onClick={() => handleSort('date_reservation')}>Date</th>
                  <th onClick={() => handleSort('heure_debut')}>Heure Debut</th>
                  <th onClick={() => handleSort('heure_fin')}>Heure Fin</th>
                  <th onClick={() => handleSort('nombre_participant')}>Participants</th>
                  <th onClick={() => handleSort('specification')}>Specification</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {sortedReservations.length > 0 ? (
                  sortedReservations.map((item, index) => (
                    <tr key={index} className={item.view ? "reservation-list-table-view" : "" }>
                      <td>{item.lieu_salle}</td>
                      <td>{item.date_reservation}</td>
                      <td>{item.heure_debut}</td>
                      <td>{item.heure_fin}</td>
                      <td>{item.nombre_participant}</td>
                      <td style={{ maxWidth: '200px', overflow: 'hidden' }}>
                        {tronquerTexte(item.specification, 160)}
                      </td>
                      <td>
                        <div className="reservation-list-table-form-btn">
                          <ViewButton onClick={() => handleViewReservation(item)} />
                          {/* Utilisation de la nouvelle fonction handleEditReservation */}
                          <EditButton onClick={() => handleEditReservation(item)} />
                          <DeleteButton
                            onConfirm={() => confirmDeleteReservation(item.lieu_salle)}
                          />
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" style={{ fontFamily: "Outfit-Bold, Helvetica", fontSize: "20px", textAlign: "center" }}>
                      Tableau vide
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

          {/* Utilisation de la boîte de dialogue ReserveInformation pour l'édition */}
          {reservationToEdit && (
            <ReserveInformation
              reservation={reservationToEdit}
              onSave={(editedReservation) => {
                // Logique pour sauvegarder la réservation éditée
                const updatedReservations = reservations.map((r) =>
                  r.lieu_salle === editedReservation.lieu_salle &&  r.specification === editedReservation.specification ? editedReservation : r
                );
                setReservations(updatedReservations);
                setReservationToEdit(null);
              }}
              onClose={() => setReservationToEdit(null)}
            />
          )}

          <AlertDialog
            open={reservationToDelete}
            onClose={cancelDeleteReservation}
            onConfirm={deleteReservation}
          />
        </div>
      )
}

function ReserveInformation({ reservation, onSave, onClose }) {
  useEffect(() => {
    if (reservation) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [reservation])

  const [editedReservation, setEditedReservation] = useState({ ...reservation });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedReservation({
      ...editedReservation,
      [name]: value,
    });
  };

  return (
    <div>
      <form className="custom-dialog-overlay-edit">

        <div className="custom-dialog-edit">

          <div className="form-reserve-room-info-input-group-1">
            <div>
              <label htmlFor="situe" className="form-reserve-room-info-input-group-label">Situé à : </label>
              <input
                type="text"
                id="situe"
                name="lieu_salle"
                value={editedReservation.lieu_salle}
                onChange={handleInputChange}
                disabled
              />
            </div>

            <div>
              <label htmlFor="capacite" className="form-reserve-room-info-input-group-label">Capacité : </label>
              <input
                type="text"
                id="capacite"
                name="nombre_participant"
                value={editedReservation.nombre_participant}
                onChange={handleInputChange}
                disabled
              />
            </div>
          </div>

          <div className="form-reserve-room-info-input-group-2">
            <div>
              <label htmlFor="date" className="form-reserve-room-info-input-group-label">Date : </label>
              <input
                type="date"
                id="date"
                name="date_reservation"
                value={editedReservation.date_reservation}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="participants" className="form-reserve-room-info-input-group-label">Participants : </label>
              <input
                type="number"
                id="participants"
                name="nombre_participant"
                value={editedReservation.nombre_participant}
                onChange={handleInputChange}
                placeholder='0'
              />
            </div>
          </div>

          <div className="form-reserve-room-info-input-group-3">
            <div>
              <label htmlFor="startTime" className="form-reserve-room-info-input-group-label">Heure début : </label>
              <input
                type="time"
                id="startTime"
                name="heure_debut"
                value={editedReservation.heure_debut}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="endTime" className="form-reserve-room-info-input-group-label">Heure fin : </label>
              <input
                type="time"
                id="endTime"
                name="heure_fin"
                value={editedReservation.heure_fin}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-reserve-room-info-input-group-4">
            <label htmlFor="commentaire" className="form-reserve-room-info-input-group-label">Commentaire / Autres spécifications :</label>
            <textarea
              id="commentaire"
              name="specification"
              rows="5"
              cols="50"
              value={editedReservation.specification}
              onChange={handleInputChange}
              placeholder="Ajoutez des détails supplémentaires..."
            />
          </div>

          <button className="form-reserve-room-edit" onClick={onClose}>
            Annuler
          </button>
          <button className="form-reserve-room-edit-save" onClick={() => onSave(editedReservation)}>
            Sauvegarder
          </button>
        </div>
      </form>
    </div>
  );
}

// Tous les boites de dialogue

function AlertDialog({ open, onClose, onConfirm }) {
  useEffect(() => {
            if (open) {
              document.body.classList.add('no-scroll')
            } else {
              document.body.classList.remove('no-scroll')
            }
            return () => {
              document.body.classList.remove('no-scroll')
            }
          }, [open])

  return (
            <div>
              {open && (
                <div className="custom-dialog-overlay">
                  <div className="custom-dialog">
                    <h2 className="dialog-title">Confirmation de suppression</h2>
                    <p className="dialog-content">
                      Voulez-vous vraiment supprimer cette reservation ?
                    </p>
                    <div className="dialog-actions">
                      <button className="dialog-button" onClick={onClose}>
                        Annuler
                      </button>
                      <button className="dialog-button" onClick={onConfirm} autoFocus>
                        Oui
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
      )
}

