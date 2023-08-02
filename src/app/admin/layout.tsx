"use client";
import React, { useState } from "react";

import AdminPanelSideBar from "@/components/layout/adminPanel/AdminPanelSideBar";
import AdminPanelTopBar from "@/components/layout/adminPanel/AdminPanelTopBar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <AdminPanelSideBar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="flex flex-col md:pl-64">
        <AdminPanelTopBar setSidebarOpen={setSidebarOpen} />
        <main className="flex-1">
          <div className="py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              {/* Replace with your content */}
              <div className="py-4">{children}</div>
              {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default AdminLayout;
