import {HOST} from './config'
import axios from 'axios'

//获取轮播图数据
export function getBanners(){
  const url= `${HOST}/banner`
  return axios.get(url)
}