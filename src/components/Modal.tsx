import Link from "next/link";
import styles from "@/components/Modal.module.css";

export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Link href="/" className={styles.modal} />
      {children}
    </div>
  );
}
