import { AxiosResponse } from "axios";
import {ApiDataType} from "./types";
import http from "./http-common";


export const getAllPartners = async ():  Promise<AxiosResponse<ApiDataType>> => {
    try {
        const response: AxiosResponse<ApiDataType> = await http.get('all_partners')
        return response;
      } catch (error) {
          console.log("error in api / get all")
        throw error;
      }
};


export const getFilteredPartners = async (distance:string):  Promise<AxiosResponse<ApiDataType>> => {
  try {
      const data = { 'distance' : distance };
      const response: AxiosResponse<ApiDataType> = await http.get('filtered_partners' , {params:data})
      return response;
    } catch (error) {
        console.log("error in api / get filtered")
        console.log(error)
      throw error;
    }
};
