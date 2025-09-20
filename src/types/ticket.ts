export default interface Ticket {
  id: number;
  subject: string;
  description: string;
  status: "abierto" | "pendiente" | "cerrado";
  createdAt: string;
  updatedAt: string;
}
