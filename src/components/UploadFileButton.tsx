"use client";
import React, { useRef } from "react";
import { Button } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";

interface UploadFileButtonProps {
  label?: string;
  onFileSelect: (file: File | null) => void;
  accept?: string;
}

export const UploadFileButton: React.FC<UploadFileButtonProps> = ({
  label = "Subir archivo",
  onFileSelect,
  accept = ".pdf,.jpg,.png,.doc,.docx",
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onFileSelect(file);
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <Button
        sx={{ mt: 2, mb: 2 }}
        variant="outlined"
        color="primary"
        startIcon={<UploadFileIcon />}
        onClick={handleClick}
      >
        {label}
      </Button>
    </>
  );
};
