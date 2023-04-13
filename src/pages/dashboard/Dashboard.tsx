import { Box } from "@mui/material"
import { LayoutBaseDePaginaInicial } from "../../shared/layouts"
import { BarraDeFerramenta  } from "../../shared/components"

export const Dashboard: React.FC  =()=>{
    return(
    <>
        <LayoutBaseDePaginaInicial
         titulo="Pagina inicial" 
         barraDeFerramenta={<BarraDeFerramenta mostrarInput/>}>
            <Box>teste</Box>
        </LayoutBaseDePaginaInicial>
    </>
    )
}