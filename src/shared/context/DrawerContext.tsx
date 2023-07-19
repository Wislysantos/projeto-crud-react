import { createContext, useContext, useState, useCallback } from "react"

interface IDrawerOption{
    icon: string,
    path: string,
    label: string,

}
interface IAppDrawerContext{
    isDrawerOpen: boolean,
    toggleDrawerOpen:() =>void
    drawerOptions: IDrawerOption[];
    setDrawerOption: (newDrawerOptions: IDrawerOption[]) => void
}


const DrawerContext = createContext({} as IAppDrawerContext)

export const useAppDrawerConetxt=()=>{
    return useContext(DrawerContext)
}

export const DrawerProvider: React.FC<{children : React.ReactNode}>=({children})=>{
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [drawerOptions, setDrawerOption] = useState<IDrawerOption[]>([])

    const toggleDrawerOpen = useCallback(()=>{
        setIsDrawerOpen(oldisDrawerOpen => !oldisDrawerOpen)
    },[])

    const handleSetDrawerOptions =useCallback((newDrawerOptions: IDrawerOption[])=>{
        setDrawerOption(newDrawerOptions)
    },[])

    return(
        <DrawerContext.Provider value={{isDrawerOpen, toggleDrawerOpen, drawerOptions, setDrawerOption: handleSetDrawerOptions }}>
            {children}           
        </DrawerContext.Provider>
    )
}