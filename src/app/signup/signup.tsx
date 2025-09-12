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
      <div className="h-1/2 w-1/2 border-2 border-black m-auto mt-20 p-10 rounded-lg shadow-lg flex flex-col items-center">
        <img
          src="./logo.png"
          alt="logo"
          className="bg-black border-2 border-black rounded-full w-25 h-25 mb-4 "
        />
        <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>

        <form className="flex flex-col items-start gap-5 w-full max-w-sm">
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            type="text"
            placeholder="Enter your email"
            className="border-2 border-gray-300 p-2 w-full"
            onChange={changeHandler}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            className="border-2 border-gray-300 p-2 w-full"
            onChange={changeHandler}
            required
          />

          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            className="border-2 border-gray-300 p-2 w-full"
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
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
