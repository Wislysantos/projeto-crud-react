import { useSearchParams } from "react-router-dom"
import  {useEffect, useMemo} from 'react'
import { FerramentaDaListagem} from "../../shared/components"
import { LayoutBaseDePaginaInicial } from "../../shared/layouts"
import { PessoaServece } from "../../shared/services/api/pessoas/PessoasService"
import { error } from "console"

export const ListagemDeCidade: React.FC = ()=>{

    const [searchParams, setSearchParams] = useSearchParams()
    const busca = useMemo(()=>{
       return searchParams.get('busca') || ''
    },[searchParams])

    useEffect(()=>{
        PessoaServece.getAll(1, busca)
            .then((result)=>{
                if(result instanceof Error){
                    alert(result.message)
                }else{
                    console.log(result.data)
                }
            })
    },[busca])


    return(
        <> 
            <LayoutBaseDePaginaInicial
            titulo="Listagem de Cidade"
            barraDeFerramenta={
                <FerramentaDaListagem
                textoButtonNovo="Nova"
                mostrarInput
                textoInput={busca}
                mudarTextoDeBusca={texto =>{setSearchParams({busca: texto}, {replace: true})}}
                ></FerramentaDaListagem>
            }
            ></LayoutBaseDePaginaInicial>
        </>
    )
}