import { useState } from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
// import Button from "../atoms/button";
import FormField from "../atoms/formfield";
import Image from "next/image";
import styled from "styled-components";
import visibleEYE from "../../../public/images/Icons_Action_visibility_24px.svg";
import visibleEyeOff from "../../../public/images/Icons_Action_visibility_off_24px.svg";
import Button, { Variant } from "../atoms/Btn";
import leftArrow from "../../../public/images/left arrow.svg";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { isDataView } from "util/types";

export default function LoginForm({ children, ...rest }: any) {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(true);
  const [view, setView] = useState(false);

  const router = useRouter();
  console.log("ischecked ", isChecked);

  const handleUsername = (e: any) => {
    setusername(e.target.value);
  };

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleViewIcon = () => {
    setView((current) => !current);
  };
  const handleIsChecked = () => {
    setIsChecked((current) => !current);
  };
  const handleForgotpassword = () => {
    router.push('./admnum')
  }

  // const StyledBtn = styled(Button)`
  //   background-color: ${({ isChecked }) => (isChecked ? "#ec8936" : "#f9c685")};
  //   border: ${({ isChecked }) => (isChecked ? "#ec8936" : "#f9c685")};
  //   color: ${({ isChecked }) => (isChecked ? "#000" : "#ec8936")};
  //   height: 48px;
  //   width: 180px;
  //   display: flex;
  //   flex-direction: row;
  //   justify-content: center;
  //   align-items: center;
  //   gap: 12px;
  //   padding: 12px 24px;
  //   border-radius: 32px;
  // `;

  const handleSubmit = () => {
    localStorage.setItem("username", username);
    if (username.length > 0 && password.length > 0) {
      return router.push("./home");
    } else {
      return alert("please enter username and password");
    }
  };

  return (
    <div className={styles.loginFormMainDiv} {...rest}>
      <div className={styles.loginform}>
        <span className={styles.welcome}>
          Welcome to <span className={styles.n}>n</span>Learn
        </span>
        <p className={styles.description}>
          Your gateway to an exciting learning journey. Log in and start
          exploring!
        </p>
        <div className={styles.addNumDiv}>
          <label className={styles.addNumLabel}>Admission Number</label>

          <InputGroup>
            <Input
              className={styles.addNumInput}
              placeholder="Enter"
              onChange={handleUsername}
              autoFocus={false}
              _focus={{ border: "none" }}
            />
          </InputGroup>
        </div>
        <div className={styles.passwordDiv}>
          <label className={styles.passwordLabel}>Password</label>
          <InputGroup style={{ width: "100%" }} className={styles.PasswordDivWithInputAndIcon}>
            <Input
              className={styles.passwordInput}
              placeholder="Enter"
              onChange={handlePassword}
              type={view ? "text" : "password"}
              autoFocus={false}
              _focus={{ border: "none" }}
            />
            <InputRightElement
              children={
                <div>
                  <Image
                    src={view ? visibleEYE : visibleEyeOff}
                    alt={view ? "visibleEye" : "visibleEyeOff"}
                    className={styles.visibleIcon}
                    onClick={handleViewIcon}
                    color="red"
                  />
                </div>
              }
            />
          </InputGroup>
        </div>
        <div className={styles.checkBoxInputDiv}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleIsChecked}
            style={{display:'flex'}}
          />
          <span className={styles.TCandPP}>
            By checking this box, you accept our{" "}
            <Link href="./tc_and_pp" style={{ color: "#212b36" }}>
              Terms & Condition and Privacy policy
            </Link>
          </span>
        </div>

        <div className={styles.forgotPasswordDiv}>
          {/* <Link
            href="./admnum"
            style={{ color: "#212b36", textDecoration: "none" }}
          >
            Forgot Password?
          </Link> */}
          <Button
            variant={Variant["link"]}
            btnTxt="Forgot Password?"
            onClick={handleForgotpassword}
          />
          <Button
            onClick={handleSubmit}
            btnTxt="submit"
            // variant={Variant["unstyled"]}
            borderRadius="32px"
            fontSize="16px"
            height="48px"
            w="200px"
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor:
                username.length && password.length && isChecked === true
                  ? "#ec8936"
                  : "#f9c685",
              border:
                username.length && password.length && isChecked === true
                  ? "#ec8936"
                  : "#f9c685",
              color:
                username.length && password.length && isChecked === true
                  ? "#000"
                  : "#aa4b1b",
            }}
            className={styles.LoginBtn}
          />
          {/* <StyledBtn
            label="login"
            isChecked={isChecked}
            onClick={handleSubmit}
            disabled={
              username.length && password.length && isChecked ? false : true
            }
            className={styles.LoginBtn}
            style={{backgroundColor: isChecked ? '#f9c685': '#ec8936' }}
          /> */}
          {/* <Button
            label="login"
            isChecked={isChecked}
            onClick={handleSubmit}
            className={styles.LoginBtn}
            disabled={
              username.length && password.length && isChecked ? false : true
            }
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor:
                username.length && password.length && isChecked === true
                  ? "#ec8936"
                  : "#f9c685",
              border:
                username.length && password.length && isChecked === true
                  ? "#ec8936"
                  : "#f9c685",
              color:
                username.length && password.length && isChecked === true
                  ? "#000"
                  : "#aa4b1b",
            }}
          /> */}
        </div>
      </div>
    </div>
  );
}
