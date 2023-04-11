import { Button } from "@mui/material";
import {Routes, Route, Navigate} from "react-router-dom"
import { useAppDrawerConetxt, useAppThemeContext } from "../shared/context";
import {useEffect} from "react"
import { Dashboard } from "../pages";

export const AppRouter = () => {
    const {setDrawerOption} = useAppDrawerConetxt();

    useEffect(()=>{
        setDrawerOption([
            {
                label : 'Paniel inicial',
                icon : 'Home',
                path:'/pagina-inicial'
            },
        ])
    },[])
    
    return(
        <Routes>
            <Route path="/pagina-inicial" element={<Dashboard />}/>

            <Route path="*" element={<Navigate to="/pagina-inicial"/>}/>
        </Routes>
    )
};