import {HOST} from './config'
import axios from 'axios'
export function getBanners(){
  const url= `${HOST}/banner`
  return axios.get(url)
}