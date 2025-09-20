export const Ticket = (
  subject: string,
  description: string,
  status: string,
  createdAt: string,
  updatedAt: string
) => {
  return (
    <div>
      <div>asunto: {subject}</div>
      <div>descripción: {description}</div>
      <div>estado: {status}</div>
      <div>creado el: {createdAt}</div>
      <div>actualizado el: {updatedAt}</div>
      <div
        style={{
          color:
            status === "cerrado"
              ? "green"
              : status === "pendiente"
              ? "yellow"
              : "red",
        }}
      >
        {status === "cerrado" ? "Ticket cerrado" : "Ticket abierto"}
      </div>
    </div>
  );
};

export default Ticket;
