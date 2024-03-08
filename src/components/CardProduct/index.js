import React from "react"

import PropTypes from 'prop-types'

import formatCurrency from "../../utils/formatCurrency"

import Button from "../Button"

import { Container, Image, ProductName, ProductPrice } from "./styles"

function CardProduct({ product }){

    return (
        <Container>
            <Image src={product.url} alt='product´s image'/>
            <div>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{formatCurrency(product.price)}</ProductPrice>
                <Button>Adicionar</Button>
            </div>
        </Container>
    )
}

export default CardProduct

CardProduct.propTypes = {
    product: PropTypes.object
}