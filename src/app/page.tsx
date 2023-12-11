import { imgUrls } from "@/data";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/page.module.css";

export default function Home() {
  return (
    <div className={styles.gallery}>
      {imgUrls.map((imgUrl, index) => {
        return (
          <Link key={index} href={`/photo/${index}`}>
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
