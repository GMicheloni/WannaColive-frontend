"use client";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ticketsMockup } from "@/helpers/tickets";
import { useState } from "react";
import Ticket from "@/types/ticket";

export const CrearTicket = () => {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    if (!subject || !description) {
      alert("Por favor, complete todos los campos.");
      return;
    }
    e.preventDefault();
    const newTicket: Ticket = {
      id: ticketsMockup.length + 1,
      subject,
      description,
      status: "abierto",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setSubject("");
    setDescription("");
    alert("Ticket creado con éxito ");
    console.log("Ticket creado:", newTicket);
  };
  return (
    <div>
      <div className="items-center justify-center w-1/2 p-4 m-auto mt-20 border border-black border-solid ">
        <Link href="/user/tickets">
          <ArrowBackIcon />
        </Link>
        <form className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl font-bold">Crear Ticket</h1>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Asunto</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            >
              <MenuItem value={"Mantenimiento"}>Mantenimiento</MenuItem>
              <MenuItem value={"Convivencia"}>Convivencia</MenuItem>
              <MenuItem value={"Servicios"}>Servicios</MenuItem>
              <MenuItem value={"Sugerencia"}>Sugerencia</MenuItem>
              <MenuItem value={"Otro"}>Otro</MenuItem>
            </Select>
          </FormControl>
          <textarea
            placeholder="Descripción"
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-40 p-2 border border-gray-300 rounded resize-none"
          ></textarea>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Crear Ticket
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CrearTicket;
