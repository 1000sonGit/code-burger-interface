import React from "react"

import { useCart } from "../../hooks/CartContext"
import { Container, Header, Body, EmptyCart } from './styles'
import formatCurrency from "../../utils/formatCurrency"

export function CartItens() {
    const { cartProducts, increaseProducts, decreaseProducts } = useCart()
    
    return (
        <Container>
            <Header>
                {/* <p className="empty-space"></p> */}
                <p className="order-header">Order Details</p>
                <p className="price-header">Price</p>
                <p>Quantity</p>
                <p>Total</p>
            </Header>

            {cartProducts && cartProducts.length > 0 ? (
                cartProducts.map( product => (
                    <Body key={product.id}>
                        <div className="item-group">
                            <img src={product.url}/>
                            <p className="name-container">{product.name}</p>
                        </div>
                        <p className="price-container">{formatCurrency(product.price)}</p>
                        <div className="quantity-container">
                            <button onClick={() => decreaseProducts(product.id)}>-</button>
                            <p>{product.quantity}</p>
                            <button onClick={() => increaseProducts(product.id)}>+</button>
                        </div>
                        <p>{formatCurrency(product.quantity * product.price)}</p>
                    </Body>
            ))) : (
                <EmptyCart>Empty Cart</EmptyCart>
            )}
            
        </Container>

)
}
