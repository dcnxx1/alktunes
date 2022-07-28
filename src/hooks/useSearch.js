import {useState, useEffect} from 'react';
import axios from 'axios';

function useSearch() {
  const [search, setSearch] = useState([])
  const [searchInput, setInput] = useState('')

    const handleSearchInput = e => setInput(e.target.value)
    function handleSubmit(e){
        e.preventDefault()
    }

    useEffect(() => {
        const inputSearchTimeout = setTimeout(() => {
            
        }, 300)

        return () => {
            clearTimeout(inputSearchTimeout)
        }
    }, [searchInput])
    return(
    [   
        // state
        [search, searchInput],
        // handler / functions
        [handleSubmit, handleSearchInput]
    ]
)
}

export default useSearch
