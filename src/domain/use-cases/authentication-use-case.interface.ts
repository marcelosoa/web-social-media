import {  } from ".."

export type AuthenticateUseCaseInput = {
  email: string
  password: string
}

export interface AuthenticateUseCaseInterface {
  execute(input: AuthenticateUseCaseInput): Promise<>
}
