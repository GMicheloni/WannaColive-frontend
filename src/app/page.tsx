"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      try {
        const payload = JSON.parse(atob(storedToken.split(".")[1])); // decodifica JWT
        console.log("Payload del token:", payload);
        if (payload.role === "admin") {
          router.push("/admin");
        } else if (payload.role === "user") {
          router.push("/user");
        }
        // si rol desconocido, no redirige, se queda en la home
      } catch (err) {
        console.error("Token inválido:", err);
        // no redirige, se queda en la home pública
      }
    }
    // si no hay token, no hace nada, se queda en la home pública
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-bold">Bienvenido a WannaColive App</h1>
        <p className="max-w-md text-lg">
          Esta es la página principal pública. Para acceder a tus
          funcionalidades, inicia sesión.
        </p>
      </div>
    </div>
  );
}
