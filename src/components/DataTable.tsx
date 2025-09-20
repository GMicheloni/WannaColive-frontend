"use client";
import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { ticketsMockup as rows } from "@/app/user/tickets/mis-tickets/MisTickets";
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "subject", headerName: "Asunto", width: 130 },
  { field: "description", headerName: "Descripción", width: 130 },
  { field: "status", headerName: "Estado", width: 130 },
  { field: "createdAt", headerName: "Creado el", width: 130 },
  { field: "updatedAt", headerName: "Actualizado el", width: 130 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
