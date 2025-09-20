import { Button } from "@mui/material";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const CrearTicket = () => {
  return (
    <div>
      <div className="items-center justify-center w-1/2 p-4 m-auto mt-20 border border-black border-solid ">
        <Link href="/user/tickets">
          <ArrowBackIcon />
        </Link>
        <form className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl font-bold">Crear Ticket</h1>
          <input
            type="text"
            placeholder="Asunto"
            className="p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Descripción"
            className="w-full h-40 p-2 border border-gray-300 rounded resize-none"
          ></textarea>
          <Button variant="contained" color="primary">
            Crear Ticket
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CrearTicket;
