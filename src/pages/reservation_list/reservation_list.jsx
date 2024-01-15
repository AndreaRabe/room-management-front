import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { DeleteButton, EditButton, ViewButton } from "../../components/button/button";
import React from "react";
import { useState, useEffect } from "react";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { DataGrid, frFR } from "@mui/x-data-grid";
import { BASE_URL } from "../../constants/url";
import axios from "axios";
import './reservation_list.css';


export function ReservationList(){
    return(
        <div className="reservation-list">
            <Header header={false} />
            <ReservationListTable />
            <Footer />
        </div>
    )
}

function ReservationListTable() {
  const [reservations, setReservations] = useState([])
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem('access_token');

    axios.get(`${BASE_URL}/reservation/mine`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setReservations(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des reservations :', error.message);
      });
  }, []);

  const handleDeleteClick = (reservation) => {
    setSelectedReservation(reservation);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleConfirmDelete = () => {
    // Call the delete endpoint with the selected reservation's ID
    const token = window.localStorage.getItem('access_token');
    
    axios.delete(`${BASE_URL}/reservation/${selectedReservation.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        // Refresh the reservation list after deletion
        // You may want to handle this more efficiently
        window.location.reload();
      })
      .catch((error) => {
        console.error('Erreur lors de la suppression de la réservation :', error.message);
      })
      .finally(() => {
        setDialogOpen(false);
      });
  };

  const columns = [
    {
      field: "room",
      headerName: "Lieu",
      flex: 2,
      editable: false,
      description: "Lieu",
      renderCell: (params) => (
        <>
          {params.row.room.location}
        </>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
      description: "Date",
      editable: false,
    },
    {
      field: "start_time",
      headerName: "Heure Debut",
      type: "Date",
      flex: 1,
      editable: false,
    },
    {
      field: "end_time",
      headerName: "Heure Fin",
      description: "Heure Fin",
      flex: 1,
    },
    {
      field: "participant_number",
      headerName: "Participants",
      description: "Participants",
      flex: 1,
      editable: false,
    },
    {
      field: "specifications",
      headerName: "Specifications",
      description: "Specification",
      flex: 3,
      editable: false,
    },
    {
      field: "a",
      headerName: "Action",
      description: "Action",
      sortable: false,
      flex: 0.5,
        renderCell: (params) => (
          <>           
            <DeleteButton onConfirm={() => handleDeleteClick(params.row)} />
          {/* <Button
              variant="contained"
              color="primary"
              size="small"
              // onClick={() => handleChange(params.row)}
            >
              <EditIcon />
            </Button>
            <Box
              sx={{
                width: 10,
              }}
            />
            <Button
              variant="contained"
              color="error"
              size="small"
              // onClick={() => HandleDelete(params.row)}
            >
              {/* <DeleteIcon />
            </Button>*/}
          </>
        ),
    },
  ];

  return (
    <Box
      sx={{
        width: "90%",
        margin: "auto",
        marginBottom: "25px",
      }}
    >
      <DataGrid
        rows={reservations}
        columns={columns}
        localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
        pageSize={10}  // Nombre d'éléments par page
        pagination
        disableRowSelectionOnClick
      />
      {/* Delete Confirmation Dialog */}
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          Êtes-vous sûr de vouloir supprimer cette reservation ?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Annuler
          </Button>
          <Button onClick={handleConfirmDelete} color="error">
            Supprimer
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
