import { Container } from "./styled"
export default function HomeComponent({children, ...args}){
    return <Container {...args}>
    {children}
    </Container>


}