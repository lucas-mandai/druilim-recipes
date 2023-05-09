import React from 'react'

import { LoginCard, LoginContainer } from './styles'

interface LoginComponentProps {
  children: React.ReactNode
}

export default function LoginRegister(props: LoginComponentProps) {
  return (
    <LoginContainer>
      <LoginCard>{props.children}</LoginCard>
    </LoginContainer>
  )
}
