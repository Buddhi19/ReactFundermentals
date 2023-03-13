import React from "react";

const UserContext = React.createContext('NEW USER')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}