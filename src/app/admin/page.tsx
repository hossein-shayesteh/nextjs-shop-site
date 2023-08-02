import { redirect } from "next/navigation";

const AdminPanelLayout = () => {
  return redirect("/admin/dashboard");
};

export default AdminPanelLayout;
