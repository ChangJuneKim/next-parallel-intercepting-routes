"use client";
// import { redirect } from "next/navigation";

import { useRouter } from "next/navigation";
import styles from "@/app/page.module.css";
import { imgUrls } from "@/data";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/auth/sign-in", { scroll: false });
  }, [router]);

  // redirect("/auth/sign-in");

  return (
    <div className={styles.gallery}>
      {imgUrls.map((imgUrl, index) => {
        return (
          <Link key={index} href={`/photo/${index}`} scroll={false}>
            <Image
              src={imgUrl}
              alt={imgUrl}
              width={100}
              height={100}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              sizes="60vw"
              priority
            />
          </Link>
        );
      })}
    </div>
  );
}

// redirect 는 서버측에서 동작하기 때문에 인터셉트가 제대로 동작하지않는다.
// 인터셉트 라우트는 클라이언트측(즉, Link를 이용했을때, router navigation을 이용했을 때 동작함)
