import axios from 'axios'

// import { useAppSelector } from 'hooks/redux'

const baseURL = process.env.REACT_APP_API_BASE_URL

export default function useInstance() {
  // const token = useAppSelector((state) => state.auth)
  const instance = axios.create({
    baseURL,
    timeout: 15000,
  })

  // Request interceptor
  instance.interceptors.request.use(function (config) {
    if (config.url !== '/sign-in') {
      config.headers.Authorization = `Bearer ${'token'}`
    }
    return config
  })
  return instance
}
