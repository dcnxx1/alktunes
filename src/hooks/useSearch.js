import {useState, useEffect} from 'react';
import axios from 'axios';
import statics from '../static/statics'
function useSearch() {
  const [search, setSearch] = useState([])
  const [searchInput, setInput] = useState('')
  const [showResults, setResults] = useState(false)
  const handleSearchInput = e => setInput(e.target.value)
  const REFRESH_TIMEOUT = 100  
    const handleIllegalInput = () => 
    searchInput === "" || 
    searchInput.length == 0 === true ? false: true
    function handleSubmit(e){
        e.preventDefault()
    }

    useEffect(() => {
        const inputSearchTimeout = setTimeout(() => {
            if(handleIllegalInput() === false) return
            const config = { params : { search: searchInput.trim() } }
            axios.get(`http://192.168.1.210:5055/search/`, config).then((res) => {   
            setSearch(res.data)
            })
        }, REFRESH_TIMEOUT)

        if(searchInput === ""){
            setResults(false)
        } else {
            setResults(true)
        }
        return () => {
            clearTimeout(inputSearchTimeout)
        }
    }, [searchInput])
    return(
    [   
        // state
        [search, searchInput, showResults],
        // handler / functions
        [handleSubmit, handleSearchInput, setResults]
    ]
)
}

export default useSearch
