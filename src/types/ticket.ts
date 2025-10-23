export default interface Ticket {
  id?: number;
  asunto: string;
  descripcion: string;
  estado?: "abierto" | "pendiente" | "cerrado";
  creadoEl?: string;
  actualizadoEn?: string;
  comentarioAdmin?: string | null;
}
