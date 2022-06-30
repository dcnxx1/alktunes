import { Container } from "./styled"
export default function SearchComponent({children, ...args}){
    return(
        <Container {...args}>
            {children}
        </Container>
    )
}



