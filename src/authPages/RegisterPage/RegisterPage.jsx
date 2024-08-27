import React, { useEffect, useState } from "react"
import AuthBox from "../../shared/components/AuthBox"
import RegisterPageHeader from "./RegisterPageHeader"
import RegisterPageInputs from "./RegisterPageInputs"
import RegisterPageFooter from "./RegisterPageFooter"
import { validateRegisterForm } from "../../shared/utils/validators"
import { getActions } from "../../store/actions/authActions"
import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"
import { register } from "../../api"

function RegisterPage({ register }) {
  const navigate = useNavigate()
  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")

  const [isFormValid, setIsFormValid] = useState(false)

  const handleRegister = () => {
    register({ mail, password, username }, navigate)
  }

  useEffect(() => {
    setIsFormValid(validateRegisterForm({ mail, username, password }))
  }, [mail, password, username, setIsFormValid])

  return (
    <AuthBox>
      <RegisterPageHeader />
      <RegisterPageInputs
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
        username={username}
        setUsername={setUsername}
      />
      <RegisterPageFooter
        isFormValid={isFormValid}
        handleRegister={handleRegister}
      />
    </AuthBox>
  )
}
const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  }
}

export default connect(null, mapActionsToProps)(RegisterPage)
