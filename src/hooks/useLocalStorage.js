import React, {useState, useEffect} from 'react'

export default function useLocalStorage(itemKey) {
    const [storage, setStorage] = useState({})
    
    function removeStorage(keyItem){
        localStorage.removeItem(keyItem)
    }

    useEffect(() => {
        setStorage({USR_TOKEN : localStorage.getItem(itemKey)})
    },[])

    function createStorage(itemValue){
        setStorage({
            USR_TOKEN : itemValue
        })
    }

    return [storage , createStorage, removeStorage]
}
