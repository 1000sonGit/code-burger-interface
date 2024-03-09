import React from "react"

import PropTypes from 'prop-types'

import { useCart } from "../../hooks/CartContext"

import formatCurrency from "../../utils/formatCurrency"

import {Button} from "../Button"

import { Container, Image, ProductName, ProductPrice } from "./styles"

export function CardProduct({ product }){
    const { putProductInCart } = useCart()
    return (
        <Container>
            <Image src={product.url} alt='product´s image'/>
            <div>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{formatCurrency(product.price)}</ProductPrice>
                <Button onClick={ () => putProductInCart(product)}>Adicionar</Button>
            </div>
        </Container>
    )
}

CardProduct.propTypes = {
    product: PropTypes.object
}