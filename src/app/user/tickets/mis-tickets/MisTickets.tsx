"use client";
import { useEffect, useState } from "react";
import Ticket from "@/types/ticket";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import clsx from "clsx";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const MisTickets = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.error("No hay token disponible");
          return;
        }

        const response = await fetch(`${API_URL}/tickets`, {
          headers: {
            Authorization: `Bearer ${token}`, // 👈 se manda el JWT
          },
        });

        if (!response.ok) {
          throw new Error("Error al obtener los tickets");
        }

        const data = await response.json();
        console.log(data);
        setTickets(data); // 👈 el backend devuelve los tickets del usuario
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  if (loading) {
    return <p className="p-4 text-center">Cargando tickets...</p>;
  }

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
              {tickets.map((ticket: any, index: number) => (
                <tr
                  key={ticket.id ?? index}
                  className="transition-colors hover:bg-gray-50"
                >
                  <td className="px-4 py-2 font-medium text-blue-600 border-b">
                    #{ticket.id ?? index}
                  </td>
                  <td className="px-4 py-2 border-b">
                    {ticket.asunto?.tipo ?? "—"}
                  </td>
                  <td className="px-4 py-2 border-b">
                    <span
                      className={clsx(
                        "px-2 py-1 rounded text-xs font-semibold",
                        {
                          "bg-green-100 text-green-700":
                            ticket.estado === "Abierto",
                          "bg-gray-200 text-gray-700":
                            ticket.estado === "Cerrado",
                        }
                      )}
                    >
                      {ticket.estado}
                    </span>
                  </td>
                  <td className="px-4 py-2 border-b">
                    {new Date(ticket.actualizadoEn).toLocaleString()}
                  </td>
                  <td className="px-4 py-2 text-gray-600 border-b">
                    {ticket.comentarioAdmin ?? "—"}
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
