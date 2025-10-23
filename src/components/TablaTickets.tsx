"use client";
import React, { useState, useEffect } from "react";
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
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const estados: Array<"todos" | "abierto" | "cerrado"> = [
  "todos",
  "abierto",
  "cerrado",
];

export const TablaTickets = () => {
  const [filtro, setFiltro] = useState<"todos" | "abierto" | "cerrado">(
    "todos"
  );
  const [tickets, setTickets] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<any | null>(null);
  const [feedback, setFeedback] = useState("");

  const fetchTickets = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await fetch(`${API_URL}/tickets/all`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setTickets(data);
    } catch (err) {
      console.error("Error fetching tickets:", err);
    }
  };
  // Traer tickets desde backend
  useEffect(() => {
    fetchTickets();
  }, []);

  const ticketsFiltrados =
    filtro === "todos"
      ? tickets
      : tickets.filter((t) => {
          const estadoTicket = String(t?.estado ?? "")
            .toLowerCase()
            .trim();
          return estadoTicket === filtro;
        });

  const handleOpen = (ticket: any) => {
    console.log("Ticket seleccionado:", ticket.id); // <-- loguea el id
    setSelectedTicket(ticket);

    setOpen(true);
  };

  const handleClose = async () => {
    setOpen(false);
    setSelectedTicket(null);
    setFeedback("");
    await fetchTickets();
  };

  const handleSubmit = () => {
    if (selectedTicket) {
      fetch(`${API_URL}/tickets/${selectedTicket.id}/close`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ comentarioAdmin: feedback }),
      })
        .then((res) => res.json())
        .then((data) => {})
        .catch((err) => console.error("Error cerrando ticket:", err));
    }
    handleClose();
  };

  return (
    <div>
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
            {ticketsFiltrados.map((t, index) => (
              <TableRow key={t.id ?? index}>
                <TableCell>{t.asunto.tipo}</TableCell>
                <TableCell>{t.descripcion}</TableCell>
                <TableCell>{t.estado}</TableCell>
                <TableCell>{t.creadoEn}</TableCell>
                <TableCell>{t.actualizadoEn}</TableCell>
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
