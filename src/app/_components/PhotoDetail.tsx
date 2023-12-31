import Image from "next/image";
import { imgUrls } from "@/data";
import styles from "@/app/_components/PhotoDetail.module.css";
import Modal from "@/components/Modal";

export default function PhotoDetail({
  id,
  bg = "no",
}: {
  id: number;
  bg?: "intercept" | "no";
}) {
  return (
    <Modal bg={bg}>
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
