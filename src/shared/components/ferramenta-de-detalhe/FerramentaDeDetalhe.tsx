import { Box, Button, Paper, useTheme, Divider } from "@mui/material"
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface IFerramentaDeDetalheProps{
    textoButtonNovo? :string

    mostrarButtonSalvar?: boolean
    mostrarButtonSalvarEVoltar?: boolean
    mostrarButtonApagar?: boolean
    mostrarButtonNovo?: boolean
    mostrarButtonVoltar?: boolean

    aoClicarSalvar?: ()=>void
    aoClicarSalvarEVoltar?: ()=>void
    aoClicarApgar?: ()=>void
    aoClicarNovo?: ()=>void
    aoClicarVoltar?: ()=>void
}


export const FerramentaDeDetalhe: React.FC<IFerramentaDeDetalheProps> = ({
    textoButtonNovo="Novo",
    mostrarButtonSalvar = true,
    mostrarButtonSalvarEVoltar= false,
    mostrarButtonApagar= true,
    mostrarButtonNovo= true,
    mostrarButtonVoltar= true,

    aoClicarSalvar,
    aoClicarSalvarEVoltar,
    aoClicarApgar,
    aoClicarNovo,
    aoClicarVoltar,
})=>{

    const theme = useTheme()

    return(
        <Box
            gap={1}
            marginX={1}
            padding={1}
            paddingX={2}
            display="flex"
            alignItems="center"
            height={theme.spacing(5)}
            component={Paper}
        >
            {mostrarButtonSalvar && (<Button
                color="primary"
                disableElevation
                variant="contained" 
                startIcon={<SaveIcon/>}
            >Salvar</Button>)}
            {mostrarButtonSalvarEVoltar && (<Button
                color="primary"
                disableElevation
                variant="outlined"
                startIcon={<SaveIcon/>}
            >Salvar e voltar</Button>)}
            {mostrarButtonApagar && (<Button
                color="primary"
                disableElevation
                variant="outlined"
                startIcon={<DeleteIcon/>}
            >Apagar</Button>)}
            {mostrarButtonNovo && (<Button
                color="primary"
                disableElevation
                variant="outlined"
                startIcon={<AddIcon/>}
            >{textoButtonNovo}</Button>)}
            <Divider variant="middle" orientation="vertical"/>
            {mostrarButtonVoltar && (<Button
                color="primary"
                disableElevation
                variant="outlined"
                endIcon={<ArrowBackIcon/>}
            >Voltar</Button>)}
        </Box>
    )
}