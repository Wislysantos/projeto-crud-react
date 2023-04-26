import axios from 'axios'
import { ResponseInterceptor, errorInterceptor } from './interceptors/'
import { Enviroment } from '../../../environment'

const Api = axios.create({
    baseURL: Enviroment.URL_BASE
})

Api.interceptors.response.use(
    (response) => ResponseInterceptor(response),
    (error)=> errorInterceptor(error)
)

export {Api}