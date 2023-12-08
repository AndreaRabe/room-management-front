import { Header } from "../../components/header/header";
import ReserveImg from '../../assets/images/reserve_room.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import './add_room.css'
import axios from "axios";

const responsable = ["Randro", "Rakoto"]

export function AddRoom(){
    return(
        <div className="add-room">
            <header>
            <Header header={false} />
            </header>
            <div className="add-room-body">
                <div className="add-room-txt-img">
                    <span>Ajoutez et organisez les salles pour offrir une expérience sans pareille.</span>
                    <img src={ReserveImg} alt="Conference table" />
                </div>
                
                <div className="form-add-room">
                    <div className="form-add-room-div-1">
                        <span className="form-add-room-span">Ajouter Salle</span>
                            <AddRoomForm />
                    </div>
                </div>
            </div>
        </div>
    )
}


function AddRoomForm() {  
  const [equipmentCount, setEquipmentCount] = useState(1);

  const handleAddEquipment = () => {
      setEquipmentCount(equipmentCount + 1);
  };

  const handleRemoveEquipment = (index) => {
      setEquipmentCount((prevCount) => Math.max(prevCount - 1, 1));
  };

  const renderAdditionalEquipmentFields = () => {
      const additionalFields = [];

      for (let i = 2; i <= equipmentCount; i++) {
          additionalFields.push(
              <div key={i} className="form-add-room-info-input-group-4-div">
                  <input type="text" placeholder={`Nom matériel ${i}`} className="form-add-room-info-input-group-4" />
                  <input type="number" placeholder="Quantité" className="form-add-room-info-input-group-4" />

                  <input type="checkbox" id={`materialStatus${i}`} name={`materialStatus${i}`} className="form-add-room-info-input-group-4" />
                  <label htmlFor={`materialStatus${i}`} className="form-add-room-info-input-group-label">Bon état</label>

                  <button type="button" className='form-add-room-info-input-group-4-button-delete' onClick={() => handleRemoveEquipment(i)}>
                    <span> <FontAwesomeIcon icon={faTrash} /> </span>
                  </button>
              </div>
          );
      }

      return additionalFields;
  };

  // formdata addRoom
    const[roomData, setRoomData] = useState({
        location: '',
        capacity: 0,
        description: '',
        images: [],
        user_email: '',
    })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRoomData({
      ...roomData,
      [name]: value,
    });
  };


  const handleImageUpload = (imageFile) => {
    // Mettez à jour l'état des images dans le formulaire
    setRoomData({
      ...roomData,
      images: [...roomData.images, imageFile],
    });
  };

  // Request get responsable
  const [responsable, setResponsable] = useState([])
  
  useEffect(() => {
    // Charger les départements depuis le back-end ici
    
    const token = window.localStorage.getItem("access_token");  // Remplacez 'votre-token' par votre token réel

    axios.get('/user/admin/unasigned', {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
      .then((response) => {
        setResponsable(response.data);
      })
      .catch((error) => {
        console.error('Error fetching departments:', error.message);
      });
  }, []); 

  const handleResponsableChange = (event) => {
    const selectedDepartmentId = parseInt(event.target.value);
    setRoomData({
      ...roomData,
      id_department: selectedDepartmentId,
    });
  };





  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = window.localStorage.getItem("access_token");

    try {
      const response = await axios.post('/room/new', roomData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        window.location.href = '/RoomList';
        console.log('User created successfully!');
      } else {
        console.error('Failed to create user:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

    return (
        <div>
            <form className="form-add-room-info-div-2" onSubmit={handleSubmit} >
                <div className="form-add-room-info-div-4">
                    <div className="form-add-room-info-input-group-1">
                        <div>
                            <label htmlFor="situe" className="form-add-room-info-input-group-label">Situé à : </label>
                            <input
                            type="text"
                            id="situe"
                            name="location"
                            placeholder='Lieu'
                            value={roomData.location}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="capacite" className="form-add-room-info-input-group-label">Capacité : </label>
                            <input 
                            type="number" 
                            id="capacite" 
                            name="capacity" 
                            placeholder='0'
                            value={roomData.capacity}
                            onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="form-add-room-info-input-group-2">
                        <div>
                            <label htmlFor="responsable" className="form-add-room-info-input-group-label">Responsable : </label>
                            <select 
                            id="responsable" 
                            name="departement" 
                            className="form-add-singin-dropdown"
                            onChange={handleResponsableChange}
                            >
                                <option value="" disabled selected>Responsable salle</option>
                                { responsable.map((resp, index) => 
                                <option value={index + 1} key={index} >
                                    {resp.first_name}
                                </option>) }
                            </select>
                        </div>
                    </div>
                    <div className="form-add-room-info-input-group-3">
                        <label htmlFor="description" className="form-add-room-info-input-group-label">Description salle :</label>
                        <textarea 
                        id="description" 
                        name="description" 
                        rows="5" 
                        cols="50" 
                        placeholder="Ajoutez une description..."
                        value={roomData.description}
                        onChange={handleInputChange}
                        ></textarea>
                    </div>
                        <label className="form-add-room-info-input-group-label">Images : </label>
                    <div className="form-add-room-info-input-group-5">
                        <ImageUploader onImageUpload={handleImageUpload} />
                        <ImageUploader onImageUpload={handleImageUpload} />
                    </div>
                    <div className="form-add-room-info-input-group-4">
                        <label className="form-add-room-info-input-group-label">Matériels : </label>
                        <div className="form-add-room-info-input-group-4-div">
                            <input type="text" placeholder="Nom matériel" className="form-add-room-info-input-group-4" />
                            <input type="number" placeholder="Quantité" className="form-add-room-info-input-group-4" />
                          
                            <input type="checkbox" id="materialStatus" name="materialStatus" className="form-add-room-info-input-group-4" />
                            <label htmlFor="materialStatus" className="form-add-room-info-input-group-label">Bon état</label>
                        
                        </div>
                        {renderAdditionalEquipmentFields()}
                        <button type="button" className='form-add-room-info-input-group-4-button-more' onClick={handleAddEquipment}>Ajouter d'autres</button>
                    </div>

                    <button className="form-add-room-info-btn">Ajouter salle</button>
                </div>
            </form>
        </div>
    );
}

function ImageUploader({ onImageUpload }) {
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleImageChange = (event) => {
      const file = event.target.files[0];
  
      if (file) {
        const reader = new FileReader();
  
        reader.onloadend = () => {
          setSelectedImage(reader.result);
          // Appeler la fonction de rappel avec les données de l'image
          onImageUpload(file);
        };
  
        reader.readAsDataURL(file);
      }
    };
  
    return (
      <div className="form-add-room-info-input-group-5-div">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        {selectedImage && (
          <div>
            <img
              src={selectedImage}
              className="preview-image"
              alt="Selected"
              style={{ width: '180px', height: '100px' }}
            />
          </div>
        )}
      </div>
    );
  }
  



// function AddRoomForm(){
//     return(
//         <div>
//             <form className="form-add-room-info-div-2">

//             <div className="form-add-room-info-div-4">

//                 <div className="form-add-room-info-input-group-1">
//                     <div>
//                         <label for="situe" className="form-add-room-info-input-group-label">Situé à : </label>
//                         <input type="text" id="situe" name="situe" placeholder='Lieu' />
//                     </div>

//                     <div>
//                         <label for="capacite" className="form-add-room-info-input-group-label">Capacité : </label>
//                         <input type="number" id="capacite" name="capacite" placeholder='0' />
//                     </div>

//                 </div>


//                 <div className="form-add-room-info-input-group-2">
//                     <div>
//                         <label for="responsable" className="form-add-room-info-input-group-label">Responsable : </label>
//                         <select id="deparement" name="departement" className="form-add-singin-dropdown">
//                                 <option value="" disabled selected>Responsable salle</option>
//                                 {responsable.map((item, key)=> <option value={item} key={{key}}>{item}</option> )}
//                         </select>
//                     </div>
//                 </div>


//                 <div className="form-add-room-info-input-group-3">
//                     <label for="commentaire" className="form-add-room-info-input-group-label">Déscription salle :</label>
//                     <textarea id="commentaire" name="commentaire" rows="5" cols="50" placeholder="Ajoutez une déscription..."></textarea>
//                 </div>                        



//                 <div className="form-add-room-info-input-group-4">
//                     <label className="form-add-room-info-input-group-label">Matériels : </label>
//                     <div className="form-add-room-info-input-group-4-div">
//                         <input type="text" placeholder="Nom materiel" className="form-add-room-info-input-group-4"/>
//                         <input type="number" placeholder="Quantité" className="form-add-room-info-input-group-4"/>
//                         <div>
//                             <input type="checkbox" id="materialStatus" name="materialStatus" className="form-add-room-info-input-group-4"/>
//                             <label for="materialStatus" className="form-add-room-info-input-group-label">Bon état</label>
//                         </div>
//                     </div>
//                     <button>Ajouter d'autres</button>


//                 </div>

//                 <div className="form-add-room-info-input-group-5">

//                 </div>


//                 <button className="form-add-room-info-btn">Ajouter salle</button>
//             </div>
//             </form>
//         </div>
//     )
// }