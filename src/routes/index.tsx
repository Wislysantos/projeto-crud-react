import {Routes, Route, Navigate} from "react-router-dom"
import { useAppDrawerConetxt } from "../shared/context";
import {useEffect} from "react"
import { Dashboard } from "../pages";
import { ListagemDeCidade } from "../pages/cidades/ListagemDeCidade";

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
            }
        ])
    },[])
    
    return(
        <Routes>
            <Route path="/pagina-inicial" element={<Dashboard />}/>
            <Route path="/listagem-de-cidade" element={<ListagemDeCidade />}/>

            <Route path="*" element={<Navigate to="/pagina-inicial"/>}/>
        </Routes>
    )
};