"use client";

import LoginPage from "@/components/Forms/LoginPage";
import { useRouter } from "next/navigation";

export default function LoginPageWrapper() {
  const router = useRouter();

  return <LoginPage router={router} />;
}
