import React, { useState } from 'react';

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