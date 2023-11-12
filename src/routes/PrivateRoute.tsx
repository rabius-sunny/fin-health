import { useAppSelector } from 'hooks/redux'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({ children }: any) {
  const token = useAppSelector((state) => state.auth.token)

  return token ? children : <Navigate to='/login' />
}
