import Ticket from "@/types/ticket";

export const ticketsMockup: Ticket[] = [
  {
    id: 1,
    subject: "Problema con la cuenta",
    description: "No puedo acceder a mi cuenta desde ayer.",
    status: "abierto",
    createdAt: "2023-10-01T10:00:00Z",
    updatedAt: "2023-10-01T10:00:00Z",
    adminFeedback: null,
  },
  {
    id: 2,
    subject: "Mantenimiento del apartamento",
    description: "El aire acondicionado no funciona.",
    status: "pendiente",
    createdAt: "2023-09-28T14:30:00Z",
    updatedAt: "2023-10-02T09:15:00Z",
    adminFeedback: "Estamos trabajando en ello.",
  },
  {
    id: 3,
    subject: "Consulta sobre facturación",
    description: "¿Pueden enviarme una copia de mi última factura?",
    status: "cerrado",
    createdAt: "2023-09-20T08:45:00Z",
    updatedAt: "2023-09-21T11:20:00Z",
    adminFeedback: "Factura enviada por correo electrónico.",
  },
];

export const addTicket = (ticket: Ticket) => {
  ticketsMockup.push(ticket);
};
