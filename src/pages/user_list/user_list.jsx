import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { DeleteButton } from "../../components/button/button";
import LoupeImg from "../../assets/images/loupe.png" 
import './user_list.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { Box, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { DataGrid, frFR } from "@mui/x-data-grid";



export function UserList(){
    return(
        <div className="user-list">
            <Header header={false} />
            <UserListTable />
            <Footer />
        </div>
    )
}

function UserListTable() {
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem('access_token');

    axios.get(`${BASE_URL}/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des reservations :', error.message);
      });
  }, []);



  const handleDeleteClick = (user) => {
    setSelectedUser(user);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleConfirmDelete = () => {
    // Call the delete endpoint with the selected user's ID

    const token = window.localStorage.getItem('access_token');
    axios.delete(`${BASE_URL}/users/${selectedUser.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        // Refresh the user list after deletion
        // You may want to handle this more efficiently
        window.location.reload();
      })
      .catch((error) => {
        console.error('Erreur lors de la suppression de l\'utilisateur :', error.message);
      })
      .finally(() => {
        setDialogOpen(false);
      });
  };


  const columns = [
    {
      field: "email",
      headerName: "Email",
      flex: 3,
      editable: false,
      description: "Email",
    },
    {
      field: "first_name",
      headerName: "Nom",
      flex: 1.5,
      description: "Nom",
      editable: false,
    },
    {
      field: "last_name",
      headerName: "Prénom",
      flex: 2,
      description: "Prénom",
      editable: false,
    },
    {
      field: "phone",
      headerName: "Téléphone",
      description: "Téléphone",
      flex: 2,
    },

    {
      field: "name",
      headerName: "Département",
      description: "Département",
      flex: 2,
      editable: false,
      renderCell: (params) => (
        <>
          {params.row.departement.name}
        </>
      ),
    },
    {
      field: "company",
      headerName: "Entreprise",
      description: "Entreprise",
      flex: 1.2,
      editable: false,
    },
    {
      field: "a",
      headerName: "Action",
      description: "Action",
      sortable: false,
      flex: 1,
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
              <DeleteIcon /> 
            </Button>         */}
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
        rows={users}
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
          Êtes-vous sûr de vouloir supprimer cet utilisateur ?
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
