import { Box } from "@mui/material"
import { LayoutBaseDePaginaInicial } from "../../shared/layouts"

export const Dashboard: React.FC  =()=>{
    return(
    <>
        <LayoutBaseDePaginaInicial titulo="Pagina inicial" barraDeFerramenta={'Barra de ferramenta'}>
            <Box>teste</Box>
        </LayoutBaseDePaginaInicial>
    </>
    )
}