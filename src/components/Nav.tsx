import Link from "next/link";
import styles from "@/components/Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/auth/sign-in" className={styles.navLink} scroll={false}>
        로그인
      </Link>
      <Link href="/auth/sign-up" className={styles.navLink} scroll={false}>
        회원가입
      </Link>
    </nav>
  );
}
