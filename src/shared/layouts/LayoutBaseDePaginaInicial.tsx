import {Box, IconButton, Typography, useMediaQuery, useTheme} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useAppDrawerConetxt } from "../context";
import { ReactNode } from "react";

interface ILayoutBaseDePaginaInicialProps{
    titulo: string
    children: React.ReactNode
    barraDeFerramenta: ReactNode
}

export const LayoutBaseDePaginaInicial: React.FC<ILayoutBaseDePaginaInicialProps>=({children, titulo, barraDeFerramenta})=>{
    
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))
    const {toggleDrawerOpen}= useAppDrawerConetxt()

    return(
    <Box gap={1} display="flex" flexDirection="column" height="100%">
        <Box padding={1} display="flex" alignItems="center" height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)} gap={1}>
            { smDown &&
                <IconButton onClick={toggleDrawerOpen}>
                    <MenuIcon/>
                </IconButton>
            }
            <Typography
             overflow="hidden"
             whiteSpace="nowrap"
             textOverflow="ellipsis"
             variant={smDown ? "h5" : mdDown ? "h4" : "h3" }>
                {titulo}
            </Typography>
        </Box>

        {barraDeFerramenta &&<Box>
            {barraDeFerramenta}
        </Box>}

        <Box>
            {children}
        </Box>
        
    </Box>
    )
}