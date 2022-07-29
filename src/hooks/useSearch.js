import {useState, useEffect} from 'react';
import axios from 'axios';
import statics from '../static/statics'
function useSearch() {
  const [search, setSearch] = useState([])
  const [searchInput, setInput] = useState('')
  const [suggestResults, setSuggest] = useState([])
  const [searchCache, setSearchCache] = useState([])
    const handleSearchInput = e => setInput(e.target.value)
    
    const handleIllegalInput = () => 
    searchInput === "" || 
    searchInput.length == 0 || 
    statics.INPUT_VALIDATION.RESTRICT_CHARS.test(searchInput) === true ||
    statics.INPUT_VALIDATION.STARTS_WITH_NUM.test(searchInput) === true ? false: true
    
    function handleSubmit(e){
        e.preventDefault()
    }

    useEffect(() => {
        const inputSearchTimeout = setTimeout(() => {
            if(handleIllegalInput() === false) return
            const config = { params :{ search: searchInput } }
            
            axios.get(`http://192.168.1.210:5055/search/`, config).then((res) => {
                console.log(res.data)   
            // setSearchCache()
            })
        }, 200)

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
