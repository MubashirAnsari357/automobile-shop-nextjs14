import AboutForm from "@/components/AboutForm";
import ProfileForm from "@/components/ProfileForm";
import { getUser, getWebData } from "@/lib/Data/data";
import React from "react";

const Profile = async () => {
  const id = "65b7496de61d28844d4c68ac";
  const user = await getUser(id);
  console.log(user);
  return (
    <div className="p-6 max-w-3xl w-full max-h-full mx-auto">
      <div className="bg-white rounded-lg shadow-xl">
        <div className="items-center justify-between p-4 md:p-5 border-b rounded-t">
          <h3 className="text-lg font-semibold px-5 text-gray-900 ">Profile</h3>
          <ProfileForm edit={true} user={user} id={user?._id} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
