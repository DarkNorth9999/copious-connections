import React from "react"
import { styled } from "@mui/material"
import { connect } from "react-redux"
import WelcomeMessage from "./WelcomeMessage"
import MessengerContent from "./MessengerContent"

const MainContainer = styled("div")({
  flexGrow: 1,
  backgroundColor: "#36393f",
  marginTop: "48px",
  display: "flex",
})

const Messenger = ({ chosenChatDetails }) => {
  console.log("messenger", chosenChatDetails)
  return (
    <MainContainer>
      {chosenChatDetails ? (
        <MessengerContent chosenChatDetails={chosenChatDetails} />
      ) : (
        <WelcomeMessage />
      )}
    </MainContainer>
  )
}

const mapStoreStateToProps = ({ chat }) => {
  return {
    ...chat,
  }
}

export default connect(mapStoreStateToProps)(Messenger)
