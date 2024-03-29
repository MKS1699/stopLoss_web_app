"use client";
import React from "react";
import { AdminTitleBar, PanelScreen } from "./components";

const AdminPanel = () => {
  return (
    <main className="w-full h-screen overflow-auto scrollbar-none bg-white dark:bg-[#4cb050] relative">
      <AdminTitleBar />
      <PanelScreen />
    </main>
  );
};

export default AdminPanel;
