"use client";

import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

export function AuthMenu() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="px-5 py-6 space-y-6">
      {user ? (
        <Link
          className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
          href="/api/auth/logout"
        >
          Logout
        </Link>
      ) : (
        <div>
          <Link
            className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
            href="/api/auth/signup"
          >
            Sign up
          </Link>
          <p className="mt-6 text-base font-medium text-center text-gray-500">
            Existing customer?
            <Link
              href="/api/auth/login"
              className="text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}
