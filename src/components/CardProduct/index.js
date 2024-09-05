import React from "react"

import { useHistory } from 'react-router-dom'

import PropTypes from 'prop-types'

import { useCart } from "../../hooks/CartContext"

import formatCurrency from "../../utils/formatCurrency"

import {Button} from "../Button"

import { Container, Image, ProductName, ProductPrice } from "./styles"

import { GlobalStyle } from "../Button/styles"
export function CardProduct({ product }){
    const { putProductInCart } = useCart()
    const { push } = useHistory()
    return (
        <>
            <GlobalStyle/>
            <Container>
                <Image src={product.url} alt='product´s image'/>
                <div>
                    <ProductName>{product.name}</ProductName>
                    <ProductPrice>{formatCurrency(product.price)}</ProductPrice>
                    <Button onClick={ () => {
                        putProductInCart(product)
                        push('/cart')
                        }}>Adicionar</Button>
                </div>
            </Container>
        </>
    )
}

CardProduct.propTypes = {
    product: PropTypes.object
}