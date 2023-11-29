

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

// table test for room_list

// table userlist
import React, { useState } from 'react';
import { DeleteButton } from '../components/button/button';
import "./test.css"

const AlertDialog = ({ open, onClose, onConfirm }) => (
    <div>
      {open && (
        <div className="custom-dialog-overlay">
          <div className="custom-dialog">
            <h2 className="dialog-title">{"Confirmation de suppression"}</h2>
            <p className="dialog-content">
              {`Voulez-vous vraiment supprimer l'utilisateur ${open} ?`}
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
  );


export function UserListTable() {
  const [users, setUsers] = useState([
    {
      email: "john.doe@example.com",
      nom: "Doe",
      prenom: "John",
      telephone: "123-456-7890",
      entreprise: "ABC Company",
      departement: "IT",
    },
    {
      email: "jane.smith@example.com",
      nom: "Smith",
      prenom: "Jane",
      telephone: "987-654-3210",
      entreprise: "XYZ Corporation",
      departement: "Marketing",
    },
    // Ajoutez d'autres utilisateurs selon vos besoins
    {
      email: "user3@example.com",
      nom: "Doe",
      prenom: "Jane",
      telephone: "555-555-5555",
      entreprise: "123 Corp",
      departement: "Finance",
    },
    {
      email: "user4@example.com",
      nom: "Johnson",
      prenom: "Robert",
      telephone: "111-222-3333",
      entreprise: "Tech Solutions",
      departement: "Engineering",
    },
    {
      email: "user5@example.com",
      nom: "Brown",
      prenom: "Anna",
      telephone: "777-888-9999",
      entreprise: "Global Innovations",
      departement: "Research",
    },
    {
      email: "user6@example.com",
      nom: "White",
      prenom: "Michael",
      telephone: "444-333-2222",
      entreprise: "Data Systems",
      departement: "Operations",
    },
    {
      email: "user7@example.com",
      nom: "Green",
      prenom: "Emily",
      telephone: "666-777-8888",
      entreprise: "Creative Designs",
      departement: "Design",
    },
    {
      email: "user8@example.com",
      nom: "Black",
      prenom: "Matthew",
      telephone: "999-888-7777",
      entreprise: "Innovative Tech",
      departement: "Development",
    },
    {
      email: "user9@example.com",
      nom: "Anderson",
      prenom: "Olivia",
      telephone: "123-987-6543",
      entreprise: "Future Enterprises",
      departement: "Sales",
    },
    {
      email: "user10@example.com",
      nom: "Davis",
      prenom: "William",
      telephone: "555-444-3333",
      entreprise: "Digital Solutions",
      departement: "Customer Support",
    },
  ]);
  const [userToDelete, setUserToDelete] = useState(null);

  // Fonction pour gérer la confirmation de suppression
  const confirmDelete = (nom) => {
    setUserToDelete(nom);
  };

  // Fonction pour annuler la suppression
  const cancelDelete = () => {
    setUserToDelete(null);
  };

  // Fonction pour supprimer réellement un utilisateur après confirmation
  const deleteUser = () => {
    // Mettez en œuvre la logique de suppression ici
    // Par exemple, utilisez setUsers pour mettre à jour le tableau d'utilisateurs sans l'utilisateur avec le nom spécifié
    const updatedUsers = users.filter(user => user.nom !== userToDelete);
    setUsers(updatedUsers);
    setUserToDelete(null); // Réinitialisez userToDelete après la suppression
  };

  return (
    <div className="user-list-table">
      <form action="" className="user-list-table-form">
        <input type="text" placeholder="Rechercher..."></input>
        <button><img src="" alt="Loupe" /></button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Téléphone</th>
            <th>Entreprise</th>
            <th>Département</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(item =>
            <tr key={item.nom}>
              <td>{item.email}</td>
              <td>{item.nom}</td>
              <td>{item.prenom}</td>
              <td>{item.telephone}</td>
              <td>{item.entreprise}</td>
              <td>{item.departement}</td>
              <td>
                <div>
                  <DeleteButton onConfirm={() => confirmDelete(item.nom)} />
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal de confirmation de suppression */}
      <AlertDialog
        open={userToDelete}
        onClose={cancelDelete}
        onConfirm={deleteUser}
      />
    </div>
  );
}