import { NextPage } from 'next'

interface LoginPageProps {}

const LoginPage: NextPage<LoginPageProps> = () => (
  <div>Conteúdo da página de login</div>
)

LoginPage.getInitialProps = async () => ({
  isLoginPage: true, // Passa a propriedade isLoginPage como true
})

export default LoginPage
