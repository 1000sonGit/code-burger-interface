import React from "react"

import CartLogo from '../../assets/CartImage.svg'
import { CartItens } from "../../components"
import { Container, CartImg} from './styles'

export function Cart() {
    
    return (
        <Container>
            <CartImg src={CartLogo} alt="cart's logo"/>
            <CartItens/>
        </Container>

)
}
