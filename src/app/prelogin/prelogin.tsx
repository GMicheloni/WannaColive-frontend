"use client";
import { Radio, RadioGroup } from "@mui/material";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
export const PreLogin = () => {
  return (
    <div>
      <div className="h-full w-1/2 border-2 border-black m-auto mt-20 p-10 rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="text-2xl font-semibold  mb-4">Registrarse</h2>
        <form className="flex flex-col gap-4 p-4 w-full max-w-lg">
          <label htmlFor="name">Nombre:</label>
          <input
            className="border-2 border-gray-300 p-2 w-full"
            type="text"
            id="name"
            name="name"
            /* value={formData.name}
            onChange={handleChange} */
            required
          />
          <label htmlFor="surname">Apellido:</label>
          <input
            className="border-2 border-gray-300 p-2 w-full"
            type="text"
            id="surname"
            name="surname"
            /* value={formData.name}
            onChange={handleChange} */
            required
          />
          <label htmlFor="dni">Dni/Pasaporte:</label>
          <input
            className="border-2 border-gray-300 p-2 w-full"
            type="text"
            id="dni"
            name="dni"
            /* value={formData.name}
            onChange={handleChange} */
            required
          />
          <label htmlFor="pronoun">Pronombre:</label>
          <RadioGroup name="pronoun" row>
            <FormControlLabel value="El" label="El" control={<Radio />} />
            <FormControlLabel value="Ella" label="Ella" control={<Radio />} />
            <FormControlLabel value="Elle" label="Elle" control={<Radio />} />
          </RadioGroup>
          <label htmlFor="email">Correo:</label>
          <input
            className="border-2 border-gray-300 p-2 w-full"
            type="email"
            id="email"
            name="email"
            /* value={formData.name}
            onChange={handleChange} */
            required
          />
          <label htmlFor="phone">Telefono Celular:</label>
          <input
            className="border-2 border-gray-300 p-2 w-full"
            type="text"
            id="phone"
            name="phone"
            /* value={formData.name}
            onChange={handleChange} */
            required
          />
          <label htmlFor="birthdate">Fecha de Nacimiento:</label>
          <input
            className="border-2 border-gray-300 p-2 w-full"
            type="date"
            id="birthdate"
            name="birthdate"
            /* value={formData.name}
            onChange={handleChange} */
            required
          />
          <label htmlFor="country">Pais:</label>
          <p>aca va un abm de paises</p>
          <label htmlFor="city">Ciudad:</label>
          <p>aca va un abm de ciudades</p>
          <label htmlFor="reason">Motivo:</label>
          <p>aca va un abm de motivos</p>
          <label htmlFor="institue">Institucion:</label>
          <input
            className="border-2 border-gray-300 p-2 w-full"
            type="text"
            id="institute"
            name="institute"
            /* value={formData.name}
            onChange={handleChange} */
            required
          />
          <label htmlFor="">Sede Wanna:</label>
          <p>aca va un abm de sedes de wanna</p>

          <Button variant="contained">Registrarse</Button>
        </form>
      </div>
    </div>
  );
};

export default PreLogin;
