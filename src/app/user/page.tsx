"use client";

import UserForm from "../../components/UserForm/UserForm";
import Image from "next/image";
import { postUser } from "../../api/user/userApi";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function User() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const onSubmit = (data: any) => {
    console.log(data);
    postUser(data);
  };
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      {user && (
        <div>
          {user.picture && user.name && (
            <div className="relative w-10 h-10">
              <Image
                className="rounded-full"
                fill={true}
                src={user.picture}
                alt={user.name}
              />
            </div>
          )}
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
      <UserForm onSubmit={onSubmit} />
    </main>
  );
}
