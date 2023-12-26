import { createContext, useState } from "react"


const ContextoLogin = createContext(null)

const LoginContextProvider = ({ children }) => {
  const [Loged, setLoged] = useState(() => window.localStorage.getItem("Loged"));


  return (
    <ContextoLogin.Provider value={{ Loged, setLoged }}>
      {children}
    </ContextoLogin.Provider>
  )
}

export { ContextoLogin, LoginContextProvider }
