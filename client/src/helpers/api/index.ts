import serverUrl from '@utils/server'
import { IApiResponse, IApiService } from '@utils/types/api'
import axios, { AxiosResponse } from 'axios'

const apiService: IApiService = {
  GET: async <T>(route: string, params?: Record<string, string>) => {
    const response: AxiosResponse<IApiResponse<T>> = await axios.get<
      IApiResponse<T>
    >(`${serverUrl}${route}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      params: { ...params }
    })

    return response
  },
  POST: async <T>(
    route: string,
    body?: object,
    params?: Record<string, string>
  ) => {
    const response: AxiosResponse<IApiResponse<T>> = await axios.post<
      IApiResponse<T>
    >(`${serverUrl}${route}`, body, {
      headers: {
        'Content-Type': 'application/json'
      },
      params: { ...params }
    })

    return response
  },
  PUT: async <T>(route: string, body?: object) => {
    const response: AxiosResponse<IApiResponse<T>> = await axios.put<
      IApiResponse<T>
    >(`${serverUrl}${route}`, body, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return response
  },
  DELETE: async <T>(route: string) => {
    const response: AxiosResponse<IApiResponse<T>> = await axios.delete<
      IApiResponse<T>
    >(`${serverUrl}${route}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return response
  }
}

export default apiService
