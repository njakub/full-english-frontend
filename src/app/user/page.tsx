"use client";

import UserForm from "../../components/UserForm/UserForm";
import { postUser } from "../../api/user/userApi";

export default function User() {
  const onSubmit = (data: any) => {
    console.log(data);
    postUser(data);
  };
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <UserForm onSubmit={onSubmit} />{" "}
    </main>
  );
}
