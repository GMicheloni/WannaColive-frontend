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
import { useEffect, useState } from "react";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const CrearTicket = () => {
  const [description, setDescription] = useState("");

  const [subjects, setSubjects] = useState<{ id: number; tipo: string }[]>([]);

  const [selectedSubject, setSelectedSubject] = useState(""); // id del asunto seleccionado

  useEffect(() => {
    // Traer los asuntos desde tu endpoint
    fetch(`${API_URL}/asunto`) // ajustá la URL según tu API
      .then((res) => res.json())
      .then((data) => setSubjects(data))
      .catch((err) => console.error("Error al obtener asuntos:", err));
  }, []);

  const handleSubmit = async () => {
    if (!selectedSubject || !description.trim()) {
      alert("Completa todos los campos");
      return;
    }

    const ticketData = {
      asuntoId: selectedSubject,
      descripcion: description,
    };
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${API_URL}/tickets`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(ticketData),
      });

      if (!res.ok) throw new Error("Error al crear ticket");

      const result = await res.json();
      console.log("Ticket creado:", result);
      alert("Ticket creado correctamente ✅");
      setDescription("");
      setSelectedSubject("");
    } catch (error) {
      console.error(error);
      alert("Hubo un error al crear el ticket ❌");
    }
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
            <InputLabel id="select-asunto-label">Asunto</InputLabel>
            <Select
              labelId="select-asunto-label"
              id="select-asunto"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              {subjects.map((asunto) => (
                <MenuItem key={asunto.id} value={asunto.id}>
                  {asunto.tipo}
                </MenuItem>
              ))}
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
