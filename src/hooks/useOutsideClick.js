import {useEffect} from 'react'

function useOutsideClick(ref, onClickOutside) {
    useEffect(() => {
        const listener = event => {
            
            if(ref.current && !ref.current.contains(event.target)){
                if(event.target.id == "menu-btn"){
                    return
                }
                onClickOutside()
                
            }
        }
        
        document.addEventListener('mousedown', listener)

        return () => {            
            document.addEventListener('mousedown', listener)
        }

    }, [ref, onClickOutside])
}

export default useOutsideClick