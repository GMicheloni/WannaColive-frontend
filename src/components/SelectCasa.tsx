"use client";
import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface SelectCasaProps {
  value: string;
  onChange: (value: string) => void;
  fullWidth?: boolean;
  label?: string;
}

const listaCasas = [
  "La Plata",
  "Congreso",
  "Tango",
  "Palermo",
  "Inependencia",
  "Sur",
  "Cordoba",
  "San Telmo",
  "Rivadavia",
  "Nueva Cordoba",
];

export const SelectCasa: React.FC<SelectCasaProps> = ({
  value,
  onChange,
  fullWidth = true,
  label = "Casa",
}) => {
  return (
    <FormControl fullWidth={fullWidth}>
      <InputLabel id="select-casa-label">{label}</InputLabel>
      <Select
        labelId="select-casa-label"
        id="select-casa"
        value={value}
        label={label}
        onChange={(e) => onChange(e.target.value)}
      >
        {listaCasas.map((casa) => (
          <MenuItem key={casa} value={casa}>
            {casa}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
