import { auth } from "@/auth";
import AdminHeader from "./AdminHeader";

const AdminNavbar = async () => {
  const session = await auth();
  return <AdminHeader user={session?.user} />;
};

export default AdminNavbar;
