import { Button } from "@mui/material";
import {Routes, Route, Navigate} from "react-router-dom"
import { useAppDrawerConetxt } from "../shared/context";

export const AppRouter = () => {
    const {toggleDrawerOpen} = useAppDrawerConetxt();
    return(
        <Routes>
            <Route path="/pagina-inicial" element={<Button variant="contained" color="primary" onClick={toggleDrawerOpen}>toggle Drawer</Button>}/>

            <Route path="*" element={<Navigate to="/pagina-inicial"/>}/>
        </Routes>
    )
};