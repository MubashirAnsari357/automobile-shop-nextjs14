import LoginForm from "@/components/LoginForm";
import React from "react";

const Login = () => {
  return (
    <section className="font-poppins">
      <div className="px-0 mx-auto lg:px-6">
        <div className="flex flex-col items-center h-full md:flex-row">
          <div className="flex items-center justify-center h-screen max-w-full px-0 md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 lg:px-16 xl:px-12">
            <div className="z-10 w-full p-10 bg-gray-100 h-100">
              <h2 className="text-xl font-bold leading-tight mb-7 md:text-3xl">
                Login to your account
              </h2>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
