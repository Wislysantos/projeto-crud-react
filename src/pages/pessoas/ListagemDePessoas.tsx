import { useSearchParams } from "react-router-dom"
import { FerramentaDaListagem } from "../../shared/components"
import { LayoutBaseDePaginaInicial } from "../../shared/layouts"
import  {useEffect, useMemo} from 'react'
import { PessoaServece } from "../../shared/services/api/pessoas/PessoasService"
import { useDebounce } from "../../shared/hooks"

export const ListagemDePessoas: React.FC = ()=>{

    const [searchParams, setSearchParams] = useSearchParams() 
    const {debounce} = useDebounce(2000, true)

    const busca = useMemo(()=>{
        return searchParams.get('busca') || ''
    },[searchParams])

   
    useEffect(()=>{

        debounce(()=>{
            PessoaServece.getAll(1, busca)
            .then((result)=>{
                if(result instanceof Error){
                    alert(result.message)
                }else{
                    console.log(result.data)
                }
            })  
        })

    },[busca])

    return(
        <>
        <LayoutBaseDePaginaInicial
            titulo="Listagem De Pessoas"
            barraDeFerramenta={
                <FerramentaDaListagem
                    textoButtonNovo="Nova"
                    mostrarInput
                    textoInput={busca}
                    mudarTextoDeBusca={texto=> setSearchParams({busca : texto}, {replace: true})}
                ></FerramentaDaListagem>
            }
            ></LayoutBaseDePaginaInicial>
        </>
    )
}