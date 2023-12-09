import React from "react";
import { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { DataGrid, frFR } from "@mui/x-data-grid";

export default function AdminListReservation() {
  const [reservations, setReservations] = useState([
    {
      id: 0,
      date: "2023-12-08",
      start_time: "14:21:54.949Z",
      end_time: "14:21:54.949Z",
      participant_number: 0,
      specifications: "string",
      viewed: true,
      user_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      user: {
        id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        email: "user@example.com",
        is_active: true,
        is_superuser: false,
        is_verified: false,
        first_name: "string",
        last_name: "string",
        phone: "string",
        company: "string",
        IM: "string",
        function: "string",
        departement_id: 0,
        departement: {
          id: 0,
          name: "string",
        },
      },
      room_id: 0,
      room: {
        id: 0,
        capacity: 0,
        location: "ENI",
        description: "Ity dia ENI",
        images: [
          {
            id: 0,
            link: "string",
            room_id: 0,
          },
        ],
        user: {
          id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          email: "user@example.com",
          is_active: true,
          is_superuser: false,
          is_verified: false,
          first_name: "string",
          last_name: "string",
          phone: "string",
          company: "string",
          IM: "string",
          function: "string",
          departement_id: 0,
          departement: {
            id: 0,
            name: "string",
          },
        },
        materials: [
          {
            id: 0,
            name: "string",
            quantity: 0,
            state: true,
            room_id: 0,
          },
        ],
      },
    },
    {
      id: 1,
      date: "2023-12-09",
      start_time: "15:30:00.000Z",
      end_time: "16:45:00.000Z",
      participant_number: 10,
      specifications: "another string",
      viewed: false,
      user_id: "3fa85f64-5717-4562-b3fc-2c963f66afa7",
      user: {
        id: "3fa85f64-5717-4562-b3fc-2c963f66afa7",
        email: "anotheruser@example.com",
        is_active: true,
        is_superuser: false,
        is_verified: false,
        first_name: "another",
        last_name: "user",
        phone: "987654321",
        company: "ABC Inc.",
        IM: "user2_im",
        function: "Manager",
        departement_id: 1,
        departement: {
          id: 1,
          name: "IT",
        },
      },
      room_id: 1,
      room: {
        id: 1,
        capacity: 15,
        location: "Room B",
        description: "Large meeting room",
        images: [
          {
            id: 1,
            link: "image_link_2",
            room_id: 1,
          },
          {
            id: 2,
            link: "image_link_3",
            room_id: 1,
          },
        ],
        user: {
          id: "3fa85f64-5717-4562-b3fc-2c963f66afa7",
          email: "anotheruser@example.com",
          is_active: true,
          is_superuser: false,
          is_verified: false,
          first_name: "another",
          last_name: "user",
          phone: "987654321",
          company: "ABC Inc.",
          IM: "user2_im",
          function: "Manager",
          departement_id: 1,
          departement: {
            id: 1,
            name: "IT",
          },
        },
        materials: [
          {
            id: 1,
            name: "Projector",
            quantity: 2,
            state: true,
            room_id: 1,
          },
          {
            id: 2,
            name: "Whiteboard",
            quantity: 1,
            state: true,
            room_id: 1,
          },
        ],
      },
    },
  ]);

  const columns = [
    {
      field: "room",
      headerName: "Lieu",
      flex: 2,
      editable: false,
      renderCell: (params) => (
        <>
          {params.row.room.location} - {params.row.room.description}
        </>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1.5,
      editable: false,
    },
    {
      field: "start_time",
      headerName: "Heure Debut",
      type: "Date",
      flex: 2,
      editable: false,
    },
    {
      field: "end_time",
      headerName: "Heure Fin",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      flex: 2,
    },
    {
      field: "participant_number",
      headerName: "Participants",
      flex: 2,
      editable: false,
    },
    {
      field: "specifications",
      headerName: "Specification",
      flex: 2,
      editable: false,
    },
    {
      field: "a",
      headerName: "Action",
      sortable: false,
      flex: 3,
      //   renderCell: (params) => (
      //     <>
      //       <Button
      //         variant="contained"
      //         color="primary"
      //         size="small"
      //         // onClick={() => handleChange(params.row)}
      //       >
      //         <EditIcon />
      //       </Button>
      //       <Box
      //         sx={{
      //           width: 10,
      //         }}
      //       />
      //       <Button
      //         variant="contained"
      //         color="error"
      //         size="small"
      //         // onClick={() => HandleDelete(params.row)}
      //       >
      //         {/* <DeleteIcon /> */}
      //       </Button>
      //     </>
      //   ),
    },
  ];

  return (
    <Box
      sx={{
        width: "70%",
        margin: "auto",
        marginBottom: "25px",
      }}
    >
      <DataGrid
        rows={reservations}
        columns={columns}
        localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
