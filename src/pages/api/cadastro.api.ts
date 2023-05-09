import { cadastro } from '../../services/user'
import { Request, Response } from 'express'

export default function handler(req: Request, res: Response) {
  try {
    const newUser = cadastro(req.body)
    res.status(201).json(newUser)
  } catch (err) {
    res.status(400).json(err.message)
  }
}
