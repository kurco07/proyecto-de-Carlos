import React, { useContext } from 'react'
import { ContextoLogin } from '../useContext/LoginContext'
import { Navigate } from 'react-router-dom'

export const ProtectedLogin = ({ children, redirectTo }) => {

  const { Loged, } = useContext(ContextoLogin)
  if (!Loged) {
    return <Navigate to={`${redirectTo}`} replace />
  }
  return children
}

export const RedirectToHome = ({ children, redirectTo = '/login' }) => {
  const { Loged, } = useContext(ContextoLogin)
  if (Loged) return <Navigate to={`${redirectTo}`} replace />
  return children
}

