import { createContext, useContext, useState, useCallback } from "react"

interface IAppDrawerContext{
    isDrawerOpen: boolean,
    toggleDrawerOpen:() =>void
}

const DrawerContext = createContext({} as IAppDrawerContext)

export const useAppDrawerConetxt=()=>{
    return useContext(DrawerContext)
}

export const DrawerProvider: React.FC<{children : React.ReactNode}>=({children})=>{
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const toggleDrawerOpen = useCallback(()=>{
        setIsDrawerOpen(oldisDrawerOpen => !oldisDrawerOpen)
    },[])

    return(
        <DrawerContext.Provider value={{isDrawerOpen, toggleDrawerOpen}}>
            {children}
        </DrawerContext.Provider>
    )
}