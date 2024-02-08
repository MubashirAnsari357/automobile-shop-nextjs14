import { auth } from "@/auth";
import AdminHeader from "./AdminHeader";
import { getUserById } from "@/lib/Actions/actions";

const AdminNavbar = async () => {
  const session = await auth();
  const user = await getUserById(session?.user?.id);
  return <AdminHeader user={user} />;
};

export default AdminNavbar;
