import { Box, TextField, Button, Paper, useTheme } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';

interface IFerramentaDaListagemProps{
    textoInput?:string
    mostrarInput?: boolean
    mudarTextoDeBusca?: (novoTexto: string) =>void
    textoButtonNovo?:string    
    mostrarButtonNovo?: boolean
    aoClicarNoButtonNovo?:()=>void
}

export const FerramentaDaListagem: React.FC<IFerramentaDaListagemProps> = ({
    textoInput = '',
    mostrarInput = false,
    mudarTextoDeBusca,
    textoButtonNovo = 'Novo',
    mostrarButtonNovo= true,
    aoClicarNoButtonNovo,
    })=>{

    const theme = useTheme();
    return(
        <Box
         gap={1}
         margin={1}
         marginX={2}
         padding={1}
         paddingX={2}
         display='flex'
         alignItems='center'
         height={theme.spacing(12)}
         component={Paper}>
          {mostrarInput &&(<TextField
                size="small"
                placeholder="Pesquisa..." 
                value={textoInput}      
                onChange={(e)=>mudarTextoDeBusca?.(e.target.value)}         
            />)}
            <Box 
                flex={1}
                display="flex"
                justifyContent="end"
            >
                {mostrarButtonNovo &&(<Button
                    color="primary"
                    disableElevation
                    variant="contained"
                    endIcon={<AddIcon/>}
                    onClick={aoClicarNoButtonNovo}                   
                >{textoButtonNovo}</Button>)}
            </Box>

        </Box>
    )
}