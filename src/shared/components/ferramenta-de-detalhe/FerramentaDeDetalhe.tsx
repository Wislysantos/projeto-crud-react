import { Box, Button, Paper, useTheme } from "@mui/material"
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export const FerramentaDeDetalhe: React.FC = ()=>{

    const theme = useTheme()

    return(
        <Box
            gap={1}
            margin={1}
            marginX={2}
            padding={1}
            paddingX={2}
            display="flex"
            alignItems="center"
            height={theme.spacing(12)}
            component={Paper}
        >
            <Button
                color="primary"
                disableElevation
                variant="contained"
                startIcon={<SaveIcon/>}
            >Salvar</Button>
            <Button
                color="primary"
                disableElevation
                variant="outlined"
                startIcon={<SaveIcon/>}
            >Salvar e voltar</Button>
            <Button
                color="primary"
                disableElevation
                variant="outlined"
                startIcon={<DeleteIcon/>}
            >Apagar</Button>
            <Button
                color="primary"
                disableElevation
                variant="outlined"
                startIcon={<AddIcon/>}
            >Novo</Button>
            <Button
                color="primary"
                disableElevation
                variant="outlined"
                endIcon={<ArrowBackIcon/>}
            >Voltar</Button>
        </Box>
    )
}