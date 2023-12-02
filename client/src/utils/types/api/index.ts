import { AxiosResponse } from 'axios'

export interface IApiResponse<T> {
  data: T
}

export interface IApiService {
  GET: <T>(
    route: string,
    params?: Record<string, string>
  ) => Promise<AxiosResponse<IApiResponse<T>>>
  POST: <T>(
    route: string,
    body?: object,
    // body?: string | object | any[],
    params?: Record<string, string>,
  ) => Promise<AxiosResponse<IApiResponse<T>>>
  PUT: <T>(
    route: string,
    body?: object
  ) => Promise<AxiosResponse<IApiResponse<T>>>
  DELETE: <T>(route: string) => Promise<AxiosResponse<IApiResponse<T>>>
}
