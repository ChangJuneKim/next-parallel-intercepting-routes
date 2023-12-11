"use client";
// import { redirect } from "next/navigation";

import { useRouter } from "next/navigation";
import Home from "@/app/page";

export default function LoginPage() {
  const router = useRouter();
  router.replace("/auth/sign-in", { scroll: false });
  // redirect("/auth/sign-in");

  return <Home />;
}

// redirect 는 서버측에서 동작하기 때문에 인터셉트가 제대로 동작하지않는다.
// 인터셉트 라우트는 클라이언트측(즉, Link를 이용했을때, router navigation을 이용했을 때 동작함)
