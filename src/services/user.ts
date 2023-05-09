interface User {
  email: string
  password: string
}
const users: User[] = []

export function cadastro(body: User) {
  const user = users.find(({ email }) => email === body.email)
  if (user) throw new Error('usuário já cadastrado')

  users.push(body)
  return body
}

export function login(body: User) {
  const user = users.find(({ email }) => email === body.email)
  if (!user) throw new Error('usuário não encontrado')
  if (user.password !== body.password) throw new Error('senha incorreta')

  return user
}
