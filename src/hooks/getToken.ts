import { useAppSelector } from './redux'

export default function getToken() {
  const token = useAppSelector((state) => state.auth.token)
  return token
}
