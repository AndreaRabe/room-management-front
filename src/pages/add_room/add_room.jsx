import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/url';
import { Header } from '../../components/header/header';
import ReserveImg from '../../assets/images/reserve_room.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './add_room.css';

export function AddRoom() {
  return (
    <div className="add-room">
      <header>
        <Header header={false} />
      </header>
      <div className="add-room-body">
        <div className="add-room-txt-img">
          <span>Ajoutez et organisez les salles pour offrir une expérience sans pareil.</span>
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
  );
}

function AddRoomForm() {
  const [roomData, setRoomData] = useState({
    location: '',
    capacity: 0,
    description: '',
    images: [],
    materials: [],
    responsable_id: '',
  });

  const updateMaterial = (index, field, value) => {
    const updatedMaterials = [...roomData.materials];

    if (!updatedMaterials[index]) {
      updatedMaterials[index] = {};
    }

    if (field === 'state') {
      updatedMaterials[index][field] = value === undefined ? false : value;
    } else {
      updatedMaterials[index][field] = value;
    }


    setRoomData({
      ...roomData,
      materials: updatedMaterials,
    });
  };

  const [equipmentCount, setEquipmentCount] = useState(1);

  const handleAddEquipment = () => {
    setEquipmentCount((prevCount) => prevCount + 1);
    setRoomData((prevData) => ({
      ...prevData,
      materials: [...prevData.materials, {}], // Ajoute un nouveau matériau vide
    }));
  };

  const handleRemoveEquipment = (index) => {
    setEquipmentCount((prevCount) => Math.max(prevCount - 1, 1));

    setRoomData((prevData) => {
      const updatedMaterials = [...prevData.materials];
      updatedMaterials.splice(index, 1);
      return { ...prevData, materials: updatedMaterials };
    });
  };

  const renderAdditionalEquipmentFields = () => {
    return roomData.materials.map((material, index) => (
      <div key={index} className="form-add-room-info-input-group-4-div">
        <input
          type="text"
          placeholder={`Nom matériel ${index + 1}`}
          className="form-add-room-info-input-group-4"
          onChange={(e) => updateMaterial(index, 'name', e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantité"
          className="form-add-room-info-input-group-4"
          onChange={(e) => updateMaterial(index, 'quantity', parseInt(e.target.value, 10))}
        />
        <input
          type="checkbox"
          id={`materialStatus${index}`}
          name={`materialStatus${index}`}
          className="form-add-room-info-input-group-4"
          onChange={(e) => updateMaterial(index, 'state', e.target.checked)}
        />
        <label htmlFor={`materialStatus${index}`} className="form-add-room-info-input-group-label">Bon état</label>

        <button
          type="button"
          className='form-add-room-info-input-group-4-button-delete'
          onClick={() => handleRemoveEquipment(index)}
        >
          <span> <FontAwesomeIcon icon={faTrash} /> </span>
        </button>
      </div>
    ));
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRoomData({
      ...roomData,
      [name]: value,
    });
  };

  const handleImageUpload = (imageFiles) => {
    setRoomData((prevData) => ({
      ...prevData,
      images: [...prevData.images, ...imageFiles],
    }));
  };

  const [responsable, setResponsable] = useState([]);

  useEffect(() => {
    const token = window.localStorage.getItem('access_token');

    axios.get(`${BASE_URL}/users/no_room`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setResponsable(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des départements :', error.message);
      });
  }, []);

  const handleResponsableChange = (event) => {
    const selectedDepartmentId = event.target.value;
    setRoomData({
      ...roomData,
      responsable_id: selectedDepartmentId,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = window.localStorage.getItem('access_token');
    console.log(roomData)
    const formData = new FormData();

    formData.append("responsable_id", '268f5578-b9c0-42d9-aa0e-52515836d0dd');
    formData.append("capacity", roomData.capacity);
    formData.append("location", roomData.location);
    formData.append("description", roomData.description);

    roomData.materials.forEach((material, index) => {
      formData.append(`material_name`, material.name);
      formData.append(`material_quantity`, material.quantity);
      formData.append(`material_state`, material.state);
    });

    roomData.images.forEach((image, index) => {
      formData.append('images', image);
    });
    
    try {
      const response = await axios.post(`${BASE_URL}/room`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        // window.location.href = '/RoomList';
        console.log('Salle créée avec succès !');
      } else {
        console.error('Échec de la création de la salle :', response.statusText);
      }
    } catch (error) {
      console.error('Erreur :', error.message);
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
                placeholder="Lieu"
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
                placeholder="0"
                value={roomData.capacity}
                onChange={(e) => setRoomData({ ...roomData, capacity: parseInt(e.target.value) })}
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
                value={roomData.responsable_id}
              >
                <option value="" disabled>Responsable salle</option>
                {responsable.map((resp) => (
                  <option key={resp.id} value={resp.id}>
                    {resp.first_name}
                  </option>
                ))}
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
            {renderAdditionalEquipmentFields()}
            <button type="button" className="form-add-room-info-input-group-4-button-more" onClick={handleAddEquipment}>Ajouter d'autres</button>
          </div>

          <button className="form-add-room-info-btn" type="submit">Ajouter salle</button>
        </div>
      </form>
    </div>
  );
}

function ImageUploader({ onImageUpload }) {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const newImages = Array.from(files).map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));

      setSelectedImages((prevImages) => [...prevImages, ...newImages]);
      onImageUpload(newImages.map((image) => image.file));
    }
  };

  return (
    <div className="form-add-room-info-input-group-5-div">
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
      />
      {selectedImages.map((image, index) => (
        <div key={index}>
          <img
            src={image.preview}
            className="preview-image"
            alt={`Selected ${index + 1}`}
            style={{ width: '180px', height: '100px' }}
          />
        </div>
      ))}
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