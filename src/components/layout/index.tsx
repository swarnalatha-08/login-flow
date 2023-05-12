import Image from "next/image";
import nlearn from "../../../public/images/nLearn logo color.svg";
import Button from "../atoms/button";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import ForgotFlowBackground from "../forgot_flow_bacground";
import LoginLayout from "./loginLayout";

export default function Layout({ children }: any) {
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();
  const handleLoginBtn = () => {
    router.push("./login");
  };
  useEffect(() => {
    setToken(localStorage.getItem("username"));
  }, []);
  console.log("token", token);

  return (
    <div>
      {router.pathname != "/tc_and_pp" && <LoginLayout />}
      {router.pathname === "/tc_and_pp" && <></>}

      {router.pathname != "/login" &&
        router.pathname != "/" &&
        router.pathname != "/tc_and_pp" && router.pathname != '/home' && <ForgotFlowBackground />}

      {children}
    </div>
  );
}
