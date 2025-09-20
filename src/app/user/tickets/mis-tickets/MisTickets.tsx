import Ticket from "@/components/Ticket";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";

export const ticketsMockup = [
  {
    id: 1,
    subject: "Problema con la cuenta",
    description: "No puedo acceder a mi cuenta desde hace 3 días.",
    status: "abierto",
    createdAt: "2023-03-01",
    updatedAt: "2023-03-02",
  },
  {
    id: 2,
    subject: "Problema con la cuenta",
    description: "No puedo acceder a mi cuenta desde hace 3 días.",
    status: "pendiente",
    createdAt: "2023-03-01",
    updatedAt: "2023-03-02",
  },
  {
    id: 3,
    subject: "Problema con la cuenta",
    description: "No puedo acceder a mi cuenta desde hace 3 días.",
    status: "cerrado",
    createdAt: "2023-03-01",
    updatedAt: "2023-03-02",
  },
];

export const MisTickets = () => {
  return (
    <div className="p-4 m-4 border border-black border-solid">
      <Link href="/user/tickets">
        <ArrowBackIcon />
      </Link>
      <div className="items-center justify-center w-1/2 m-auto mt-4">
        <h1 className="text-2xl font-bold">Mis Tickets</h1>
        <p>Aquí puedes ver tus tickets.</p>
        {ticketsMockup.map((ticket: any) => (
          <div
            key={ticket.id}
            className="p-4 my-4 border border-gray-300 rounded"
          >
            {Ticket(
              ticket.subject,
              ticket.description,
              ticket.status,
              ticket.createdAt,
              ticket.updatedAt
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MisTickets;
