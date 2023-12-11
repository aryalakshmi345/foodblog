import React, { createContext, useEffect, useState } from 'react'
export const loginResponseContext = createContext()


function LoginContext({children}) {
    const [loginResponse, setLoginResponse] = useState(false)
    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            setLoginResponse(true)
        }else{
            setLoginResponse(false)
        }
    },[loginResponse])
  return (
    <>
      <loginResponseContext.Provider value={{loginResponse,setLoginResponse}}>
        {children} 
        </loginResponseContext.Provider>
    </>
  )
}

export default LoginContext