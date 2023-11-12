import { AxiosResponse } from 'axios'
import { useAppSelector } from 'hooks/redux'
import instance from 'lib/axiosinstance'

const token = useAppSelector((state) => state.auth.token)

// Request interceptor
instance.interceptors.request.use(function (config) {
  if (config.url !== '/sign-in' && token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

const responseBody = (response: AxiosResponse) => response.data

const requests = {
  get: (url: string, config?: object) =>
    instance.get(url, config).then(responseBody),
  post: (url: string, body: object, config?: object) =>
    instance.post(url, body, config).then(responseBody),
  patch: (url: string, body: object, config?: object) =>
    instance.patch(url, body, config).then(responseBody),
  delete: (url: string, config?: object) =>
    instance.delete(url, config).then(responseBody)
}

export default requests
