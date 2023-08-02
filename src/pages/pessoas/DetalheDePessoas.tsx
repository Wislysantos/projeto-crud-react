import { Form } from "@unform/web";
import { useEffect, useRef, useState } from "react";
import { LinearProgress } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"


import { VTextField } from "../../shared/forms";
import { mensagemDeCorfirmacao } from "../../shared/modal";
import { FerramentaDeDetalhe } from "../../shared/components";
import { LayoutBaseDePaginaInicial } from "../../shared/layouts";
import { PessoaServece } from "../../shared/services/api/pessoas/PessoasService";
import { FormHandles } from "@unform/core";

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
                <VTextField name="nomeCompleto" />
                <VTextField name="email" />
                <VTextField name="cidadeId"/>
            </Form>
        </LayoutBaseDePaginaInicial>
    )
}