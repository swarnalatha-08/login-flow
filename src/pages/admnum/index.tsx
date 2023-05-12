import Button from "@/components/atoms/button";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./styles.module.css";
import forgotImg from "../../../public/images/Dialog Box Illustration_LOGIN.svg";
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

export default function Forgetpassword() {
  const [admissionNum, setAdmissionNum] = useState("");
  const [mobileNum, setMobileNum] = useState("");
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAdmNum = (e: any) => {
    setAdmissionNum(e.target.value);
  };
  const handleMobileNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.target.value;
    const numbersOnly = inputVal.replace(/[^0-9]/g, "");
    // setMobileNum(numbersOnly);
    if (numbersOnly.length <= 10) {
      setMobileNum(numbersOnly);
    }
  };
  

  const handleProceed = () => {
    if (admissionNum.length) {
      router.push("/phone_number");
    } else {
      alert("please enter admission number and 10 digit phone number");
    }
    
  };
  const handleSendOTP = () => {
    if(admissionNum.length && mobileNum.length === 10){
      router.push("/otp");
    }
    else{
      alert('please enter admission number and 10 digit phone number')
    }
   
    localStorage.setItem('phoneNumber',mobileNum)
  };
  return (
    <ForgotPasswordCard
      src={forgotImg}
      alt="forgot"
      description={
        <>
          <b>No worries! </b> To reset your password, simply enter your
          admission number. We'll send an OTP to the mobile number associated
          with your account.
        </>
      }
    >
      <div className={styles.dailogueRightDiv}>
        <div className={styles.dataDiv}>
          <span className={styles.forgotPasswordHeading}>Forgot Password</span>
          <label style={{ marginBottom: "12px" }}>Enter Admission Number</label>
          <input
            value={admissionNum}
            placeholder="enter admission number"
            onChange={handleAdmNum}
            className={styles.inputAdmNUm}
          />
          {router.pathname === "/phone_number" && (
            <>
              <label style={{ marginBottom: "12px" }}>
                Registerd Mobile Number
              </label>
              <input
                value={mobileNum}
                placeholder="enter mobile number"
                onChange={handleMobileNum}
                className={styles.inputAdmNUm}
                style={{ marginBottom: "48px" }}
                max={10}
              />
            </>
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div>
            <span>
              Facing issues?
              <span
                style={{ textDecoration: "underline", color: "#2065d1" }}
                onClick={onOpen}
              >
                Get Help
              </span>
            </span>
            {/* <DailogueModal /> */}
            <Modal isOpen={isOpen} onClose={onClose} isCentered >
              
              <ModalOverlay />

              <ModalContent>
                <ModalHeader>
                  <ModalCloseButton />
                </ModalHeader>

                <ModalBody>
                  <div style={{display:'flex',justifyContent:'center'}}>
                  <div style={{width:'146.4px',height:'124px',border:'1px solid black'}}></div>
                  </div>
                 
                </ModalBody>
                <ModalFooter style={{display:'flex',flexDirection:'column'}}>
                  <h4>Contact Administrator</h4>
                  <h6 style={{textAlign:'center'}}>Please contact your school admin or principal if you are currently facing any issues.</h6>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
          <Button
            label={
              (router.pathname === "/admnum" && "proceed") ||
              (router.pathname === "/phone_number" && "send OTP")
            }
            onClick={
              (router.pathname === "/admnum" && handleProceed) ||
              (router.pathname === "/phone_number" && handleSendOTP)
            }
            disabled={admissionNum.length ? false : true}
            className={styles.proceedBtn}
          />
        </div>
      </div>
    </ForgotPasswordCard>
  );
}

/*

 <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "316px",
            }}
          >
            <span className={styles.forgotPasswordHeading}>
              Forgot Password
            </span>
            <label style={{ marginBottom: "12px" }}>
              Enter Admission Number
            </label>
            <input
              placeholder="enter admission number"
              onChange={handleAdmNum}
              className={styles.inputAdmNUm}
            />
            {router.pathname === "/phone_number" && (
              <>
                <label style={{ marginBottom: "12px" }}>
                  Registerd Mobile Number
                </label>
                <input
                  placeholder="enter mobile number"
                  onChange={handleAdmNum}
                  className={styles.inputAdmNUm}
                  style={{ marginBottom: "56px" }}
                />
              </>
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
            }}
          >
            <div>
              <span>
                Facing issues?
                <span style={{ textDecoration: "underline", color: "#2065d1" }}>
                  Get Help
                </span>
              </span>
            </div>
            <Button
              label={
                (router.pathname === "/admnum" && "proceed") ||
                (router.pathname === "/phone_number" && "send OTP")
              }
              onClick={
                (router.pathname === "/admnum" && handleProceed) ||
                (router.pathname === "/phone_number" && handleSendOTP)
              }
              disabled={admissionNUm.length ? false : true}
              style={{
                width: "100%",
                height: "56px",
                borderRadius: "32px",
                backgroundColor: "#ec8936",
                color: "#000",
                border: "none",
              }}
            />
          </div>
        </div>
*/
