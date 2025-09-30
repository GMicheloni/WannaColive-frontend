import TablaTickets from "@/components/TablaTickets";

export const Ticket = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Manejo de Tickets</h1>
      <p>Aquí puedes gestionar los tickets de soporte.</p>
      <p>
        Utiliza las herramientas a continuación para administrar los tickets.
      </p>
      <TablaTickets />
    </div>
  );
};
export default Ticket;
