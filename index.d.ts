export interface IUser {
  email: string
  password: string
}

export interface IAuth {
  token?: string
  authStatus: 'pending' | 'error' | 'idle'
}

export interface RootState {
  auth: IAuth
}
