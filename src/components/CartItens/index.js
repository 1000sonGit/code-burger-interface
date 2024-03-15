import React from "react"

import { useCart } from "../../hooks/CartContext"
import { Container, Header, Body, EmptyCart } from './styles'
import formatCurrency from "../../utils/formatCurrency"

export function CartItens() {
    const { cartProducts } = useCart()
    console.log(cartProducts)
    return (
        <Container>
            <Header>
                <p></p>
                <p>Order Details</p>
                <p>Price</p>
                <p style={{ paddingRight: 30 }}>Quantity</p>
                <p>Total</p>
            </Header>

            {cartProducts && cartProducts.length > 0 ? (
                cartProducts.map( product => (
                    <Body key={product.id}>
                        <img src={product.url}/>
                        <p>{product.name}</p>
                        <p>{formatCurrency(product.price)}</p>
                        <p>{product.quantity}</p>
                        <p>{formatCurrency(product.quantity * product.price)}</p>
                    </Body>
            ))) : (
                <EmptyCart>Empty Cart</EmptyCart>
            )}
            
        </Container>

)
}
