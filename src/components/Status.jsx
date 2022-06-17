import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
const Status = () => {
    const {toggleAuth,isauth,token} = useContext(AuthContext)
  return (
    <div>
        <h1>token : {isauth ? `logged in with token ${token}` :"not logged in " }</h1>
    </div>
  )
}

export default Status