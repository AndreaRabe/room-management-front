import { Header } from '../../components/header/header'
import ReserveImg from '../../assets/images/reserve_room.png';
import './reserve_room.css'

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
    return(
        <div>
            <form className="form-reserve-room-info-div-2">

                <div className="form-reserve-room-info-div-4">

                    <div className="form-reserve-room-info-input-group-1">
                        <div>
                            <label for="situe" className="form-reserve-room-info-input-group-label">Situé à : </label>
                            <input type="text" id="situe" name="situe" placeholder='Andraharo' disabled/>
                        </div>

                        <div>
                            <label for="capacite" className="form-reserve-room-info-input-group-label">Capacité : </label>
                            <input type="text" id="capacite" name="capacite" placeholder='20' disabled/>
                        </div>

                    </div>


                    <div className="form-reserve-room-info-input-group-2">
                        <div>
                            <label for="date" className="form-reserve-room-info-input-group-label">Date : </label>
                            <input type="date" id="date" name="date"/>
                        </div>

                        <div>
                            <label for="participants"className="form-reserve-room-info-input-group-label">Participants : </label>
                            <input type="number" id="participants" name="participants" placeholder='0'/>
                        </div>
                    </div>



                    <div className="form-reserve-room-info-input-group-3">
                        <div>
                            <label for="startTime" className="form-reserve-room-info-input-group-label">Heure début : </label>
                            <input type="time" id="startTime" name="startTime"/>
                        </div>

                        <div>
                            <label for="endTime" className="form-reserve-room-info-input-group-label">Heure fin : </label>
                            <input type="time" id="endTime" name="endTime"/>
                        </div>
                    </div>


                    <div className="form-reserve-room-info-input-group-4">
                        <label for="commentaire" className="form-reserve-room-info-input-group-label">Commentaire / Autres spécifications :</label>
                        <textarea id="commentaire" name="commentaire" rows="5" cols="50" placeholder="Ajoutez des détails supplémentaires..."></textarea>
                    </div>                        

                    <button className="form-reserve-room-info-btn">Reserver salle</button>
                </div>
            </form>
        </div>
    )
}