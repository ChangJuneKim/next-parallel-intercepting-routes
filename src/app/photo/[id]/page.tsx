import Image from "next/image";
import { imgUrls } from "@/data";
import styles from "@/app/photo/[id]/page.module.css";
import Modal from "@/components/Modal";

export default function PhotoPage({
  params: { id },
}: {
  params: { id: number };
}) {
  return (
    <Modal>
      <div className={styles.container}>
        <Image
          src={imgUrls[id]}
          alt={imgUrls[id]}
          width={100}
          height={100}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          sizes="60vw"
          priority
        />
      </div>
    </Modal>
  );
}
