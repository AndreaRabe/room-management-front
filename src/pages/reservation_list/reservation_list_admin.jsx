import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import {
  DeleteButton,
  EditButton,
  ViewButton,
} from "../../components/button/button";
import LoupeImg from "../../assets/images/loupe.png";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/url";
import axios from "axios";
import AdminListReservation from "./adminListReservation/adminList";
import ClientListReservation from "./clientListReservation/clientList";
import "./reservation_list.css";

export function ReservationListForAdmin() {
  return (
    <div className="reservation-list">
      <Header header={false} />
      <ReservationListTableAdmin />
      <Footer />
    </div>
  );
}

function ReservationListTableAdmin() {
  const [admin, setAdmin] = useState(false);
  function handleTabClick() {
    setAdmin(!admin);
  }

  return (
    <div>
      <div className="form-singin-div-1-checkbox-admin">
        <span
          style={{}}
          className={!admin ? "active" : ""}
          onClick={handleTabClick}
        >
          Client
        </span>
        <span
          style={{}}
          className={admin ? "active" : ""}
          onClick={handleTabClick}
        >
          Mes reservations
        </span>
      </div>
      {!admin ? <ClientListReservation /> : <AdminListReservation />}
    </div>
  );
}

function AlertDialog({ open, onClose, onConfirm }) {
  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [open]);

  return (
    <div>
      {open && (
        <div className="custom-dialog-overlay">
          <div className="custom-dialog">
            <h2 className="dialog-title">Confirmation de suppression</h2>
            <p className="dialog-content">
              Voulez-vous vraiment supprimer cette reservation ?
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
}