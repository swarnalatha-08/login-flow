// import Button from "@/components/atoms/button";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
// import OtpInput from "react-otp-input";
import otpImg from "../../../public/images/Dialog Box Illustration_LOGIN.svg";
import styles from "./styles.module.css";
import ForgotPasswordCard from "@/components/molecules/forgotpassword_card";
import OtpInput from "react18-input-otp";
import Button, { Variant } from "@/components/atoms/Btn";

// export interface OTPInputProps {
//     inputType: NumberLiteralType |string |  undefined
// }
export default function OTP() {
  const [otp, setOtp] = useState("");
  const router = useRouter();
  const [time, setTime] = useState(30);
  const [phNum, setphNum] = useState<string>("");
  console.log("typeof phnum", phNum);
  // const handleChange = (enteredOtp) => {
  //   setOtp(enteredOtp);
  // };
  const handleResendOtp = () => {
    router.reload();
  };
  const handleVerifyOTP = () => {
    router.push("./reset_password");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const formattedTime = time.toString().padStart(2, "0");

  useEffect(() => {
    const phoneNumber = localStorage.getItem("phoneNumber") ?? "";
    setphNum(phoneNumber);
  }, []);
  const maskedNumber = phNum.replace(/(\d{2})\d+(\d{3})/, "$1xxxxx$2");
  return (
    <ForgotPasswordCard
      src={otpImg}
      alt="otpImg"
      description={
        <>
          We’ve sent a One Time Password (OTP) to the registered mobile number
          &nbsp;
          {`${maskedNumber}`}
        </>
      }
    >
      <div
        style={{
          width: "324px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            flexDirection: "column",
            color: "#21236",
            width: "100%",
          }}
        >
          <h2 style={{ fontSize: "28px" }}>OTP Verification</h2>
          <h3 style={{ fontSize: "16px",marginTop:'24px',marginBottom:'8px' }}>Enter OTP here</h3>

          {/* <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            inputStyle={{
              width: "3rem",
              height: "3rem",
              margin: "8px",
              fontSize: "2rem",
              borderRadius: 4,
              border: "1px solid rgba(0,0,0,0.3)",
            }}
            renderInput={(props) => <input {...props} />}
          /> */}
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            isInputNum
            inputStyle={{
              width: "48px",
              height: "48px",
              margin: "8px 16px 8px 0px",
              fontSize: "2rem",
              borderRadius: 4,
              // border: "1px solid rgba(0,0,0,0.3)",
              // margin:'8px',
              backgroundColor: "#edf6fd",
              border: "none",
            }}
            // isInputSecure={true}
            shouldAutoFocus
          />
          {time > 0 ? (
            <span style={{ marginTop: "24px" }}>
              please wait for &nbsp;
              <span style={{ color: time < 9 ? "#db3723" : "#212b36" }}>
                00:{`${formattedTime}`}
              </span>
            </span>
          ) : null}

          <Button
            variant={Variant.link}
            btnTxt="RESEND OTP"
            style={{
              textDecoration: "underline",
              marginTop: "8px",
              color: time === 0 ? "#2065d1" : "#454f5b",
            }}
            onClick={handleResendOtp}
          />
        </div>
        <Button
          btnTxt="Verify OTP"
          onClick={handleVerifyOTP}
          disabled={otp.length === 4 ? false : true}
          style={{
            width: "100%",
            height: "56px",
            borderRadius: "32px",
            backgroundColor: otp.length === 4 ? "#ec8936" : "#f9c685",
            color: otp.length === 4 ? "#000" : "#aa4b1b",
            border: "none",
          }}
        />
      </div>
    </ForgotPasswordCard>
  );
}
