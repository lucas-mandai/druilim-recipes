import Image from 'next/image'
import logoDrulim from '../../assets/drulim_logo.png'
import RegisterCard from '../../components/loginRegister/index'

export default function RegisterPage() {
  return (
    <RegisterCard>
      {/* onSubmit={handleSubmit(handleSignIn)} */}
      <Image src={logoDrulim} alt={''}></Image>
      <input name="name" type="text" placeholder="Nome" required />
      <input
        name="email"
        type="email"
        placeholder="Email"
        autoComplete="email"
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Senha"
        autoComplete="current-password"
        required
      />
      <button type="submit">Cadastrar</button>
    </RegisterCard>
  )
}

RegisterPage.getInitialProps = async () => ({
  isLoginPage: true, // Passa a propriedade isLoginPage como true
})
