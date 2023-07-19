import { BrowserRouter, Link } from "react-router-dom";
import { AppRouter } from "./routes";
import { MenuLateral } from "./shared/components";
import {  useTheme } from "@mui/material";
import { AppThemeContext, DrawerProvider } from "./shared/context";
import HomeIcon from '@mui/icons-material/Home';


export const App = () => {
  const theme = useTheme()


  return (
    <AppThemeContext>
      <DrawerProvider>
        <BrowserRouter>
          <MenuLateral>
            <Link style={{float:"right", marginTop:"50%",color: theme.palette.mode === 'dark' ? 'white' : 'black'}} color="primary" to={"https://hilarious-eclair-48165f.netlify.app/"}><HomeIcon style={{width:"100px", height:"50px"}}/></Link>
            <AppRouter />
          </MenuLateral>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeContext>
  );
};
