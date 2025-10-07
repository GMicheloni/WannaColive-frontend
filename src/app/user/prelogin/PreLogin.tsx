"use client";
import { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";

export const PreLogin = () => {
  const [formData, setFormData] = useState({
    telefono: "",
    dni: "",
    pais: "",
    ciudad: "",
    nacimiento: "",
    motivo: "",
    institucion: "",
    conocio: "",
    instagram: "",
    intereses: [] as string[],
    sobreMi: "",
    area: "",
  });

  const interesesOpciones = [
    "Deportes",
    "Música",
    "Cine",
    "Lectura",
    "Viajes",
    "Tecnología",
    "Arte",
    "Cocina",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const intereses = checked
        ? [...prev.intereses, value]
        : prev.intereses.filter((i) => i !== value);
      return { ...prev, intereses };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`
📋 DATOS INGRESADOS:
--------------------------------
📞 Teléfono: ${formData.telefono}
🪪 DNI/Pasaporte: ${formData.dni}
🌎 País: ${formData.pais}
🏙️ Ciudad: ${formData.ciudad}
🎂 Fecha de nacimiento: ${formData.nacimiento}
🎯 Motivo: ${formData.motivo}
🏫 Institución: ${formData.institucion}
💬 ¿Cómo nos conoció?: ${formData.conocio}

Opcionales:
📸 Instagram: ${formData.instagram || "-"}
🎨 Intereses/Hobbies: ${formData.intereses.join(", ") || "-"}
🧠 Área de estudio/trabajo: ${formData.area || "-"}
📝 Sobre mí: ${formData.sobreMi || "-"}
    `);
  };

  return (
    <div className="flex flex-col items-center w-1/2 h-full p-10 m-auto mt-20 border-2 border-black rounded-lg shadow-lg">
      <h2 className="mb-4 text-2xl font-semibold">Registrarse</h2>
      <form
        className="flex flex-col w-full max-w-lg gap-4 p-4"
        onSubmit={handleSubmit}
      >
        {/* Campos obligatorios */}
        <label htmlFor="telefono">Teléfono:</label>
        <input
          className="w-full p-2 border-2 border-gray-300"
          type="text"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          required
        />

        <label htmlFor="dni">DNI/ID/Pasaporte:</label>
        <input
          className="w-full p-2 border-2 border-gray-300"
          type="text"
          id="dni"
          name="dni"
          value={formData.dni}
          onChange={handleChange}
          required
        />

        <label htmlFor="pais">País de origen:</label>
        <input
          className="w-full p-2 border-2 border-gray-300"
          type="text"
          id="pais"
          name="pais"
          value={formData.pais}
          onChange={handleChange}
          required
        />

        <label htmlFor="ciudad">Ciudad:</label>
        <input
          className="w-full p-2 border-2 border-gray-300"
          type="text"
          id="ciudad"
          name="ciudad"
          value={formData.ciudad}
          onChange={handleChange}
          required
        />

        <label htmlFor="nacimiento">Fecha de nacimiento:</label>
        <input
          className="w-full p-2 border-2 border-gray-300"
          type="date"
          id="nacimiento"
          name="nacimiento"
          value={formData.nacimiento}
          onChange={handleChange}
          required
        />

        <label htmlFor="motivo">Motivo:</label>
        <select
          className="w-full p-2 border-2 border-gray-300"
          id="motivo"
          name="motivo"
          value={formData.motivo}
          onChange={handleChange}
          required
        >
          <option value="">Seleccionar...</option>
          <option value="Estudio">Estudio</option>
          <option value="Trabajo">Trabajo</option>
          <option value="Turismo">Turismo</option>
          <option value="Otros">Otros</option>
        </select>

        <label htmlFor="institucion">Institución:</label>
        <input
          className="w-full p-2 border-2 border-gray-300"
          type="text"
          id="institucion"
          name="institucion"
          value={formData.institucion}
          onChange={handleChange}
          required
        />

        <label htmlFor="conocio">¿Cómo nos conoció?</label>
        <select
          className="w-full p-2 border-2 border-gray-300"
          id="conocio"
          name="conocio"
          value={formData.conocio}
          onChange={handleChange}
          required
        >
          <option value="">Seleccionar...</option>
          <option value="Google">Google</option>
          <option value="Redes Sociales">Redes Sociales</option>
          <option value="Recomendación">Recomendación</option>
          <option value="Programa">Programa</option>
          <option value="Agencia">Agencia</option>
          <option value="Otros">Otros</option>
        </select>

        {/* Campos opcionales */}
        <hr className="my-4" />
        <h3 className="text-lg font-semibold">Opcionales</h3>

        <label htmlFor="instagram">Instagram:</label>
        <input
          className="w-full p-2 border-2 border-gray-300"
          type="text"
          id="instagram"
          name="instagram"
          placeholder="@usuario"
          value={formData.instagram}
          onChange={handleChange}
        />

        <label>Intereses / Hobbies:</label>
        <div className="grid grid-cols-2 gap-2">
          {interesesOpciones.map((interes) => (
            <FormControlLabel
              key={interes}
              control={
                <Checkbox
                  value={interes}
                  checked={formData.intereses.includes(interes)}
                  onChange={handleCheckboxChange}
                />
              }
              label={interes}
            />
          ))}
        </div>

        <label htmlFor="area">Área de estudio / trabajo:</label>
        <input
          className="w-full p-2 border-2 border-gray-300"
          type="text"
          id="area"
          name="area"
          placeholder="Ej: Ingeniería, Medicina, Derecho, etc."
          value={formData.area}
          onChange={handleChange}
        />

        <label htmlFor="sobreMi">Sobre mí:</label>
        <textarea
          className="w-full p-2 border-2 border-gray-300"
          id="sobreMi"
          name="sobreMi"
          rows={3}
          value={formData.sobreMi}
          onChange={handleChange}
        />

        <Button variant="contained" type="submit">
          Registrarse
        </Button>
      </form>
    </div>
  );
};

export default PreLogin;
