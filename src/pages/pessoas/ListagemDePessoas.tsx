import  {useEffect, useMemo, useState} from 'react'
import { useNavigate, useSearchParams } from "react-router-dom"
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableFooter, LinearProgress, Pagination, IconButton, Icon } from '@mui/material'

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { useDebounce } from "../../shared/hooks"
import { Enviroment } from '../../shared/environment'
import { mensagemDeCorfirmacao } from "../../shared/modal";
import { FerramentaDaListagem } from "../../shared/components"
import { LayoutBaseDePaginaInicial } from "../../shared/layouts"
import { IListagemPessoa, PessoaServece } from "../../shared/services/api/pessoas/PessoasService"


export const ListagemDePessoas: React.FC = ()=>{

    const [searchParams, setSearchParams] = useSearchParams() 
    const [isLoading, setIsLoading ]= useState(true)
    const [totalCount, setTotalCount] = useState(0)
    const [rows, setRows] = useState<IListagemPessoa[]>([])
    const navigate = useNavigate()

    const {debounce} = useDebounce(2000, true)

    const busca = useMemo(()=>{
        return searchParams.get('busca') || ''
    },[searchParams])

    const pagina = useMemo (()=>{
        return Number(searchParams.get('pagina') || '1')
    },[searchParams])

   
    useEffect(()=>{
        setIsLoading(true)
        debounce(()=>{
            setIsLoading(false)
            PessoaServece.getAll(pagina, busca)
            .then((result)=>{
                if(result instanceof Error){
                    alert(result.message)
                }else{
                    console.log(result.data)

                    setRows(result.data)
                    setTotalCount(result.totalCount)
                }
            })  
        })

    },[busca, pagina])

    const handleDelete = (id: number) => {
        mensagemDeCorfirmacao('Deseja realmente excluir este item?',()=>{
            PessoaServece.deleteById(id)
                .then(result => {
                    if (result instanceof Error) {
                            alert(result.message);
                        } else {
                            setRows(oldRows => {
                                return [
                                    ...oldRows.filter(oldRow => oldRow.id !== id)
                                ];
                            });
                        alert('Item excluído com sucesso!');
                    }
                });
            }
        )
          
    };
      
      

    return(
        <>
        <LayoutBaseDePaginaInicial
            titulo="Listagem De Pessoas"
            barraDeFerramenta={
                <FerramentaDaListagem
                    textoButtonNovo="Nova"
                    mostrarInput
                    textoInput={busca}
                    mudarTextoDeBusca={texto=> setSearchParams({busca : texto, pagina: '1'}, {replace: true})}
                ></FerramentaDaListagem>
            }
            >
                <TableContainer component={Paper} variant='outlined' sx={{width:"auto", margin: 1}}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{alignItems: "center"}}>
                                    <TableCell>Ação</TableCell>
                                    <TableCell>Nome</TableCell>
                                    <TableCell>E-mail</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row =>(
                                <TableRow key={row.id}>
                                    <TableCell>
                                        <IconButton size='small' sx={{p:0}} onClick={()=>handleDelete(row.id)}>
                                            <Icon><DeleteIcon/></Icon>
                                        </IconButton>
                                        <IconButton size='small' sx={{p:0, marginLeft: 2}} onClick={()=>navigate(`/pessoas/detalhe/${row.id}`)}>
                                            <Icon><EditIcon/></Icon>
                                        </IconButton>
                                    </TableCell>
                                    <TableCell>{row.nomeCompleto}</TableCell>
                                    <TableCell>{row.email}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        {totalCount === 0 && !isLoading &&(
                            <caption>{Enviroment.LISTAGEM_VAZIA}</caption>
                        )}
                        <TableFooter>
                            {isLoading && (
                                <TableRow>
                                    <TableCell colSpan={3}>
                                        <LinearProgress variant='indeterminate'/>
                                    </TableCell>
                                </TableRow>
                            )}
                            {(totalCount > 0 && totalCount > Enviroment.LIMITE_DE_LINHA)&&(
                                <TableRow>
                                    <TableCell colSpan={3}>
                                        <Pagination
                                            page={pagina}
                                            count={Math.ceil(totalCount / Enviroment.LIMITE_DE_LINHA)} 
                                            onChange={(e, newPage)=>{setSearchParams({busca, pagina : newPage.toString()}, {replace : true})}}
                                        />
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableFooter>
                    </Table>
                </TableContainer>
            </LayoutBaseDePaginaInicial>
        </>
    )
}