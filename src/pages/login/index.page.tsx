import Image from 'next/image'
import logoDrulim from '../../assets/drulim_logo.png'

import { LoginCard, LoginContainer } from './styles'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { AuthContext } from '@/contexts/AuthContext'
// import { AuthContext } from '../contexts/AuthContext';

export default function LoginPage() {
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  })

  const { signIn } = useContext(AuthContext)

  async function handleSignIn(data) {
    await signIn(data)
  }

  return (
    <LoginContainer>
      <LoginCard onSubmit={handleSubmit(handleSignIn)}>
        <Image src={logoDrulim} alt={''}></Image>
        <input
          {...register('email')}
          name="email"
          type="email"
          placeholder="Email"
          autoComplete="email"
          required
        />
        <input
          {...register('password')}
          name="password"
          type="password"
          placeholder="Senha"
          autoComplete="current-password"
          required
        />
        <button type="submit">Entrar</button>
      </LoginCard>
    </LoginContainer>
  )
}

LoginPage.getInitialProps = async () => ({
  isLoginPage: true, // Passa a propriedade isLoginPage como true
})
