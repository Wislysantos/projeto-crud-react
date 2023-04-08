import { Home } from "@mui/icons-material";
import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { useAppDrawerConetxt } from "../../context/DrawerContext";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";


export const MenuLateral: React.FC<{children : React.ReactNode}> = ({children})=>{
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    
    const {isDrawerOpen, toggleDrawerOpen, drawerOptions} = useAppDrawerConetxt()
    interface IListItemLinkProps{
        to: string,
        label: string,
        icon: string,
        onClick: (()=> void) | undefined
    }
    
    const ListItemLink : React.FC<IListItemLinkProps>=({to, label, icon, onClick})=>{

        const navigate = useNavigate()
        const reserverPath = useResolvedPath(to)
        const match = useMatch({path : reserverPath.pathname, end: false})

        const handleClick = ()=>{
            navigate(to)
            onClick?.()
        }

        return(
            <ListItemButton selected={!!match} onClick={handleClick}>
                <ListItemIcon>
                    <Icon>{icon}</Icon>
                </ListItemIcon>
                <ListItemText primary={label}/>
            </ListItemButton>
        )
    }

    return(
        <>            
            <Box>
                <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : "permanent"} onClose={toggleDrawerOpen}>
                    <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
                        <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                            <Avatar alt="Wisly Santos" sx={{width:theme.spacing(12), height:theme.spacing(12)}}
                            src="https://media.licdn.com/dms/image/C4D03AQE2rwNrElDQuw/profile-displayphoto-shrink_800_800/0/1626732728886?e=1686182400&v=beta&t=XQbUaq28v-mxCn_oB4P3ixOYVIRomTXRl7KYMOExkEU"/>
                        </Box>
                        <Divider/>
                        <Box flex={1}>
                            <List component="nav">
                                {drawerOptions.map(drawerOption=>(
                                    <ListItemLink
                                        key={drawerOption.path}
                                        to={drawerOption.path}
                                        icon={drawerOption.icon}
                                        label={drawerOption.label}
                                        onClick={smDown ? toggleDrawerOpen : undefined}
                                    />
                                ))}
                            </List>
                        </Box>
                    </Box>
                </Drawer>
                <Box marginLeft={smDown ? 0 : theme.spacing(28)} height="100vh">
                    {children}         
                </Box>
            </Box>
        </>
    )
}