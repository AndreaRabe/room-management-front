
//// ALL DONE ///
// table userlist 

// import React, { useEffect, useState } from 'react';
// import { DeleteButton } from '../components/button/button';
// import "./test.css"

// function AlertDialog({ open, onClose, onConfirm }){
//   useEffect(() => {
//     // Ajoute la classe 'no-scroll' au body lorsque le AlertDialog est ouvert
//     if (open) {
//       document.body.classList.add('no-scroll');
//     } else {
//       document.body.classList.remove('no-scroll');
//     }
//     // Nettoie la classe lorsque le composant est démonté
//     return () => {
//       document.body.classList.remove('no-scroll');
//     };
//   }, [open]);
//   return (
//           <div>
//             {open && (
//               <div className="custom-dialog-overlay">
//                 <div className="custom-dialog">
//                   <h2 className="dialog-title">{"Confirmation de suppression"}</h2>
//                   <p className="dialog-content">
//                     {`Voulez-vous vraiment supprimer l'utilisateur ${open} ?`}
//                   </p>
//                   <div className="dialog-actions">
//                     <button className="dialog-button" onClick={onClose}>
//                       Annuler
//                     </button>
//                     <button className="dialog-button" onClick={onConfirm} autoFocus>
//                       Oui
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         );


// }

// export function UserListTable() {
//   const [users, setUsers] = useState([
//     {
//       email: "jane.smith@example.com",
//       nom: "Smith",
//       prenom: "Jane",
//       telephone: "987-654-3210",
//       entreprise: "XYZ Corporation",
//       departement: "Marketing",
//     },
//     // Ajoutez d'autres utilisateurs selon vos besoins
//     {
//       email: "user3@example.com",
//       nom: "Doe",
//       prenom: "Jane",
//       telephone: "555-555-5555",
//       entreprise: "123 Corp",
//       departement: "Finance",
//     },
//     {
//       email: "user4@example.com",
//       nom: "Johnson",
//       prenom: "Robert",
//       telephone: "111-222-3333",
//       entreprise: "Tech Solutions",
//       departement: "Engineering",
//     },
//     {
//       email: "user5@example.com",
//       nom: "Brown",
//       prenom: "Anna",
//       telephone: "777-888-9999",
//       entreprise: "Global Innovations",
//       departement: "Research",
//     },
//     {
//       email: "user6@example.com",
//       nom: "White",
//       prenom: "Michael",
//       telephone: "444-333-2222",
//       entreprise: "Data Systems",
//       departement: "Operations",
//     },
//     {
//       email: "user7@example.com",
//       nom: "Green",
//       prenom: "Emily",
//       telephone: "666-777-8888",
//       entreprise: "Creative Designs",
//       departement: "Design",
//     },
//     {
//       email: "user8@example.com",
//       nom: "Black",
//       prenom: "Matthew",
//       telephone: "999-888-7777",
//       entreprise: "Innovative Tech",
//       departement: "Development",
//     },
//     {
//       email: "user9@example.com",
//       nom: "Anderson",
//       prenom: "Olivia",
//       telephone: "123-987-6543",
//       entreprise: "Future Enterprises",
//       departement: "Sales",
//     },
//     {
//       email: "user10@example.com",
//       nom: "Davis",
//       prenom: "William",
//       telephone: "555-444-3333",
//       entreprise: "Digital Solutions",
//       departement: "Customer Support",
//     },
//   ]);

//   const [userToDelete, setUserToDelete] = useState(null);
// // Trier le tableau 
// const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

// const handleSort = (key) => {
//   let direction = 'ascending';
//   if (sortConfig.key === key && sortConfig.direction === 'ascending') {
//     direction = 'descending';
//   }
//   setSortConfig({ key, direction });
// };

// const sortedUsers = [...users].sort((a, b) => {
//   if (sortConfig.key && a[sortConfig.key] && b[sortConfig.key]) {
//     if (a[sortConfig.key] < b[sortConfig.key]) {
//       return sortConfig.direction === 'ascending' ? -1 : 1;
//     }
//     if (a[sortConfig.key] > b[sortConfig.key]) {
//       return sortConfig.direction === 'ascending' ? 1 : -1;
//     }
//   }
//   return 0;
// });

// // filter tableau 
// const [searchTerm, setSearchTerm] = useState('');
// const filteredUsers = sortedUsers.filter((user) =>
//   Object.values(user).some(
//     (value) =>
//       value &&
//       value.toString().toLowerCase().includes(searchTerm.toLowerCase())
//   )
// );

// const handleSearch = (event) => {
//   setSearchTerm(event.target.value);
// };



//   // Fonction pour gérer la confirmation de suppression
//   const confirmDelete = (email) => {
//     setUserToDelete(email);
//   };
//   // Fonction pour annuler la suppression
//   const cancelDelete = () => {
//     setUserToDelete(null);
//   };

//   // Fonction pour supprimer réellement un utilisateur après confirmation
//   const deleteUser = () => {
//     // Mettez en œuvre la logique de suppression ici
//     // Par exemple, utilisez setUsers pour mettre à jour le tableau d'utilisateurs sans l'utilisateur avec le nom spécifié
//     const updatedUsers = users.filter(user => user.email !== userToDelete);
//     setUsers(updatedUsers);
//     setUserToDelete(null); // Réinitialisez userToDelete après la suppression
//   };

//   return (
// <div className="user-list-table">
//       <form action="" className="user-list-table-form">
//         <input 
//         type="text" 
//         placeholder="Rechercher..." 
//         value={searchTerm} 
//         onChange={handleSearch}></input>
//         {/* <button><img src="" alt="Loupe" /></button> */}
//       </form>

//       <table>
//         <thead>
//           <tr>
//             <th onClick={() => handleSort('email')}>Email</th>
//             <th onClick={() => handleSort('nom')}>Nom</th>
//             <th onClick={() => handleSort('prenom')}>Prénom</th>
//             <th onClick={() => handleSort('telephone')}>Téléphone</th>
//             <th onClick={() => handleSort('entreprise')}>Entreprise</th>
//             <th onClick={() => handleSort('departement')}>Département</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredUsers.length > 0 ? ( // Vérifie si le tableau des utilisateurs n'est pas vide
//             filteredUsers.map(item =>
//               <tr key={item.nom}>
//                 <td>{item.email}</td>
//                 <td>{item.nom}</td>
//                 <td>{item.prenom}</td>
//                 <td>{item.telephone}</td>
//                 <td>{item.entreprise}</td>
//                 <td>{item.departement}</td>
//                 <td>
//                   <div>
//                     <DeleteButton onConfirm={() => confirmDelete(item.email)} />
//                   </div>
//                 </td>
//               </tr>
//             )
//           ) : (
//             <tr>
//               <td colSpan="7" style={{ fontFamily: "Outfit-Bold, Helvetica", fontSize: "20px", textAlign: "center" }}>Tableau vide</td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       {/* Modal de confirmation de suppression */}
//       <AlertDialog
//         open={userToDelete}
//         onClose={cancelDelete}
//         onConfirm={deleteUser}
//       />
//     </div>
//   );
// }


////////////////////////////////////////////////////////


// Reservation list
// import { DeleteButton, EditButton, ViewButton } from "../components/button/button";
// import React, { useEffect, useState } from 'react';
// import "./test.css";

// function AlertDialog({ open, onClose, onConfirm }) {
//   useEffect(() => {
//     if (open) {
//       document.body.classList.add('no-scroll');
//     } else {
//       document.body.classList.remove('no-scroll');
//     }
//     return () => {
//       document.body.classList.remove('no-scroll');
//     };
//   }, [open]);

//   return (
//     <div>
//       {open && (
//         <div className="custom-dialog-overlay">
//           <div className="custom-dialog">
//             <h2 className="dialog-title">{"Confirmation de suppression"}</h2>
//             <p className="dialog-content">
//               {`Voulez-vous vraiment supprimer cette reservation ?`}
//             </p>
//             <div className="dialog-actions">
//               <button className="dialog-button" onClick={onClose}>
//                 Annuler
//               </button>
//               <button className="dialog-button" onClick={onConfirm} autoFocus>
//                 Oui
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// export function ReservationListTable() {
//   const [reservations, setReservations] = useState([
//     {
//       heure_debut: "10:00",
//       heure_fin: "12:00",
//       date_reservation: "2023-12-03",
//       nombre_participant: 20,
//       lieu_salle: "Salle C",
//       specification: "Vous pouvez continuer à ajouter des éléments à cette liste pour représenter différentes réservations dans votre application. Chaque objet dans le tableau représente une réservation avec ses détails tels que l'heure de début, l'heure de fin, la date de la réservation, le nombre de participants, le lieu de la salle et des spécifications supplémentaires.",
//     },
//     {
//       heure_debut: "15:00",
//       heure_fin: "17:00",
//       date_reservation: "2023-12-05",
//       nombre_participant: 8,
//       lieu_salle: "Salle D",
//       specification: "Configuration en U pour la réunion d'équipe",
//     },
//     {
//       heure_debut: "13:30",
//       heure_fin: "15:30",
//       date_reservation: "2023-12-08",
//       nombre_participant: 12,
//       lieu_salle: "Salle A",
//       specification: "Présentation avec besoin de matériel audiovisuel",
//     },
//     {
//       heure_debut: "09:30",
//       heure_fin: "11:30",
//       date_reservation: "2023-12-10",
//       nombre_participant: 18,
//       lieu_salle: "Salle B",
//       specification: "Réunion de planification avec tableau blanc interactif",
//     },
//     {
//       heure_debut: "14:00",
//       heure_fin: "16:00",
//       date_reservation: "2023-12-12",
//       nombre_participant: 25,
//       lieu_salle: "Salle C",
//       specification: "Formation avec besoin de matériel de formation",
//     },
//     {
//       heure_debut: "11:30",
//       heure_fin: "13:30",
//       date_reservation: "2023-12-15",
//       nombre_participant: 10,
//       lieu_salle: "Salle D",
//       specification: "Réunion informelle avec service de rafraîchissements",
//     },
//     {
//       heure_debut: "16:30",
//       heure_fin: "18:30",
//       date_reservation: "2023-12-18",
//       nombre_participant: 15,
//       lieu_salle: "Salle A",
//       specification: "Séance de brainstorming avec tableau et marqueurs",
//     },
//     {
//       heure_debut: "12:00",
//       heure_fin: "14:00",
//       date_reservation: "2023-12-20",
//       nombre_participant: 22,
//       lieu_salle: "Salle B",
//       specification: "Réunion client avec présentation PowerPoint",
//     },
//     {
//       heure_debut: "08:30",
//       heure_fin: "10:30",
//       date_reservation: "2023-12-23",
//       nombre_participant: 30,
//       lieu_salle: "Salle C",
//       specification: "Conférence avec système audio pour les intervenants",
//     },
//     {
//       heure_debut: "13:00",
//       heure_fin: "15:00",
//       date_reservation: "2023-12-25",
//       nombre_participant: 12,
//       lieu_salle: "Salle D",
//       specification: "Réunion virtuelle avec besoin de connexion Internet stable",
//     },
//   ]);

//   const [reservationToDelete, setReservationToDelete] = useState(null);
//   const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

//   const handleSort = (key) => {
//     let direction = 'ascending';
//     if (sortConfig.key === key && sortConfig.direction === 'ascending') {
//       direction = 'descending';
//     }
//     setSortConfig({ key, direction });
//   };

//   const [searchTerm, setSearchTerm] = useState('');
//   const filteredReservations = reservations.filter((reservation) =>
//     Object.values(reservation).some(
//       (value) =>
//         value &&
//         value.toString().toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   );

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const confirmDeleteReservation = (lieu_salle) => {
//     setReservationToDelete(lieu_salle);
//   };

//   const cancelDeleteReservation = () => {
//     setReservationToDelete(null);
//   };

//   const deleteReservation = () => {
//     const updatedReservations = reservations.filter(
//       (reservation) => reservation.lieu_salle !== reservationToDelete
//     );
//     setReservations(updatedReservations);
//     setReservationToDelete(null);
//   };

//   const sortedReservations = [...filteredReservations].sort((a, b) => {
//     if (sortConfig.key && a[sortConfig.key] && b[sortConfig.key]) {
//       if (a[sortConfig.key] < b[sortConfig.key]) {
//         return sortConfig.direction === 'ascending' ? -1 : 1;
//       }
//       if (a[sortConfig.key] > b[sortConfig.key]) {
//         return sortConfig.direction === 'ascending' ? 1 : -1;
//       }
//     }
//     return 0;
//   });

//   return (
//     <div className="reservation-list-table">
//       <form action="" className="reservation-list-table-form">
//         <input
//           type="text"
//           placeholder="Rechercher..."
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//       </form>
//       <table>
//         <thead>
//           <tr>
//             <th onClick={() => handleSort('lieu_salle')}>Lieu</th>
//             <th onClick={() => handleSort('date_reservation')}>Date</th>
//             <th onClick={() => handleSort('heure_debut')}>Heure Debut</th>
//             <th onClick={() => handleSort('heure_fin')}>Heure Fin</th>
//             <th onClick={() => handleSort('nombre_participant')}>Participants</th>
//             <th onClick={() => handleSort('specification')}>Specification</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//         {sortedReservations.length > 0 ? (
//             sortedReservations.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.lieu_salle}</td>
//                 <td>{item.date_reservation}</td>
//                 <td>{item.heure_debut}</td>
//                 <td>{item.heure_fin}</td>
//                 <td>{item.nombre_participant}</td>
//                 <td style={{ maxWidth: '200px', overflow: 'hidden' }}>
//                   {item.specification}
//                 </td>
//                 <td>
//                   <div className="reservation-list-table-form-btn">
//                     <ViewButton />
//                     <EditButton />
//                     <DeleteButton
//                       onConfirm={() =>
//                         confirmDeleteReservation(item.lieu_salle)
//                       }
//                     />
//                   </div>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="7" style={{ fontFamily: "Outfit-Bold, Helvetica", fontSize: "20px", textAlign: "center" }}>
//                 Tableau vide
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       <AlertDialog
//         open={reservationToDelete}
//         onClose={cancelDeleteReservation}
//         onConfirm={deleteReservation}
//       />
//     </div>
//   );
// }

///////////////////////////////////////////////////////////////





//// ALL TEST ///


///  from add 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faTrash } from '@fortawesome/free-solid-svg-icons';
// import React, { useState } from 'react';

// function AddRoomForm() {
//   const [equipmentCount, setEquipmentCount] = useState(1);

//   const handleAddEquipment = () => {
//       setEquipmentCount(equipmentCount + 1);
//   };

//   const handleRemoveEquipment = (index) => {
//       setEquipmentCount((prevCount) => Math.max(prevCount - 1, 1));
//   };

//   const renderAdditionalEquipmentFields = () => {
//       const additionalFields = [];

//       for (let i = 2; i <= equipmentCount; i++) {
//           additionalFields.push(
//               <div key={i} className="form-add-room-info-input-group-4-div">
//                   <input type="text" placeholder={`Nom matériel ${i}`} className="form-add-room-info-input-group-4" />
//                   <input type="number" placeholder="Quantité" className="form-add-room-info-input-group-4" />

//                   <input type="checkbox" id={`materialStatus${i}`} name={`materialStatus${i}`} className="form-add-room-info-input-group-4" />
//                   <label htmlFor={`materialStatus${i}`} className="form-add-room-info-input-group-label">Bon état</label>

//                   <button type="button" className='form-add-room-info-input-group-4-button-delete' onClick={() => handleRemoveEquipment(i)}>
//                     <span> <FontAwesomeIcon icon={faTrash} /> </span>
//                   </button>
//               </div>
//           );
//       }

//       return additionalFields;
//   };


//     return (
//         <div>
//             <form className="form-add-room-info-div-2">
//                 <div className="form-add-room-info-div-4">
//                     <div className="form-add-room-info-input-group-1">
//                         <div>
//                             <label htmlFor="situe" className="form-add-room-info-input-group-label">Situé à : </label>
//                             <input type="text" id="situe" name="situe" placeholder='Lieu' />
//                         </div>
//                         <div>
//                             <label htmlFor="capacite" className="form-add-room-info-input-group-label">Capacité : </label>
//                             <input type="number" id="capacite" name="capacite" placeholder='0' />
//                         </div>
//                     </div>
//                     <div className="form-add-room-info-input-group-2">
//                         <div>
//                             <label htmlFor="responsable" className="form-add-room-info-input-group-label">Responsable : </label>
//                             <select id="deparement" name="departement" className="form-add-singin-dropdown">
//                                 <option value="" disabled selected>Responsable salle</option>
//                                 {/* Ajoutez ici votre liste d'options */}
//                             </select>
//                         </div>
//                     </div>
//                     <div className="form-add-room-info-input-group-3">
//                         <label htmlFor="commentaire" className="form-add-room-info-input-group-label">Description salle :</label>
//                         <textarea id="commentaire" name="commentaire" rows="5" cols="50" placeholder="Ajoutez une description..."></textarea>
//                     </div>
//                     <div className="form-add-room-info-input-group-4">
//                         <label className="form-add-room-info-input-group-label">Matériels : </label>
//                         <div className="form-add-room-info-input-group-4-div">
//                             <input type="text" placeholder="Nom matériel" className="form-add-room-info-input-group-4" />
//                             <input type="number" placeholder="Quantité" className="form-add-room-info-input-group-4" />
                          
//                             <input type="checkbox" id="materialStatus" name="materialStatus" className="form-add-room-info-input-group-4" />
//                             <label htmlFor="materialStatus" className="form-add-room-info-input-group-label">Bon état</label>
                        
//                         </div>
//                         {renderAdditionalEquipmentFields()}
//                         <button type="button" className='form-add-room-info-input-group-4-button-more' onClick={handleAddEquipment}>Ajouter d'autres</button>
//                     </div>
//                     <div className="form-add-room-info-input-group-5">
//                         {/* Ajoutez ici d'autres champs si nécessaire */}
//                     </div>
//                     <button className="form-add-room-info-btn">Ajouter salle</button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default AddRoomForm;

















////////////////////////////////





// client form 
// export function SingInFormClient(){
//     const [formData, setFormData] = useState({
//         email: '',
//         name: '',
//         first_name: '',
//         tel: '',
//         is_admin:false,
//         password: '',
//         company: '',
//         id_department: 1,
//       });
    
//       const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setFormData({
//           ...formData,
//           [name]: value,
//         });
//       };
    
//       function handleSubmit(event) {
//         event.preventDefault();
//         console.log(JSON.stringify(formData))
    
//         try {
//           const response = fetch('/user/new', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(formData),
//           });
//           if (response) {
//             console.log('User created successfully!');
//           } else {
//             console.error('Failed to create user:', response.statusText);
//           }
//         } catch (error) {
//           console.error('Error:', error);
//         }
//       };
//     return(
//         <div>
//                 <form className="formClient-singin-div-2" onSubmit={handleSubmit}>

//                     <div className="formClient-singin-div-4">

//                         <div className="formClient-singin-input-group">
//                         <input
//                             type="text"
//                             placeholder="Email"
//                             className="formClient-singin-input"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleInputChange}
//                         />
//                         <input 
//                             type="text"
//                             placeholder="Nom"
//                             className="formClient-singin-input"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleInputChange}
//                         />
//                         </div>


//                         <div className="formClient-singin-input-group">
//                         <input 
//                              type="text"
//                              placeholder="Prénom"
//                              className="formClient-singin-input"
//                              name="first_name"
//                              value={formData.first_name}
//                              onChange={handleInputChange}
//                         />
//                             <input
//                                 type="text"
//                                 placeholder="Tel +261"
//                                 className="formClient-singin-input"
//                                 name="tel"
//                                 value={formData.tel}
//                                 onChange={handleInputChange}
//                             />
//                         </div>

//                         <div className="formClient-singin-input-group">
//                             <input
//                             type="password"
//                             placeholder="Mot de passe"
//                             className="formClient-singin-input"
//                             name="password"
//                             value={formData.password}
//                             onChange={handleInputChange}
//                             />
//                         <input
//                             type="password"
//                             placeholder="Confirmer mot de passe"
//                             className="formClient-singin-input"
//                         />
//                         </div>


//                         <div className="formClient-singin-input-group">
//                         <input
//                             type="text"
//                             placeholder="Entreprise"
//                             className="formClient-singin-input"
//                             name="company"
//                             value={formData.company}
//                             onChange={handleInputChange}
//                         />

//                         <select 
//                             id="department"
//                             name="department"
//                             className="formClient-singin-dropdown"
//                             onChange={handleInputChange}
//                             value={formData.department}
//                         >
//                             <option value="" disabled selected>Votre departement</option>
//                             {/* {departement.map((item, key)=> <option value={item} key={{key}}>{item}</option> )} */}
//                         </select>
//                         </div>                        

//                         <button type="submit" className="formClient-singin-btn">Creer compte</button>
//                     </div>
//                 </form>
//         </div>
// )
// }

// admin form 
// export function SingInFormAdmin(){
//   const [formData, setFormData] = useState({
//     email: '',
//     name: '',
//     first_name: '',
//     IM: '',
//     function: '',
//     is_admin: true,
//     tel: '',
//     password: '',
//     id_department: 1,
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };


//  function handleSubmit(e) {
//     e.preventDefault();
//     console.log(JSON.stringify(formData))
//     try {
//       const response = fetch('/user/new', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
  
//       if (response.ok) {
//         console.log('User created successfully!');
//       } else {
//         console.error('Failed to create user:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
//   return(
//         <div>
//           <form className="formAdmin-singin-div-2" onSubmit={handleSubmit}>

//             <div className="formAdmin-singin-div-4">

//               <div className="formAdmin-singin-input-group">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="formAdmin-singin-input"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//                 <input
//                   type="text"
//                   placeholder="Nom"
//                   className="formAdmin-singin-input"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="formAdmin-singin-input-group">
//                 <input
//                   type="text"
//                   placeholder="Prénom"
//                   className="formAdmin-singin-input"
//                   name="first_name"
//                   value={formData.first_name}
//                   onChange={handleChange}
//                 />
//                 <input
//                   type="text"
//                   placeholder="IM"
//                   className="formAdmin-singin-input"
//                   name="IM"
//                   value={formData.IM}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="formAdmin-singin-input-group">
//                 <input
//                   type="text"
//                   placeholder="Fonction"
//                   className="formAdmin-singin-input"
//                   name="function"
//                   value={formData.function}
//                   onChange={handleChange}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Tel +261"
//                   className="formAdmin-singin-input"
//                   name="tel"
//                   value={formData.tel}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="formAdmin-singin-input-group">
//                 <input
//                   type="password"
//                   placeholder="Mot de passe"
//                   className="formAdmin-singin-input"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//                 <input
//                   type="password"
//                   placeholder="Confirmer mot de passe"
//                   className="formAdmin-singin-input"
//                 />
//               </div>

//               <div className="formAdmin-singin-input-group">
//                 <select
//                   id="deparement"
//                   name="id_department"
//                   className="formAdmin-singin-dropdown"
//                   // onChange={handleChange}
//                   // value={formData.id_department}
//                 >
//                   <option value="" disabled selected>Votre département</option>
//                   {/* {departement.map((item, key) => (
//                     <option value={item} key={key}>
//                       {item}
//                     </option>
//                   ))} */}
//                 </select>
//               </div>

//               <button type="submit" className="formClient-singin-btn">
//                 Créer compte
//               </button>
//             </div>
//           </form>
//       </div>
//   )
// }

// signUp form 

// export function SingUpForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: new URLSearchParams({
//           username: email,
//           password: password,
//           grant_type: '',
//           scope: '',
//         }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         const accessToken = data.access_token;

//       // Store the token where needed (localStorage, global state, etc.)
//       localStorage.setItem('access_token', accessToken);

//       // Redirect the user to the desired page or state after successful login
//       // window.location.href = '/dashboard';
//       console.log('Successfully logged in! Token:', accessToken);
//     } else {
//       const errorData = await response.json();
//       console.error('Login failed:', errorData.detail);
//     }
//   } catch (error) {
//     console.error('Error during the request:', error);
//   }
// };

//   return (
//     <div className="form-singup">
//       <div className="form-singup-div-1">
//         <form className="form-singup-div-2">
//           <span className="form-singup-span">Se connecter</span>
//           <div className="form-singup-div-4">
//             <input
//               type="text"
//               placeholder="Email"
//               className="form-singup-input"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Mot de passe"
//               className="form-singup-input"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <div className="form-singup-input-span">Mot de passe oublié ?</div>
//             <button className="form-singup-btn" onClick={handleLogin}>
//               Se connecter
//             </button>
//           </div>
//         </form>
//         <div className="form-singup-div-3">
//           Vous n'avez pas de compte ?<b className="form-singup-div-3-b">Créer un compte</b>
//         </div>
//       </div>
//     </div>
//   );
// }