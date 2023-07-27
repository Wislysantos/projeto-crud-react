import { Box, Button, Paper, useTheme, Divider, Skeleton, Typography, useMediaQuery } from "@mui/material"
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
    mostrarButtonSalvarEVoltar= true,
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

    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))

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
                >
                <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                    Salvar
                </Typography>
            </Button>)}

            {( mostrarButtonCarregamentoSalvar) && (<Skeleton width={110} height={60} />)}

            {(mostrarButtonSalvarEVoltar && !mostrarButtonCarregamentoSalvarEVoltar && !smDown && !mdDown) && (<Button
                color="primary"
                disableElevation
                variant="outlined"
                startIcon={<SaveIcon/>}
                onClick={aoClicarSalvarEVoltar}
                >
                <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                    Salvar e voltar
                </Typography>                
            </Button>)}

            {( mostrarButtonCarregamentoSalvarEVoltar && !smDown && !mdDown) && (<Skeleton width={180} height={60} />)}

            {(mostrarButtonApagar && !mostrarButtonCarregamentoApagar) && (<Button
                color="primary"
                disableElevation
                variant="outlined"
                startIcon={<DeleteIcon/>}
                onClick={aoClicarApgar}
                >
                <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                    Apagar
                </Typography>                
            </Button>)}

            {(mostrarButtonApagar && mostrarButtonCarregamentoApagar) && (<Skeleton width={110} height={60} />)}

            {(mostrarButtonNovo && !mostrarButtonCarregamentoNovo) && (<Button
                color="primary"
                disableElevation
                variant="outlined"
                startIcon={<AddIcon/>}
                onClick={aoClicarNovo}
                >
                <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                    {textoButtonNovo}
                </Typography>
            </Button>)}

            {( mostrarButtonCarregamentoNovo) &&(<Skeleton width={110} height={60} />)}

            {(mostrarButtonVoltar && !mostrarButtonCarregamentoVoltar &&!smDown)&&(<Divider variant="middle" orientation="vertical"/>)}
            {(mostrarButtonVoltar && !mostrarButtonCarregamentoVoltar &&!smDown) && (<Button
                color="primary"
                disableElevation
                variant="outlined"
                endIcon={<ArrowBackIcon/>}
                onClick={aoClicarVoltar}                
                >
                <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                    Voltar
                </Typography>
            </Button>)}

            {mostrarButtonCarregamentoVoltar && (<Skeleton width={110} height={60} />)}

        </Box>
    )
}