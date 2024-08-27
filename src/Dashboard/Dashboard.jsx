import React, { useEffect } from "react"
import { styled } from "@mui/material"
import SideBar from "./SideBar/SideBar"
import FriendsSideBar from "./FriendsSideBar/FriendsSideBar"
import Messenger from "./Messenger/Messenger"
import AppBar from "./AppBar/AppBar"
import { logout } from "../shared/utils/auth"
import { connect } from "react-redux"
import { getActions } from "../store/actions/authActions"
import { connectWithSocketServer } from "../realtimeCommunication/socketConnection"
import Room from "./Room/Room"

const Wrapper = styled("div")({
  display: "flex",
  width: "100%",
  height: "100vh",
})

function Dashboard({ setUserDetails, isUserInRoom }) {
  useEffect(() => {
    const userDetails = localStorage.getItem("user")

    if (!userDetails) {
      logout()
    } else {
      setUserDetails(JSON.parse(userDetails))
      connectWithSocketServer(JSON.parse(userDetails))
    }
  }, [])

  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
      {isUserInRoom && <Room />}
    </Wrapper>
  )
}

const mapActionsToProp = (dispatch) => {
  return {
    ...getActions(dispatch),
  }
}

const mapStoreStateToProps = ({ room }) => {
  return {
    ...room,
  }
}

export default connect(mapStoreStateToProps, mapActionsToProp)(Dashboard)
