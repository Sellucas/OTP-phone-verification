import { BsFillShieldLockFill } from "react-icons/bs";
import OtpInput from "otp-input-react";

function App() {
  return (
    <div className="bg-emerald-500 flex items-center- justify-center h-screen">
      <div>
        <div className="w-80 flex flex-col gap-4 rounded p-4">
          <h1 className="text-center leading-normal text-white font-medium text-3xl mb-6">
            OTP Phone Verification
          </h1>
          <>
            <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full ">
              <BsFillShieldLockFill size={30} />
            </div>
            <label
              htmlFor="ph"
              className="font-bold text-2xl text-white text-center"
            >
              Enter your OTP
            </label>
            <OtpInput
              OTPLength={6}
              otpType="number"
              disabled={false}
              autoFocus
              className="otp-container"
            ></OtpInput>
          </>
        </div>
      </div>
    </div>
  );
}

export default App;
