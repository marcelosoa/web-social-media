import { createContext, useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config";
import { AccountModel } from '../../domain/models'

type AuthenticationContextProps = {
  signUp: (account: AccountModel) => void
  signOut: () => void
  account: AccountModel | null
  isLoading: boolean
}

export const AuthenticationContext = createContext({} as AuthenticationContextProps)

export function AuthenticationProvider ({children}: {children: React.ReactNode}) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [account, setAccount] = useState<(AccountModel | null)>(null)
  
  const signUp = async (account: AccountModel) => {
    setIsLoading(true)
    try {
      await createUserWithEmailAndPassword(auth, account.email, account.password)
      setAccount(account)
    } catch (error) {
      return error
    } finally {
      setIsLoading(false)
    }
  }

  const signOut = async () => {
    setIsLoading(true)
   try {
      auth.signOut()
   } catch (error) {
    return error
   } finally {
    setIsLoading(false)
   }
  }

  return (
    <AuthenticationContext.Provider value={{ signUp, signOut, isLoading, account }}>
      {children}
    </AuthenticationContext.Provider>
  )
}