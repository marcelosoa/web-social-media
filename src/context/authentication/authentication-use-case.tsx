import { createContext, useContext } from 'react'

import { AuthenticateUseCaseInterface } from '../../domain/use-cases/authentication-use-case.interface'

export const AuthenticateUseCaseContext = createContext<AuthenticateUseCaseInterface>(
  {} as AuthenticateUseCaseInterface
)

export const useAuthenticateUseCase = () => useContext(AuthenticateUseCaseContext)
