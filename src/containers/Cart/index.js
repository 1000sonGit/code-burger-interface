import React from "react"

import CartLogo from '../../assets/CartImage.svg'
import { CartItens, CartResume } from "../../components"
import { Container, CartImg, Wrapper} from './styles'

export function Cart() {
    
    return (
        <Container>
            <CartImg src={CartLogo} alt="cart's logo"/>
            <Wrapper>
                <CartItens/>
                <CartResume/>
            </Wrapper>
        </Container>

)
}
