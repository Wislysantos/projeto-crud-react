import {Box, IconButton, Typography, useMediaQuery, useTheme} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useAppDrawerConetxt } from "../context";

interface ILayoutBaseDePaginaInicialProps{
    titulo: string
    children: React.ReactNode
}

export const LayoutBaseDePaginaInicial: React.FC<ILayoutBaseDePaginaInicialProps>=({children, titulo})=>{
    
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const {toggleDrawerOpen}= useAppDrawerConetxt()

    return(
    <Box gap={1} display="flex" flexDirection="column" height="100%">
        <Box padding={1} display="flex" alignItems="center" height={theme.spacing(12)} gap={1}>
            { smDown &&
                <IconButton onClick={toggleDrawerOpen}>
                    <MenuIcon/>
                </IconButton>
            }
            <Typography variant="h5">
                {titulo}
            </Typography>
        </Box>
        <Box>
            Barra de ferramenta
        </Box>
        <Box>
            {children}
        </Box>
        
    </Box>
    )
}