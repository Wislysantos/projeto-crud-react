import { useSearchParams } from "react-router-dom"
import { FerramentaDaListagem } from "../../shared/components"
import { LayoutBaseDePaginaInicial } from "../../shared/layouts"
import  {useMemo} from 'react'

export const ListagemDePessoas: React.FC = ()=>{

    const [searchParams, setSearchParams] = useSearchParams() 

    const busca = useMemo(()=>{
        return searchParams.get('busca') || ''
    },[searchParams])

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