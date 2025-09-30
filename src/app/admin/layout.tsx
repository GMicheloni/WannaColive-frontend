"use client";
import React from "react";
import SideBar from "@/components/SideBar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar fija */}
      <aside className="w-64 p-4 text-white bg-gray-900">
        <h2 className="mb-4 text-xl font-bold">Panel Admin</h2>
        <SideBar />
      </aside>

      {/* Contenido dinámico */}
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
}
