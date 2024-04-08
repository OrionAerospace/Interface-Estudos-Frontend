import axios from 'axios'
import { api } from './variables'

export const http = axios.create({
  baseURL: api,
  timeout: 15000,
})
