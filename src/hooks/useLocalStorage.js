import React, {useState} from 'react'

export default function useLocalStorage() {
    const [storage, setStorage] = useState({})
    
    function removeStorage(itemKey){
        localStorage.removeItem(itemKey)
    }

    function createStorage(itemValue){
        setStorage({
            USR_TOKEN : itemValue
        })
    }

    return [storage , createStorage, removeStorage]
}
