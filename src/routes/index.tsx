import { Button } from "@mui/material";
import {Routes, Route, Navigate} from "react-router-dom"
import { useAppDrawerConetxt } from "../shared/context";
import {useEffect} from "react"

export const AppRouter = () => {
    const {toggleDrawerOpen, setDrawerOption} = useAppDrawerConetxt();

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
            <Route path="/pagina-inicial" element={<Button variant="contained" color="primary" onClick={toggleDrawerOpen}>toggle Drawer</Button>}/>

            <Route path="*" element={<Navigate to="/pagina-inicial"/>}/>
        </Routes>
    )
};