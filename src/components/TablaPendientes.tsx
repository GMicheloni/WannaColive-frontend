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
import ModalAltaUsuario from "@/components/ModalAltaUsuario";

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
  const [casa, setCasa] = useState("");

  const handleOpen = (usuario: Usuario) => {
    setUsuarioSeleccionado(usuario);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setUsuarioSeleccionado(null);
    setCasa("");
  };

  const handleSubmit = () => {
    if (!usuarioSeleccionado) return;

    console.log("Dar de alta:", {
      id: usuarioSeleccionado.id,
      email: usuarioSeleccionado.email,
      casa,
    });

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

      {/* Modal extraído */}
      <ModalAltaUsuario
        open={open}
        casa={casa}
        onClose={handleClose}
        onSubmit={handleSubmit}
        onChangeCasa={setCasa}
      />
    </div>
  );
};

export default TablaPendientes;
