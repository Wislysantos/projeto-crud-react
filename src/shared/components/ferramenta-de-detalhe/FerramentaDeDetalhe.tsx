import { Box, Button, Paper, useTheme, Divider, Skeleton } from "@mui/material"
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


    mostrarButtonCarregamentoSalvar?: boolean
    mostrarButtonCarregamentoSalvarEVoltar?: boolean
    mostrarButtonCarregamentoApagar?: boolean
    mostrarButtonCarregamentoNovo?: boolean
    mostrarButtonCarregamentoVoltar?: boolean

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

    mostrarButtonCarregamentoSalvar = false,
    mostrarButtonCarregamentoSalvarEVoltar = false,
    mostrarButtonCarregamentoApagar = false,
    mostrarButtonCarregamentoNovo = false,
    mostrarButtonCarregamentoVoltar = false,

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
            {(mostrarButtonSalvar && !mostrarButtonCarregamentoSalvar)&& (<Button
                color="primary"
                disableElevation
                variant="contained" 
                startIcon={<SaveIcon/>}
                onClick={aoClicarSalvar}
            >Salvar</Button>)}

            {mostrarButtonCarregamentoSalvar && (<Skeleton width={110} height={60} />)}

            {(mostrarButtonSalvarEVoltar && !mostrarButtonCarregamentoSalvarEVoltar) && (<Button
                color="primary"
                disableElevation
                variant="outlined"
                startIcon={<SaveIcon/>}
                onClick={aoClicarSalvarEVoltar}
            >Salvar e voltar</Button>)}

            {mostrarButtonCarregamentoSalvarEVoltar && (<Skeleton width={180} height={60} />)}

            {(mostrarButtonApagar && !mostrarButtonCarregamentoApagar) && (<Button
                color="primary"
                disableElevation
                variant="outlined"
                startIcon={<DeleteIcon/>}
                onClick={aoClicarApgar}
            >Apagar</Button>)}

            {mostrarButtonCarregamentoApagar && (<Skeleton width={110} height={60} />)}

            {(mostrarButtonNovo && !mostrarButtonCarregamentoNovo) && (<Button
                color="primary"
                disableElevation
                variant="outlined"
                startIcon={<AddIcon/>}
                onClick={aoClicarNovo}
            >{textoButtonNovo}</Button>)}

            {mostrarButtonCarregamentoNovo && (<Skeleton width={110} height={60} />)}

            <Divider variant="middle" orientation="vertical"/>
            {(mostrarButtonVoltar && !mostrarButtonCarregamentoVoltar) && (<Button
                color="primary"
                disableElevation
                variant="outlined"
                endIcon={<ArrowBackIcon/>}
                onClick={aoClicarVoltar}
            >Voltar</Button>)}

            {mostrarButtonCarregamentoVoltar && (<Skeleton width={110} height={60} />)}

        </Box>
    )
}