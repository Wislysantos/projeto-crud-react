import { Typography } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"


import { FerramentaDeDetalhe } from "../../shared/components";
import { LayoutBaseDePaginaInicial } from "../../shared/layouts";

export const DetalheDePessoas =()=>{

    const {id ='nova'} = useParams<'id'>();
    const navite = useNavigate()

    return(
        <LayoutBaseDePaginaInicial
        titulo="Detalhe De Pessoa"
        barraDeFerramenta={
            <FerramentaDeDetalhe
                textoButtonNovo="Nova"
                mostrarButtonApagar={id !=='nova'}
                mostrarButtonNovo={id !=='nova'}

                aoClicarNovo={()=>navite(`/pessoas/detalhe/nova`)}
                aoClicarVoltar={()=>navite(`/listagem-de-pessoas`)}
            ></FerramentaDeDetalhe>
        }
        >
            <Typography variant="h1">detalhe pessoas {id}</Typography>
        </LayoutBaseDePaginaInicial>
    )
}