"use client";

import Link from "next/link";
import styles from "@/components/Modal.module.css";
import { usePathname } from "next/navigation";

export default function Modal({
  children,
  bg = "no",
}: {
  children: React.ReactNode;
  bg?: "intercept" | "no";
}) {
  const pathname = usePathname();

  if (pathname === "/") return null;
  return (
    <div>
      <Link
        href="/"
        className={`${bg === "no" ? styles.modal : styles.modalLight}`}
        scroll={false}
      />
      {children}
    </div>
  );
}
