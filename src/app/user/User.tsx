// app/user/page.tsx (ejemplo)
import ConfirmationNumberRoundedIcon from "@mui/icons-material/ConfirmationNumberRounded";
import { Card } from "../../components/Card";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BuildIcon from "@mui/icons-material/Build";
import HelpIcon from "@mui/icons-material/Help";
export const User = () => {
  return (
    <div className="p-4 m-4 border border-black border-solid">
      <div className="flex flex-wrap items-center justify-center gap-4 p-4">
        <Card
          title="Tickets"
          icon={<ConfirmationNumberRoundedIcon />}
          href="/user/tickets"
        />
        <Card
          title="Perfil"
          icon={<AccountCircleIcon />}
          href="/user/profile"
        />
        <Card
          title="Configuración"
          icon={<BuildIcon />}
          href="/user/settings"
        />
        <Card title="Ayuda" icon={<HelpIcon />} href="/user/help" />
      </div>
    </div>
  );
};

export default User;
