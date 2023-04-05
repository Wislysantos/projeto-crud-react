import { Home } from "@mui/icons-material";
import { Avatar, Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material";
import React from "react";

export const MenuLateral: React.FC<{children : React.ReactNode}> = ({children})=>{
    const theme = useTheme()
    return(
        <>            
            <Box>
                <Drawer variant="permanent">
                    <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
                        <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                            <Avatar alt="Wisly Santos" sx={{width:theme.spacing(12), height:theme.spacing(12)}}
                            src="https://media.licdn.com/dms/image/C4D03AQE2rwNrElDQuw/profile-displayphoto-shrink_800_800/0/1626732728886?e=1686182400&v=beta&t=XQbUaq28v-mxCn_oB4P3ixOYVIRomTXRl7KYMOExkEU"/>
                        </Box>
                        <Divider/>
                        <Box flex={1}>
                            <List component="nav">
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Home/>
                                    </ListItemIcon>
                                    <ListItemText primary="Página Principal"/>
                                </ListItemButton>
                            </List>
                        </Box>
                    </Box>
                </Drawer>
                <Box marginLeft={theme.spacing(28)} height="100vh">
                    {children}         
                </Box>
            </Box>
        </>
    )
}