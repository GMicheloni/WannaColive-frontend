import Ticket from "@/types/ticket";
import { ticketsMockup } from "@/helpers/tickets";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import clsx from "clsx";

export const MisTickets = () => {
  return (
    <div className="p-4 m-4 border border-black border-solid">
      <Link href="/user/tickets">
        <ArrowBackIcon />
      </Link>

      <div className="w-4/5 m-auto mt-6">
        <h1 className="mb-2 text-2xl font-bold">Mis Tickets</h1>
        <p className="mb-4 text-gray-600">Aquí puedes ver tus tickets.</p>

        <div className="overflow-x-auto">
          <table className="min-w-full overflow-hidden border border-gray-200 rounded-lg shadow-sm">
            <thead className="text-left bg-gray-100">
              <tr>
                <th className="px-4 py-2 border-b">Ticket ID</th>
                <th className="px-4 py-2 border-b">Asunto</th>
                <th className="px-4 py-2 border-b">Estado</th>
                <th className="px-4 py-2 border-b">Última Actualización</th>
                <th className="px-4 py-2 border-b">Comentarios del Admin</th>
              </tr>
            </thead>
            <tbody>
              {ticketsMockup.map((ticket: Ticket) => (
                <tr
                  key={ticket.id}
                  className="transition-colors hover:bg-gray-50"
                >
                  <td className="px-4 py-2 font-medium text-blue-600 border-b">
                    #{ticket.id}
                  </td>
                  <td className="px-4 py-2 border-b">{ticket.subject}</td>
                  <td className="px-4 py-2 border-b">
                    <span
                      className={clsx(
                        "px-2 py-1 rounded text-xs font-semibold",
                        {
                          "bg-green-100 text-green-700":
                            ticket.status === "abierto",
                          "bg-yellow-100 text-yellow-700":
                            ticket.status === "pendiente",
                          "bg-gray-200 text-gray-700":
                            ticket.status === "cerrado",
                        }
                      )}
                    >
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 border-b">{ticket.updatedAt}</td>
                  <td className="px-4 py-2 text-gray-600 border-b">
                    {ticket.adminFeedback ?? "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MisTickets;
