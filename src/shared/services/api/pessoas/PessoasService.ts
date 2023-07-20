import { type } from "os";
import { Enviroment } from "../../../environment";
import { Api } from "../axios-config"
import { error } from "console";


interface IListagemPessoa{
    id : number,
    email: string,
    cidadaId: number,
    nomeCompleto: string
}

interface IDetalheDePessoa{
    id : number,
    email: string,
    cidadaId: number,
    nomeCompleto: string
}

type TPessoaComTotalCount={
    data: IListagemPessoa[],
    totalCount: number,
}


const getAll = async(page = 1, filter = ''): Promise<TPessoaComTotalCount | Error> => {

    try{

        const urlRelativa = `/pessoas?_page=${page}&_limit=${Enviroment.LIMITE_DE_LINHA}&nomeCompleto_like=${filter}`

        const {data, headers} = await Api.get(urlRelativa);

        if(data){
            return{                
                data,
                totalCount : Number(headers['x-total-count'] || Enviroment.LIMITE_DE_LINHA),
            }
        }

        return new Error("erro nos registro de pessoas")

    }catch(error){
        console.error(error)
        return new Error((error as {message: string}).message || 'erro nos registro de pessoas  ')
    }
}

const getById = async (id :number):Promise<IDetalheDePessoa | Error> =>{
    try {
        
        const {data} = await Api.get(`/pessoas/${id}`)

        if(data){
            return data         
        }
        
        return new Error('Error ao selecionar a pessoa')
    } catch (error) {
        console.error(error)
        return new Error((error as {mensage : string}).mensage || 'Error ao selecionar a pessoa')
    }
}

//estou usando o omit para esconder o id, para quando o usuario for cadastrar ele nao solicitar o id 
const create = async (dados : Omit<IDetalheDePessoa, 'id'>) : Promise<Number | Error>=>{
    try {
        const {data} = await Api.post<IDetalheDePessoa>(`/pessoas`, dados)
        if(data){
            return data.id
        }
        return new Error('Não foi criado o registro')
    } catch (error) {
        console.error(error)
        return new Error((error as {messege : string}).messege || 'Não foi criado o registro')
    }
}

const updateById = async (id: number, dados : IDetalheDePessoa) : Promise<void | Error> =>{
    try {
        await Api.put(`/pessoas/${id}`, dados)       
    } catch (error) {
        return new Error((error as {message : string}).message || 'Ao atualizar pessoa deu erro')
    }
}

const deleteById = async (id: number) :Promise<IDetalheDePessoa | Error>=>{
    try{
        const {data} = await Api.delete(`/pessoas/${id}`)
        if(data){
            return data
        }
        return new Error('Erro ao deletar pessoa')
    }catch(error){
        return new Error((error as {messege : string}).messege || 'Erro ao deletar pessoa')
    }
}


export const PessoaServece ={
    getAll,
    getById,
    create,
    updateById,
    deleteById
}