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
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";

interface Usuario {
  id: number;
  email: string;
  fechaSolicitud: string;
}

const usuarios: Usuario[] = [
  { id: 1, email: "usuario1@example.com", fechaSolicitud: "2023-01-01" },
  { id: 2, email: "usuario2@example.com", fechaSolicitud: "2023-01-02" },
  { id: 3, email: "usuario3@example.com", fechaSolicitud: "2023-01-03" },
];

export const TablaPendientes = () => {
  const [open, setOpen] = useState(false);
  const [usuarioSeleccionado, setUsuarioSeleccionado] =
    useState<Usuario | null>(null);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
  });

  const handleOpen = (usuario: Usuario) => {
    setUsuarioSeleccionado(usuario);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setUsuarioSeleccionado(null);
    setFormData({ nombre: "", apellido: "", telefono: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!usuarioSeleccionado) return;

    console.log("Dar de alta:", {
      id: usuarioSeleccionado.id,
      email: usuarioSeleccionado.email,
      ...formData,
    });

    // Acá podrías hacer fetch a tu API
    // await fetch("/api/colivers/alta", { method: "POST", body: JSON.stringify({ ... }) })

    handleClose();
  };

  return (
    <div>
      <TableContainer component={Paper} sx={{ mt: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>Fecha</TableCell>
              <TableCell>Acción</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usuarios.map((u) => (
              <TableRow key={u.id}>
                <TableCell>{u.email}</TableCell>
                <TableCell>{u.fechaSolicitud}</TableCell>
                <TableCell>
                  <Button variant="contained" onClick={() => handleOpen(u)}>
                    Dar de alta
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Completar datos del usuario</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Nombre"
            name="nombre"
            fullWidth
            value={formData.nombre}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Apellido"
            name="apellido"
            fullWidth
            value={formData.apellido}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Teléfono"
            name="telefono"
            fullWidth
            value={formData.telefono}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TablaPendientes;
