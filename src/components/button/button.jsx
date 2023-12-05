import './button.css'
import logOut from "../../assets/images/interface-logout.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';
export function SingInButton(){
    return(
        <button className="btn-singIn" >
            <span className="btn-singIn-span">S'inscrire</span>
        </button>
    )
}

export function SingUpButton(){
    return(
        <button className="btn-singUp" >
            <span className="btn-singUp-span">Se connecter</span>
        </button>
    )
}

export function WebSiteButton(){
    return(
        <button className="btn-webSite" >
            <span className="btn-webSite-span">Site Web</span>
        </button>
    )
}

export function SendEmailButton(){
    return(
        <button className="btn-SendEmail" >
            <span className="btn-SendEmail-span">Envoyez</span>
        </button>
    )
}

export function AccountButton() {
    return(
        <button className="btn-account" >
            <span className="btn-account-span">Mon compte</span>
        </button>
    )
}

export function LogOut() {
    return(
        <div className='btn-logout'>
            <img src={logOut} alt="Logout Button"/>
        </div>

    )
}

export function SeeMore(){
    return(
        <button className="btn-seeMore" >
            <span className="btn-seeMore-span">Voir plus</span>
        </button>
    )
}

export function Reservation(){
    return(
        <button className="btn-reservation" >
            <span className="btn-reservation-span">Reserver</span>
        </button>
    )
}

export function DeleteButton({onConfirm}){
    return(
        <button className="btn-delete" onClick={onConfirm} >
            <span className="btn-delete-span"> <FontAwesomeIcon icon={faTrash} /> </span>
        </button>
    )
}

export function EditButton({ onClick }){
    return(
        <button className="btn-edit" onClick={onClick} >
            <span className="btn-edit-span">  <FontAwesomeIcon icon={faEdit} /></span>
        </button>
    )
}

export function ViewButton({ onClick }){
    return(
        <button className="btn-view" onClick={onClick} >
            <span className="btn-view-span">  <FontAwesomeIcon icon={faEye} /></span>
        </button>
    )
}

