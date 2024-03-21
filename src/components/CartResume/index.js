import React from "react"

import { Container } from './styles'
import { Button } from '../Button'

export function CartResume() {
    
    return (
        <div>
        <Container>
            <div className="container-top">
                <h2 className="title">Order Summary</h2>
                <p className="items">Items</p>
                <p className="items-price">$ 10,00</p>
                <p className="delivery-tax">Delivery Charges</p>
                <p className="delivery-tax-price">$ 2,00</p>
            </div>
            <div className="container-bottom">
                <p>Total</p>
                <p>$ 12,00</p>
            </div>            
        </Container>
        <Button style={{ width: '100%', marginTop: 30 }}>Proceed to Checkout</Button>
        </div>
)
}
