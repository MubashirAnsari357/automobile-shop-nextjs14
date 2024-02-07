"use client";
import { authenticate } from "@/lib/Actions/actions";
import Link from "next/link";
import React, { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { EyeIcon, EyeSlashIcon } from "./icons";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { pending } = useFormStatus();

  return (
    <form action={formAction} className="mt-6">
      <div>
        <label htmlFor="email" className="block text-gray-700">
          Email:
        </label>
        <input
          type="email"
          className="w-full px-4 py-3 mt-2 bg-white rounded-lg"
          name="email"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="mt-5">
        <div>
          <label htmlFor="password" className="text-gray-700">
            Password:
          </label>
          <div className="relative flex items-center mt-2">
            <input
              type={`${passwordVisible ? "text" : "password"}`}
              className="w-full px-4 py-3 bg-white rounded-lg"
              name="password"
              placeholder="Enter password"
              required
            />
            <button
              type="button"
              className="absolute right-0 mr-3 "
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? (
                <EyeIcon className={"w-5 h-5"} />
              ) : (
                <EyeSlashIcon className={"w-5 h-5"} />
              )}
            </button>
          </div>
        </div>
      </div>
      {state && <p className={`text-red-500 mt-4`}>{state}</p>}
      <div className="mt-4 text-right">
        <Link
          href="#"
          className="text-sm font-semibold text-blue-700 hover:underline"
        >
          forgot password?
        </Link>
      </div>
      <button
        disabled={pending}
        className="primary-btn w-full mt-4"
        type="submit"
      >
        {pending ? "LOGGING IN..." : "LOGIN"}
      </button>
      {/* <p className="mt-6 text-gray-700">
        Need an account? {" "}
        <Link
          href="/signup"
          className="font-semibold text-blue-500 hover:text-blue-700"
        >
          Create an account
        </Link>
      </p> */}
    </form>
  );
};

export default LoginForm;
