// components/Footer.tsx
export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2025 MiWeb. Todos los derechos reservados.</p>
      <div style={styles.links}>
        <a href="#">Política de Privacidad</a> |{" "}
        <a href="#">Términos de Servicio</a>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    padding: "2rem",
    backgroundColor: "#1f2937",
    color: "#fff",
    marginTop: "2rem",
  },
  links: {
    marginTop: "0.5rem",
    fontSize: "0.9rem",
  },
};
