import Link from "next/link";
import { Card } from "../../../components/Card";
import ConfirmationNumberRoundedIcon from "@mui/icons-material/ConfirmationNumberRounded";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
export const Ticket = () => {
  return (
    <div className="p-4 m-4 border border-black border-solid">
      <div>
        <Link href="/user" className="">
          <ArrowBackIcon />
        </Link>
        <button></button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 p-4">
        <Card
          title="Crear Ticket"
          icon={<ConfirmationNumberRoundedIcon />}
          href="/user/tickets/crear-ticket"
        />
        <Card
          title="Ver Mis Tickets"
          icon={<ConfirmationNumberRoundedIcon />}
          href="/user/tickets/mis-tickets"
        />
      </div>
    </div>
  );
};

export default Ticket;
