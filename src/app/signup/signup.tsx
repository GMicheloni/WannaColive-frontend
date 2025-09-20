"use client";

import { Button } from "@mui/material";
import React from "react";

export const SignUp = () => {
  const [userdata, setUserdata] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = React.useState({});

  const validateForm = (input: {
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    const error: {
      email?: string;
      password?: string;
      confirmPassword?: string;
    } = {};
    if (!input.email) error.email = "Email requerido";
    if (!input.email.includes("@")) error.email = "Email inválido";
    if (!input.password) error.password = "Password requerida";
    if (input.password !== input.confirmPassword)
      error.confirmPassword = "Las contraseñas no coinciden";
    return error;
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserdata({ ...userdata, [e.target.name]: e.target.value });
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(userdata);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      alert(
        Object.values(validationErrors)
          .map((err) => `• ${err}`)
          .join("\n")
      );
    } else
      alert(
        `Usuario ${userdata.email} creado con éxito y contrasena ${userdata.password}`
      );
  };

  return (
    <div>
      <div className="flex flex-col items-center w-1/2 p-10 m-auto mt-20 border-2 border-black rounded-lg shadow-lg h-1/2">
        <img
          src="./logo.png"
          alt="logo"
          className="mb-4 bg-black border-2 border-black rounded-full w-25 h-25 "
        />
        <h1 className="mb-6 text-3xl font-bold text-center">Registrarse</h1>

        <form className="flex flex-col items-start w-full max-w-sm gap-5">
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            type="email"
            placeholder="Entrar tu email"
            className="w-full p-2 border-2 border-gray-300"
            onChange={changeHandler}
            required
          />

          <label htmlFor="password">Contraseña:</label>
          <input
            name="password"
            type="password"
            placeholder="Entrar contraseña"
            className="w-full p-2 border-2 border-gray-300"
            onChange={changeHandler}
            required
          />

          <label htmlFor="confirm-password">Confirmar Contraseña:</label>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirmar tu contraseña"
            className="w-full p-2 border-2 border-gray-300"
            onChange={changeHandler}
            required
          />
        </form>
        <Button
          onClick={submitHandler}
          variant="contained"
          color="primary"
          sx={{ marginTop: "20px" }}
        >
          Registrarse
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
