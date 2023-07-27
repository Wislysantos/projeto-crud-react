import { LinearProgress, Typography } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"


import { mensagemDeCorfirmacao } from "../../shared/modal";
import { FerramentaDeDetalhe } from "../../shared/components";
import { LayoutBaseDePaginaInicial } from "../../shared/layouts";
import { PessoaServece } from "../../shared/services/api/pessoas/PessoasService";
import { useEffect, useState } from "react";

export const DetalheDePessoas =()=>{

    const {id ='nova'} = useParams<'id'>();
    const navite = useNavigate()

    const [isLoading, setIsLoading] = useState(false)
    const [nome, setNome] = useState('')

    const handleDelete = (id : number) =>{
        mensagemDeCorfirmacao('Deseja realmente excluir este item?', ()=>{
            PessoaServece.deleteById(id)
            .then((result)=>{
                if(result instanceof Error){
                    alert(result.message)
                }else{
                    alert('Item excluído com sucesso!')
                    navite('/listagem-de-pessoas')
                }
            }
                
            )
        })
    }
    
    useEffect(()=>{
        if(id !== 'nova'){
            setIsLoading(true)
            PessoaServece.getById(Number(id))
            .then((result)=>{
                setIsLoading(false)
                if(result instanceof Error){
                    alert(result.message)
                }else{
                    console.log(result)
                    setNome(result.nomeCompleto)
                }
           }) 
        }
    },[id])


    return(
        <LayoutBaseDePaginaInicial
        titulo={id !== 'nova' ? nome : 'Nova Pessoa'}
        barraDeFerramenta={
            <FerramentaDeDetalhe
                textoButtonNovo="Nova"
                mostrarButtonApagar={id !=='nova'}
                mostrarButtonNovo={id !=='nova'}

                aoClicarApgar={()=>handleDelete(Number(id))}
                aoClicarNovo={()=>navite(`/pessoas/detalhe/nova`)}
                aoClicarVoltar={()=>navite(`/listagem-de-pessoas`)}
            ></FerramentaDeDetalhe>
        }
        >
            <Typography variant="h1">detalhe pessoas {id}</Typography>
            {isLoading && (<LinearProgress variant="indeterminate"/>)}
        </LayoutBaseDePaginaInicial>
    )
}