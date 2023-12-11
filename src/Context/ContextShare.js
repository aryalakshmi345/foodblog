import React, { createContext, useState } from 'react'
export const addprojectResponseContext = createContext()
export const editBlogResponseContex = createContext()
export const editProfileResponseContext = createContext()

function ContextShare({children}) {
    const [addProjectResponse, setAddProjectResponse] = useState({})
    const [editBlogResponse, setEditBlogResponse] = useState({})
    const [editProfileResponse,setEditProfileResponse] = useState({})
  return (
    <>
      <addprojectResponseContext.Provider value={{addProjectResponse,setAddProjectResponse}}>
        <editBlogResponseContex.Provider value={{editBlogResponse,setEditBlogResponse}}>
          <editProfileResponseContext.Provider value={{editProfileResponse,setEditProfileResponse}}>
            {children}
            </editProfileResponseContext.Provider>
        </editBlogResponseContex.Provider>
        </addprojectResponseContext.Provider>
    </>
  )
}

export default ContextShare