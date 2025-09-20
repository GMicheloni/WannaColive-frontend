// components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <Link href="/">
          <img src="/logo.png" alt="MiWeb" className="h-10" />
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
  },
};
