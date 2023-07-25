import  {useEffect, useMemo, useState} from 'react'
import { useSearchParams } from "react-router-dom"

import { useDebounce } from "../../shared/hooks"
import { Enviroment } from '../../shared/environment'
import { FerramentaDaListagem } from "../../shared/components"
import { LayoutBaseDePaginaInicial } from "../../shared/layouts"
import { IListagemPessoa, PessoaServece } from "../../shared/services/api/pessoas/PessoasService"
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableFooter, LinearProgress, Pagination } from '@mui/material'


export const ListagemDePessoas: React.FC = ()=>{

    const [searchParams, setSearchParams] = useSearchParams() 
    const {debounce} = useDebounce(2000, true)
    const [rows, setRows] = useState<IListagemPessoa[]>([])
    const [isLoading, setIsLoading ]= useState(true)
    const [totalCount, setTotalCount] = useState(0)

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
                            <TableRow>
                                    <TableCell>Ação</TableCell>
                                    <TableCell>Nome</TableCell>
                                    <TableCell>E-mail</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row =>(
                                <TableRow>
                                    <TableCell>Ação</TableCell>
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