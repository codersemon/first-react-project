// dependencies 

import { useState } from "react"
import LoginRegisterContext from "../context/LoginRegisterContext"

// eslint-disable-next-line react/prop-types
const LoginRegisterProvider = ({children}) => {
    // login & register state 
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);

  return (
    <LoginRegisterContext.Provider value={{login, setLogin, register, setRegister}}>{children}</LoginRegisterContext.Provider>
  )
}

export default LoginRegisterProvider