import { Box } from "@mui/material"
import { LayoutBaseDePaginaInicial } from "../../shared/layouts"
import { FerramentaDeDetalhe  } from "../../shared/components"

export const Dashboard: React.FC  =()=>{
    return(
    <>
        <LayoutBaseDePaginaInicial
         titulo="Pagina inicial" 
         barraDeFerramenta={             
            <FerramentaDeDetalhe/>             
         }>
            <Box>teste</Box>
        </LayoutBaseDePaginaInicial>
    </>
    )
}