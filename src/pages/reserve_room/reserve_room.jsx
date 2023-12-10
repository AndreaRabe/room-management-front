import { Header } from '../../components/header/header'
import ReserveImg from '../../assets/images/reserve_room.png';
import './reserve_room.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/url';
import { useParams } from 'react-router';

export function ReserveRoom(){
    return(
        <div className='reserve-room'>
            <header>
            <Header header={false} />
            </header>
            <div className="reserve-room-body">
                <div className="reserve-room-txt-img">
                    <span>Préparez-vous à donner vie à vos événements !</span>
                    <img src={ReserveImg} alt="Conference table" />
                </div>
                
                <div className="form-reserve-room">
                    <div className="form-reserve-room-div-1">
                        <span className="form-reserve-room-span">Réserver Salle</span>
                            <ReserveInformation />
                    </div>
                </div>
            </div>
        </div>
    )
}

function ReserveInformation(){

  const currentDate = new Date();
  const formattedCurrentDate = currentDate.toISOString().split('T')[0];


    const index_room = window.location.pathname.split('/').pop();
    const [roomFind, setRoomFind] = useState(null); // Utilisez null comme valeur initiale
  
    useEffect(() => {
      const token = window.localStorage.getItem('access_token');
  
      axios.get(`${BASE_URL}/room`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {

        // Utilisez Array.find pour filtrer la liste des rooms
        const foundRoom = response.data.find(room => room.id === parseInt(index_room, 10));

        // Mettez à jour l'état avec la room trouvée ou null si non trouvée
        setRoomFind(foundRoom);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des réservations :', error.message);
      });
    }, [index_room]); 
        const [formData, setFormData] = useState({
          date: '',
          start_time: new Date().toISOString(),
          end_time: new Date().toISOString(),
          participant_number: 0,
          specifications: '',
          viewed: false,
          room_id: parseInt(index_room),
        });
    if (roomFind){
        const handleChange = (e) => {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });
        };

        const participant_num = (e) => {
          setFormData({
            ...formData,
            [e.target.name]: parseInt(e.target.value),
          });
        };



        
        const handleChangesss = (e) => {
          const { name, value } = e.target;
        
          // Mise à jour de l'état avec les nouvelles valeurs
          setFormData({
            ...formData,
            [name]: value,
          });
        
          // Vérification et ajustement des heures selon les contraintes
          if (name === 'start_time' || name === 'end_time') {
            const selectedHour = parseInt(value.split(':')[0], 10);
        
            // Vérification des contraintes pour l'heure de début
            if (selectedHour < 8 || selectedHour >= 17) {
              // Ajuster l'heure de début si elle ne respecte pas les contraintes
              setFormData({
                ...formData,
                start_time: '08:00', // ou une autre heure par défaut
              });
            }
        
            // Vérification des contraintes pour l'heure de fin
            if (name === 'end_time') {
              const startTime = new Date(`2000-01-01 ${formData.start_time}`);
              const endTime = new Date(`2000-01-01 ${value}`);
              if (endTime.getHours() <= startTime.getHours() + 1 || endTime.getHours() >= 17) {
                // Ajuster l'heure de fin si elle ne respecte pas les contraintes
                setFormData({
                  ...formData,
                  end_time: ('0' + (startTime.getHours() + 1)).slice(-2) + ':00',
                });
              }
            }
          }
        };




        const handleSubmit = async (e) => {
          e.preventDefault();
          const token = window.localStorage.getItem('access_token');
          try {
            // Make API call using axios
            const response = await axios.post(`${BASE_URL}/reservation`, formData,{
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                  },
            });
            if (response.status === 201){
                // Handle success
                console.log('Reservation successful', response.data);
                // condition redirect if user or if admin
                window.location.href = '/ReservationList';
            }
             else {
            console.error('Échec de la reservation :', response.statusText);
          }
            // Optionally, you can redirect or show a success message to the user
          } catch (error) {
            // Handle error
            console.error('Error reserving room', error.message);
      
            // Optionally, you can show an error message to the user
          }
        };
      
    return(
        <div>
            <form className="form-reserve-room-info-div-2" onSubmit={handleSubmit}>

            <div className="form-reserve-room-info-div-4">

                    <div className="form-reserve-room-info-input-group-1">
                    <div>
                        <label htmlFor="situe" className="form-reserve-room-info-input-group-label">Situé à : </label>
                        <input
                        type="text"
                        id="situe"
                        name="situe"
                        placeholder={roomFind.location}
                        disabled
                        />
                    </div>

                    <div>
                        <label htmlFor="capacite" className="form-reserve-room-info-input-group-label">Capacité : </label>
                        <input
                        type="text"
                        id="capacite"
                        name="capacite"
                        placeholder={roomFind.capacity}
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
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={formattedCurrentDate}
                        />
                    </div>

                    <div>
                        <label htmlFor="participants" className="form-reserve-room-info-input-group-label">Participants : </label>
                        <input
                        type="number"
                        id="participants"
                        name="participant_number"
                        placeholder='0'
                        value={formData.participant_number}
                        onChange={participant_num}
                        min={0} 
                        max={roomFind.capacity}  
                        />
                    </div>
                    </div>




                    <div className="form-reserve-room-info-input-group-3">
                        <div>
                        <label htmlFor="startTime" className="form-reserve-room-info-input-group-label">Heure début : </label>
                        <input
                          type="time"
                          id="startTime"
                          name="start_time"
                          value={formData.start_time}
                          onChange={handleChangesss}
                          min="08:00"
                          max="17:00"
                        />
                      </div>

                      <div>
                        <label htmlFor="endTime" className="form-reserve-room-info-input-group-label">
                          Heure fin :
                        </label>
                        <input
                          type="time"
                          id="endTime"
                          name="end_time"
                          value={formData.end_time}
                          onChange={handleChangesss}
                          min="08:00"
                          max="17:00"
                        />
                        </div>
                    </div>

                    <div className="form-reserve-room-info-input-group-4">
                        <label htmlFor="commentaire" className="form-reserve-room-info-input-group-label">Commentaire / Autres spécifications :</label>
                        <textarea
                        id="commentaire"
                        name="specifications"
                        rows="5"
                        cols="50"
                        placeholder="Ajoutez des détails supplémentaires..."
                        value={formData.specifications}
                        onChange={handleChange}
                        ></textarea>
                    </div>

                    <button type="submit" className="form-reserve-room-info-btn">Reserver salle</button>
                    </div>
                </form>
                </div>
    );
    }

    else{
      return(
        console.log('')
      )
    }
}
