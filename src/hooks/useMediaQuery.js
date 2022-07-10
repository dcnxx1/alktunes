import { useEffect } from "react";
export default function useMediaQuery(removeFunc){

    useEffect(() => {
        const mediaQuery = window.addEventListener('resize', (ev) => {
            if(window.innerWidth < 600){
                removeFunc()
            }
        })

        return () => {
            window.removeEventListener('resize', mediaQuery)
        }

    }, [])

}