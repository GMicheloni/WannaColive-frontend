import DataTable from "@/components/DataTable";

export const Admin = () => {
  return (
    <div>
      <div className="items-center justify-center p-4 m-4 border border-black border-solid">
        <h1 className="text-2xl font-bold">Panel de Administración</h1>
        <p>Aquí puedes gestionar la aplicación.</p>
        <DataTable />
      </div>
    </div>
  );
};

export default Admin;
