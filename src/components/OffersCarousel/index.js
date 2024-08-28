import React, { useEffect, useState } from "react"
import Carousel from 'react-elastic-carousel'
import { useCart } from '../../hooks/CartContext'

import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Container, ContainerItens, Image, Button} from './styles'
import { useHistory } from "react-router-dom"


export function OffersCarousel() {
    const [offers, setOffers] = useState([])
    const { putProductInCart } = useCart()
    const { push } = useHistory()

    useEffect(() => {
        async function loadOffers() {
            const { data } = await api.get('products')
            
            const onlyOffers = data.filter(products => products.offer)
            .map(products => {
                return { formatedPrice: formatCurrency(products.price), ...products}
                        //  name:products.name,
                        //  url:products.url }
            })                    
            
            setOffers(onlyOffers)
        }

        loadOffers()
    }, [])
    // De acordo com a largura, quantos itens aparecem na tela
    const breakPoints = [
        { width:1, itemsToShow: 1},
        { width:400, itemsToShow: 2},
        { width:600, itemsToShow: 3},
        { width:900, itemsToShow: 4},
        { width:1300, itemsToShow: 5}
    ]

    return (
        <Container>            
            <p className='Offer'>Offers</p>

            <Carousel 
                // itemsToShow={4} 
                // style={{width: '800px'}} 
                breakPoints={breakPoints}>
                {  offers && offers.map( products => (
                        <ContainerItens key={products.id}>
                            <Image src={products.url} alt="foto do produto"/>
                            <p>{products.name}</p>                            
                            <p>{products.formatedPrice}</p>
                            <Button onClick={ () => {
                                putProductInCart(products)
                                push('/cart')
                            }}>Order Now</Button>
                        </ContainerItens>
                    ))
                }
            </Carousel>
        </Container>

)
}
