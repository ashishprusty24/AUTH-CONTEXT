import React from 'react'
import { useContext } from 'react'

import { AuthContext } from '../context/AuthContext';
const Button = () => {
    const {toggleAuth,isauth} = useContext(AuthContext)
  return (
    <div>
      <button onClick={toggleAuth}>{isauth? "logout" :"login"}</button>
    </div>
  )
}

export default Button