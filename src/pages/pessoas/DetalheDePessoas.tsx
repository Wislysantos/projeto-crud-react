import { Form } from "@unform/web";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { LinearProgress, Box, Paper, Grid, Typography } from "@mui/material"


import { FormHandles } from "@unform/core";
import { VTextField } from "../../shared/forms";
import { mensagemDeCorfirmacao } from "../../shared/modal";
import { FerramentaDeDetalhe } from "../../shared/components";
import { LayoutBaseDePaginaInicial } from "../../shared/layouts";
import { PessoaServece } from "../../shared/services/api/pessoas/PessoasService";

interface IFormData {
    nomeCompleto: string,
    email: string,
    cidadeId: number,
}

export const DetalheDePessoas =()=>{

    const {id ='nova'} = useParams<'id'>();
    const navite = useNavigate()
    const formRef = useRef<FormHandles>(null)

    const [isLoading, setIsLoading] = useState(false)
    const [nome, setNome] = useState('')

    const handleSave = (dados: IFormData)=>{
        setIsLoading(true)
        console.log(dados)
        if(id === 'nova'){
            PessoaServece.create(dados)
            .then((result)=>{
                setIsLoading(false)
                if(result instanceof Error){
                    alert(result.message)
                }else{
                    alert(`${dados} cadastrada com sucesso`)
                    navite(`/pessoas/detalhe/${result}`)
                }
            })
        }else{
            PessoaServece.updateById(Number(id), {id : Number(id), ...dados})
            .then((result)=>{
                setIsLoading(false)
                if(result instanceof Error){
                    alert(result.message)
                }
            })
        }
    }

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
                    formRef.current?.setData(result) 
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
                aoClicarSalvarEVoltar={()=>formRef.current?.submitForm()}
                aoClicarSalvar={()=>formRef.current?.submitForm()}
            ></FerramentaDeDetalhe>
        }
        >
            {isLoading && (<LinearProgress variant="indeterminate"/>)}
            <Form ref={formRef} onSubmit={handleSave}>
            <Box margin={1} display={"flex"} component={Paper} variant="outlined" flexDirection={"column"}>

                <Grid container item direction={"column"} spacing={2} padding={2}>
                    <Grid item>
                        <Typography variant="h6">Geral</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={2}>
                    <VTextField
                        fullWidth
                        label="Nome Completo"
                        name="nomeCompleto"
                        disabled={isLoading}
                        onChange={(e) => setNome(e.target.value)}
                     />
                    </Grid>
                </Grid>

                <Grid container direction={"column"} spacing={2} padding={2}>
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={2}>
                    <VTextField
                        fullWidth
                        label="E-mail"
                        name="email"
                        disabled={isLoading}
                     />

                    </Grid>
                </Grid>

                <Grid container direction={"column"} spacing={2} padding={2}>
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={2}>
                    <VTextField
                        fullWidth
                        label="Cidade"
                        name="cidadeId"
                        disabled={isLoading}
                     />

                    </Grid>
                </Grid>

            </Box>
            </Form>
        </LayoutBaseDePaginaInicial>
    )
}