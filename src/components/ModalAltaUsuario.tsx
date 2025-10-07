"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { SelectCasa } from "./SelectCasa";
import { UploadFileButton } from "./UploadFileButton";

interface ModalAltaUsuarioProps {
  open: boolean;
  casa: string;
  onClose: () => void;
  onSubmit: () => void;
  onChangeCasa: (value: string) => void;
}

export const ModalAltaUsuario: React.FC<ModalAltaUsuarioProps> = ({
  open,
  casa,
  onClose,
  onSubmit,
  onChangeCasa,
}) => {
  const [selectedCasa, setSelectedCasa] = React.useState(casa);
  const [tipoHabitacion, setTipoHabitacion] = React.useState("");
  const [formData, setFormData] = useState({
    nroHabitacion: "",
    nombreApellido: "",
    fechaFin: "",
    inicioContrato: "",
    finContrato: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Completar datos del usuario</DialogTitle>
      <DialogContent>
        <SelectCasa value={selectedCasa} onChange={setSelectedCasa} />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Tipo de Habitacion
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={tipoHabitacion}
            label="tipoHabitacion"
            onChange={(e) => setTipoHabitacion(e.target.value)}
          >
            <MenuItem value={"compartida"}>Compartida</MenuItem>
            <MenuItem value={"privada"}>Privada</MenuItem>
          </Select>
        </FormControl>
        <TextField
          margin="dense"
          label="Nro de Habitacion"
          name="nroHabitacion"
          fullWidth
          value={formData.nroHabitacion}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Nombre y Apellido"
          name="nombreApellido"
          fullWidth
          value={formData.nombreApellido}
          onChange={handleChange}
        />
        <UploadFileButton
          label="Subir contrato"
          onFileSelect={(file) => {
            if (file) {
              console.log("Archivo seleccionado:", file.name);
              // podés guardarlo en un estado, subirlo a una API, etc.
            }
          }}
          accept=".pdf,.doc,.docx"
        />
        <TextField
          label="Inicio de Contrato"
          type="month"
          fullWidth
          margin="dense"
          value={formData.inicioContrato}
          onChange={(e) =>
            setFormData({ ...formData, inicioContrato: e.target.value })
          }
        />
        <TextField
          label="Fin de Contrato"
          type="month"
          fullWidth
          margin="dense"
          value={formData.finContrato}
          onChange={(e) =>
            setFormData({ ...formData, finContrato: e.target.value })
          }
        />
        <TextField
          margin="dense"
          label="Fecha de finalización del contrato"
          name="fechaFin"
          type="date"
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={formData.fechaFin || ""}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancelar
        </Button>
        <Button onClick={onSubmit} variant="contained" color="primary">
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalAltaUsuario;
