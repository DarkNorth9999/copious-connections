import React, { isValidElement } from "react"
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton"
import RedirectInfo from "../../shared/components/RedirectInfo"
import { useNavigate } from "react-router-dom"
import { Tooltip } from "@mui/material"

const getFormNotValidMessage = () => {
  return "Username can contain between 3 and 12 characters, Email Address and Password can contain between 6-12 characters"
}

const getFormValidMessage = () => {
  return "Register now"
}

function RegisterPageFooter({ handleRegister, isFormValid }) {
  const navigate = useNavigate()

  const handlePushToLoginPage = () => {
    navigate("/login")
  }

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label={"Register"}
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleRegister}
          ></CustomPrimaryButton>
        </div>
      </Tooltip>

      <RedirectInfo
        text="Already a member? "
        redirectText={"Login in"}
        additionalStyles={{ marginTop: "0.7rem", gap: "2px" }}
        redirectHandler={handlePushToLoginPage}
      />
    </>
  )
}

export default RegisterPageFooter
