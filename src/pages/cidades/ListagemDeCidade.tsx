import { useSearchParams } from "react-router-dom"
import  {useMemo} from 'react'
import { FerramentaDaListagem} from "../../shared/components"
import { LayoutBaseDePaginaInicial } from "../../shared/layouts"

export const ListagemDeCidade: React.FC = ()=>{

    const [searchParams, setSearchParams] = useSearchParams()
    const busca = useMemo(()=>{
       return searchParams.get('busca') || ''
    },[searchParams])


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