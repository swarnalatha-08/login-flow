import Image from "next/image";
import styles from "./styles.module.css";
import { useRouter } from "next/router";

export default function ForgotPasswordCard({
  src,
  alt,
  description,
  children,
}: any) {
  const router = useRouter();
  return (
    <div className={styles.dailogueDiv}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "308px",
          justifyContent: "space-between",
        }}
      >
        <Image
          src={src}
          alt={alt}
          style={{
            marginBottom: router.pathname === "/phone_number" ? "0" : "48px",
          }}
        />
        <span style={{textAlign:'center',fontSize:'16px'}}>{description}</span>
      </div>
      <div>{children}</div>
    </div>
  );
}
