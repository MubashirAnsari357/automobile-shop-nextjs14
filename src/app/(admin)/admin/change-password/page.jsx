import { auth } from "@/auth";
import ChangePasswordForm from "@/components/ChangePasswordForm";
import React from "react";

const ChangePassword = async () => {
  const session = await auth();
  return (
    <div className="p-6 max-w-3xl w-full max-h-full mx-auto">
      <div className="bg-white rounded-lg shadow-xl">
        <div className="items-center justify-between p-4 md:p-5 border-b rounded-t">
          <h3 className="text-lg font-semibold px-5 text-gray-900 ">Change Password</h3>
          <ChangePasswordForm edit={true} email={session?.user?.email} />
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
