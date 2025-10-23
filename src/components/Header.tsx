"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token"); // elimina el token
    router.push("/"); // redirige a la home pública
  };

  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="MiWeb"
            className="h-10"
            width={40}
            height={40}
          />
        </Link>
      </div>
      <nav>
        <ul style={styles.navList}>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/signup">Registrarse</Link>
          </li>
          <li>
            <Link href="/signin">Iniciar Sesión</Link>
          </li>
          <li>
            {/* Botón de deslogueo */}
            <button onClick={handleLogout} style={styles.logoutButton}>
              Cerrar Sesión
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#1f2937",
    color: "#fff",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  navList: {
    display: "flex",
    gap: "1.5rem",
    listStyle: "none",
    alignItems: "center",
  },
  logoutButton: {
    backgroundColor: "#ef4444",
    color: "#fff",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "0.375rem",
    cursor: "pointer",
  },
};
