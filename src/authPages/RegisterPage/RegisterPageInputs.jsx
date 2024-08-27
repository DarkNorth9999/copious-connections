import React from "react"
import InputWithLabel from "../../shared/components/InputWithLabel"

function RegisterPageInputs({
  mail,
  setMail,
  password,
  setPassword,
  username,
  setUsername,
}) {
  return (
    <>
      <InputWithLabel
        value={username}
        setValue={setUsername}
        label="Username"
        type="text"
        placeholder="Pick your username"
      />

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
        placeholder="Choose a strong password"
      />
    </>
  )
}

export default RegisterPageInputs
