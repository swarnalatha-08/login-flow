import LoginForm from "@/components/loginForm";
import SideComp from "@/components/sideComp";
import styles from "./login.module.css";

export default function Login() {
  return (
    <div className={styles.loginDiv}>
      <SideComp />
      <LoginForm />
    </div>
  );
}
