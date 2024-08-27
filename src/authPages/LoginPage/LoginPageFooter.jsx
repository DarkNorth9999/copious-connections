import React, { isValidElement } from "react"
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton"
import RedirectInfo from "../../shared/components/RedirectInfo"
import { useNavigate } from "react-router-dom"
import { Tooltip } from "@mui/material"

const getFormNotValidMessage = () => {
  return "Email Address and password should contain between 6-12 characters"
}

const getFormValidMessage = () => {
  return "Login In"
}

function LoginPageFooter({ handleLogin, isFormValid }) {
  const navigate = useNavigate()

  const handlePushToRegisterPage = () => {
    navigate("/register")
  }

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label={"Log in"}
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleLogin}
          ></CustomPrimaryButton>
        </div>
      </Tooltip>

      <RedirectInfo
        text="Need an account? "
        redirectText={"Register"}
        additionalStyles={{ marginTop: "0.7rem", gap: "2px" }}
        redirectHandler={handlePushToRegisterPage}
      />
    </>
  )
}

export default LoginPageFooter
