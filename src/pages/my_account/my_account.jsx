import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { BASE_URL } from '../../constants/url';
import PropTypes from 'prop-types';

const UserInfoDialog = ({ onClose }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = window.localStorage.getItem('access_token');
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/users/me`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des informations de l\'utilisateur', error.message);
      }
    };

    fetchUserData();
  }, []); // Le tableau vide signifie que le useEffect ne déclenchera qu'au montage

  return (
    <Dialog open={Boolean(userData)} onClose={onClose}>
      <DialogTitle>
        Informations sur l'utilisateur
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ overflowX: 'hidden', overflowY: 'auto', maxHeight: '80vh' }}>
        {userData ? (
          <>
            <Typography>Email: {userData.email}</Typography>
            <Typography>Nom: {userData.first_name}</Typography>
            <Typography>Prénom: {userData.last_name}</Typography>
            <Typography>Département: {userData.departement.name}</Typography>
            <Typography>Téléphone: {userData.phone}</Typography>
            {/* Ajoutez d'autres informations si nécessaire */}
          </>
        ) : (
          <Typography>Chargement des informations...</Typography>
        )}
      </DialogContent>
    </Dialog>
  );
};

UserInfoDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default UserInfoDialog;
