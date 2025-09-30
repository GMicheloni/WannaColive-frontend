"use client";
import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Ticket from "@/types/ticket";

const estados: Array<"todos" | "pendiente" | "abierto" | "cerrado"> = [
  "todos",
  "pendiente",
  "abierto",
  "cerrado",
];

const tickets: Ticket[] = [
  {
    id: 1,
    subject: "Ticket 1",
    description: "Descripción del ticket 1",
    status: "abierto",
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
  },
  {
    id: 2,
    subject: "Ticket 2",
    description: "Descripción del ticket 2",
    status: "cerrado",
    createdAt: "2023-01-02",
    updatedAt: "2023-01-02",
  },
  {
    id: 3,
    subject: "Ticket 3",
    description: "Descripción del ticket 3",
    status: "pendiente",
    createdAt: "2023-01-03",
    updatedAt: "2023-01-03",
  },
];

export const TablaTickets = () => {
  const [filtro, setFiltro] = useState<
    "todos" | "pendiente" | "abierto" | "cerrado"
  >("todos");

  const [open, setOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [feedback, setFeedback] = useState("");

  // Filtrar tickets según el estado
  const ticketsFiltrados =
    filtro === "todos" ? tickets : tickets.filter((t) => t.status === filtro);

  const handleOpen = (ticket: Ticket) => {
    setSelectedTicket(ticket);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTicket(null);
    setFeedback("");
  };

  const handleSubmit = () => {
    if (selectedTicket) {
      console.log(`Feedback para ticket ${selectedTicket.id}:`, feedback);
      // acá podrías llamar a tu API para guardar el feedback
    }
    handleClose();
  };

  return (
    <div>
      {/* Botones de filtro */}
      <div style={{ marginBottom: 16 }}>
        {estados.map((status) => (
          <Button
            key={status}
            variant={filtro === status ? "contained" : "outlined"}
            onClick={() => setFiltro(status)}
            sx={{ mr: 1 }}
          >
            {status.toUpperCase()}
          </Button>
        ))}
      </div>

      {/* Tabla */}
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Asunto</TableCell>
              <TableCell>Descripcion</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Creado el</TableCell>
              <TableCell>Actualizado el</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ticketsFiltrados.map((t) => (
              <TableRow key={t.id}>
                <TableCell>{t.subject}</TableCell>
                <TableCell>{t.description}</TableCell>
                <TableCell>{t.status}</TableCell>
                <TableCell>{t.createdAt}</TableCell>
                <TableCell>{t.updatedAt}</TableCell>
                <TableCell>
                  <Button variant="contained" onClick={() => handleOpen(t)}>
                    Tratar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal para feedback */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Dar feedback</DialogTitle>
        <DialogContent>
          <p>
            Ticket: <b>{selectedTicket?.subject}</b>
          </p>
          <TextField
            autoFocus
            margin="dense"
            label="Feedback"
            type="text"
            fullWidth
            multiline
            rows={3}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button variant="contained" onClick={handleSubmit}>
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TablaTickets;
