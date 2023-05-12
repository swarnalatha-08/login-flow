import Image from "next/image";
import styles from "./styles.module.css";
import eyeIcon from "../../../../public/images/Icons_Action_visibility_24px.svg";

export default function FormField({ children, label, ...rest }: any) {
  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        // width: "100%",
        gap: "8px",
      }}
    >
      <label {...rest}> {label} &nbsp;&nbsp;</label>
      <input className={styles.Input} {...rest} />
    </div>
  );
}
