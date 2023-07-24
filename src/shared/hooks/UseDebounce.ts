import { useCallback, useRef } from "react"

/**hook para nao ficar fazendo requisição atras da outra, este hook eu fiz
 ele com time quando eu pesquiso ele espera um pouco para fazer a requisição */
export const useDebounce = (deplay= 3000, notDeplayInFirsTime = true)=>{

    const debouncing = useRef<NodeJS.Timeout>()
    const IsFirsTime = useRef(notDeplayInFirsTime)    

    const debounce = useCallback((func : () => void) => {
        if(IsFirsTime.current){
            IsFirsTime.current = false
            func()
        }else{
            if (debouncing.current) {
                clearTimeout(debouncing.current)
            }
            debouncing.current = setTimeout(()=> func(), deplay)
        }
    },[deplay])

    return{debounce}
}