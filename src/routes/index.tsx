import {Routes, Route, Navigate} from "react-router-dom"
import { useAppDrawerConetxt } from "../shared/context";
import {useEffect} from "react"
import { Dashboard, ListagemDePessoas, ListagemDeCidade } from "../pages";

export const AppRouter = () => {
    const {setDrawerOption} = useAppDrawerConetxt();

    useEffect(()=>{
        setDrawerOption([
            {
                label : 'Paniel inicial',
                icon : 'Home',
                path:'/pagina-inicial'
            },
            {
                label:'Listagem de Cidade',
                icon: 'City',
                path: '/listagem-de-cidade'
            },
            {
                label:'Listagem de Pessoas',
                icon: 'P',
                path: '/listagem-de-pessoas'
            }
        ])
    },[])
    
    return(
        <Routes>
            <Route path="/pagina-inicial" element={<Dashboard />}/>
            <Route path="/listagem-de-cidade" element={<ListagemDeCidade />}/>
            <Route path="/listagem-de-pessoas" element={<ListagemDePessoas />}/>

            <Route path="*" element={<Navigate to="/pagina-inicial"/>}/>
        </Routes>
    )
};