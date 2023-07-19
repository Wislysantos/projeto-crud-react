import { Enviroment } from "../../../environment";
import { Api } from "../axios-config"


const getAll = async(page = 1): Promise<any>=>{

    try{
        const urlRelativa = `/pessoas?_page=${page}&_limit=${Enviroment.LIMITE_DE_LINHA}`
        const {data} = await Api.get(urlRelativa);
    }catch(error){

    }
}