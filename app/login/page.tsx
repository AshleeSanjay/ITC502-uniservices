"use client";

import LoginPage from "../../pages/login/LoginPage";
import { useRouter } from "next/navigation";

export default function LoginPageWrapper() {
  const router = useRouter();

  return <LoginPage router={router} />;
}
