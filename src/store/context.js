import { createContext, useState } from "react"

const AppContext = createContext({
  ipAddress: null,
  setIp: function () {},
})

export const AppContextProvider = (props) => {
  const [ipAddress, setIpAddress] = useState()

  const ipAddressHandler = (ip) => setIpAddress(ip)

  const context = { ipAddress, setIp: ipAddressHandler }

  return (
    <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
  )
}

export default AppContext
