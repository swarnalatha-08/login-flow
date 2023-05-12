import Button from "@/components/atoms/button";
import style from "./styles.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import changePasswordImg from "../../../public/images/dailogue box change password.svg";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import visibleEye from "../../../public/images/Icons_Action_visibility_24px.svg";
import visibleEyeOff from "../../../public/images/Icons_Action_visibility_off_24px.svg";
import styles from "./styles.module.css";
import ForgotPasswordCard from "@/components/molecules/forgotpassword_card";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Variant } from "@/components/atoms/Btn";

export default function Resetpassword() {
  const [newPassword, setNewPasswrod] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const [NewPasswordViewIcon, setNewPasswordViewIcon] = useState(false);
  const [VerifyPasswordViewIcon, setVerifyPasswordViewIcon] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleNewPasswordViewIcon = () => {
    setNewPasswordViewIcon((current) => !current);
  };
  const handleVerifyPasswordViewIcon = () => {
    setVerifyPasswordViewIcon((current) => !current);
  };
  const handleNewPassword = (e: any) => {
    setNewPasswrod(e.target.value);
  };

  const handleVerifyPassword = (e: any) => {
    setConfirmPassword(e.target.value);
  };
  // const handleUpdatePassword = () => {
  // if (newPassword.length && confirmPassword.length) {
  //   if (newPassword === confirmPassword) {
  //     router.push("./login");
  //   } else {
  //     alert("new password and confirm password are not same");
  //   }
  // } else {
  //   alert("enter both new password and confirm password");
  // }
  // setNewPasswrod("");
  // setConfirmPassword("");
  // if (newPassword && confirmPassword  && newPassword=== confirmPassword) {
  //   open();
  // } else {
  //   alert("new password and confirm password are not matched");
  // }
  // };

  const handleUpdatePassword = () => {
    console.log("newpassword", newPassword);
    console.log("confirm password", confirmPassword);
    if (newPassword === confirmPassword) {
      onOpen();
    }
    // else{
    //   alert('new password and confirm password are not matched')
    // }
  };
  const ProceedToLogin = () => {
    router.push("./login");
  }
  return (
    <ForgotPasswordCard
      src={changePasswordImg}
      alt="changePasswordImg"
      description={
        <>
          Create a new and secure password to continue your learning journey
          with ease.
        </>
      }
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "316px",
          }}
        >
          <span className={styles.changePasswordHeading}>Change Password</span>

          <label style={{ marginBottom: "12px" }}>Enter New Password</label>
          <InputGroup>
            <Input
              className={styles.NewPasswordInput}
              placeholder="Enter"
              type={NewPasswordViewIcon ? "text" : "password"}
              onChange={handleNewPassword}
              autoFocus={false}
              _focus={{ border: "none" }}
            />
            <InputRightElement
              children={
                <div>
                  <Image
                    src={NewPasswordViewIcon ? visibleEye : visibleEyeOff}
                    alt={NewPasswordViewIcon ? "visibleEye" : "visibleEyeOff"}
                    onClick={handleNewPasswordViewIcon}
                    className={styles.visibleIcon}
                  />
                </div>
              }
            />
          </InputGroup>
          <label style={{ marginBottom: "12px", marginTop: "24px" }}>
            Verify New Password
          </label>
          <InputGroup>
            <Input
              type={VerifyPasswordViewIcon ? "text" : "password"}
              className={styles.NewPasswordInput}
              placeholder="Enter"
              onChange={handleVerifyPassword}
              autoFocus={false}
              _focus={{ border: "none" }}
            />
            <InputRightElement
              children={
                <div>
                  <Image
                    src={VerifyPasswordViewIcon ? visibleEye : visibleEyeOff}
                    alt={
                      VerifyPasswordViewIcon ? "visibleEye" : "visibleEyeOff"
                    }
                    onClick={handleVerifyPasswordViewIcon}
                    className={styles.visibleIcon}
                  />
                </div>
              }
            />
          </InputGroup>
        </div>
        <div>
          <Button
            label="Update Password"
            className={styles.updatePasswordBtn}
            onClick={handleUpdatePassword}
          />
          <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />

            <ModalContent>
              <ModalHeader>
                <ModalCloseButton />
              </ModalHeader>

              <ModalBody>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div
                    style={{
                      width: "146.4px",
                      height: "124px",
                      border: "1px solid black",
                    }}
                  ></div>
                </div>
              </ModalBody>
              <ModalFooter style={{ display: "flex", flexDirection: "column" }}>
                <h4>Password Updated</h4>
                <h6 style={{ textAlign: "center" }}>
                  Your old password is updated. Please use your new password for
                  login.
                </h6>
                <button onClick={ProceedToLogin} style={{border:'1px solid red'}}>Proceed to Login</button>
                {/* <Button btnTxt='Proceed to Login'/> */}
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </div>
    </ForgotPasswordCard>
  );
}
