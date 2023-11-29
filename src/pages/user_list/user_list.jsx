import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { DeleteButton } from "../../components/button/button";
import LoupeImg from "../../assets/images/loupe.png" 
import { UserListTable } from "../../utils/test";
import './user_list.css'

const users = [
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
  ];

export function UserList(){
    return(
        <div className="user-list">
            <Header header={false} />
            <UserListTable />
            <Footer />
        </div>
    )
}

// function UserListTable(){
//     return(
//         <div className="user-list-table">
//             <form action="" className="user-list-table-form">
//               <input type="text" placeholder="Rechercher..."></input>
//               <button><img src={LoupeImg} alt="Loupe" /></button>
//             </form>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Email</th>
//                         <th>Nom</th>
//                         <th>Prénom</th>
//                         <th>Téléphone</th>
//                         <th>Entreprise</th>
//                         <th>Département</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>

//                     {users.map(item=>
//                         <tr>
//                             <td>{item.email}</td>
//                             <td>{item.nom}</td>
//                             <td>{item.prenom}</td>
//                             <td>{item.telephone}</td>
//                             <td>{item.entreprise}</td>
//                             <td>{item.departement}</td>
//                             <td>
//                               <div>
//                                 <DeleteButton />
//                               </div>
//                             </td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//         </div>
//     )
// }
