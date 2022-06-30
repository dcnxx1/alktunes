import { Container } from "./components/styled"
export default function Searchbar({children, ...args}){
    return(
        <Container {...args}>
            {children}
        </Container>
    )
}

SearchBar.Input = function({children, ...args}){
return 
}