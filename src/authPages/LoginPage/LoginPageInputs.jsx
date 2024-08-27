import React from "react"
import InputWithLabel from "../../shared/components/InputWithLabel"

function LoginPageInputs({ mail, setMail, password, setPassword }) {
  return (
    <>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label="Email"
        type="text"
        placeholder="JohnDoe@email.com"
      />

      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="text"
        placeholder="Enter your password"
      />
    </>
  )
}

export default LoginPageInputs
