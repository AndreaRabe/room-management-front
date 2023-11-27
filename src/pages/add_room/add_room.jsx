import { Header } from "../../components/header/header";
import ReserveImg from '../../assets/images/reserve_room.png';
import './add_room.css'

const responsable = ["Randro", "Rakoto"]

export function AddRoom(){
    return(
        <div className="add-room">
            <Header header={false} />
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

function AddRoomForm(){
    return(
        <div>
            <form className="form-add-room-info-div-2">

            <div className="form-add-room-info-div-4">

                <div className="form-add-room-info-input-group-1">
                    <div>
                        <label for="situe" className="form-add-room-info-input-group-label">Situé à : </label>
                        <input type="text" id="situe" name="situe" placeholder='Lieu' />
                    </div>

                    <div>
                        <label for="capacite" className="form-add-room-info-input-group-label">Capacité : </label>
                        <input type="text" id="capacite" name="capacite" placeholder='0' />
                    </div>

                </div>


                <div className="form-add-room-info-input-group-2">
                    <div>
                        <label for="responsable" className="form-add-room-info-input-group-label">Responsable : </label>
                        <select id="deparement" name="departement" className="form-add-singin-dropdown">
                                <option value="" disabled selected>Responsable salle</option>
                                {responsable.map((item, key)=> <option value={item} key={{key}}>{item}</option> )}
                        </select>
                    </div>
                </div>


                <div className="form-add-room-info-input-group-3">
                    <label for="commentaire" className="form-add-room-info-input-group-label">Déscription salle :</label>
                    <textarea id="commentaire" name="commentaire" rows="5" cols="50" placeholder="Ajoutez une déscription..."></textarea>
                </div>                        



                <div className="form-add-room-info-input-group-4">
                    <label className="form-add-room-info-input-group-label">Matériels : </label>
                    <div className="form-add-room-info-input-group-4-div">
                        <input type="text" placeholder="Nom materiel" className="form-add-room-info-input-group-4"/>
                        <input type="number" placeholder="Quantité" className="form-add-room-info-input-group-4"/>
                        <div>
                            <input type="checkbox" id="materialStatus" name="materialStatus" className="form-add-room-info-input-group-4"/>
                            <label for="materialStatus" className="form-add-room-info-input-group-label">Bon état</label>
                        </div>
                    </div>
                    <button>Ajouter d'autres</button>


                </div>

                <div className="form-add-room-info-input-group-5">

                </div>


                <button className="form-add-room-info-btn">Ajouter salle</button>
            </div>
            </form>
        </div>
    )
}