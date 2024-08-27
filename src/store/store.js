import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./reducers/authReducer"
import alertReducer from "./reducers/alertReducer"
import friendsReducer from "./reducers/friendsReducer"
import chatReducer from "./reducers/chatReducer"
import roomReducer from "./reducers/roomReducer"
const store = configureStore({
  reducer: {
    auth: authReducer,
    alert: alertReducer,
    friends: friendsReducer,
    chat: chatReducer,
    room: roomReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }), // thunk is included by default in getDefaultMiddleware
  devTools: true, // Automatically integrates with the Redux DevTools Extension
})

export default store

// import { composeWithDevTools } from "redux-devtools-extension"
// import { combineReducers, createStore, applyMiddleware } from "redux"
// import { thunk } from "redux-thunk"

// import authReducer from "./reducers/authReducer"

// const rootReducer = combineReducers({
//   auth: authReducer,
// })

// const store = createStore(
//   rootReducer,
//   composeWithDevTools,
//   applyMiddleware(thunk)
// )

// export default store
