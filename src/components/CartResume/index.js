import React, { useState, useEffect } from "react"

import { useCart } from "../../hooks/CartContext"
import { Container } from './styles'
import { Button } from '../Button'
import formatCurrency from "../../utils/formatCurrency"
import api from '../../services/api'
import { toast } from "react-toastify"

export function CartResume() {
    const [ finalPrice, setFinalPrice ] = useState(0)
    const [ deliveryTax ] = useState(2)

    const { cartProducts } = useCart()

    useEffect(() => {
        const sumAllItems = cartProducts.reduce( (acc, current) => {
            return current.price * current.quantity + acc
        }, 0)
        setFinalPrice(sumAllItems)

    }, [cartProducts])

    const submitOrder = async () => {
        const order = cartProducts.map(product => {
            return { id: product.id, quantity: product.quantity }
        })

        await toast.promise(api.post('orders', { products: order }), {
            pending: 'Placing your order...',
            success: 'Order placed successfully!',
            error: 'Something is wrong, try again!'
        })

    }
    
    return (
        <div>
        <Container>
            <div className="container-top">
                <h2 className="title">Order Summary</h2>
                <p className="items">Items</p>
                <p className="items-price">{formatCurrency(finalPrice)}</p>
                <p className="delivery-tax">Delivery Charges</p>
                <p className="delivery-tax-price">{formatCurrency(deliveryTax)}</p>
            </div>
            <div className="container-bottom">
                <p>Total</p>
                <p>{formatCurrency(finalPrice + deliveryTax)}</p>
            </div>            
        </Container>
        <Button style={{ width: '100%', marginTop: 30 }} onClick={submitOrder}>Proceed to Checkout</Button>
        </div>
)
}
