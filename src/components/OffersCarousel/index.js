import React, { useEffect, useState } from "react"
import Carousel from 'react-elastic-carousel'

import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Container, ContainerItens, Image, Button} from './styles'


function OffersCarousel() {
    const [offers, setOffers] = useState([])

    useEffect(() => {
        async function loadOffers() {
            const { data } = await api.get('products')
            
            const onlyOffers = data.filter(products => products.offer)
            .map(products => {
                return { formatedPrice: formatCurrency(products.price), 
                         name:products.name,
                         url:products.url }
            })                    
            
            setOffers(onlyOffers)
        }

        loadOffers()
    }, [])
    // De acordo com a largura, quantos itens pararecem na tela
    const breakpoints = [
        { width:1, itensToShow: 1},
        { width:400, itensToShow: 2},
        { width:600, itensToShow: 3},
        { width:900, itensToShow: 4},
        { width:1300, itensToShow: 5}
    ]

    return (
        <Container>            
            <p className='Offer'>Offers</p>

            <Carousel itemsToShow={3} style={{width: '90%'}} breakPoints={breakpoints}>
                {  offers && offers.map( products => (
                        <ContainerItens key={products.id}>
                            <Image src={products.url} alt="foto do produto"/>
                            <p>{products.name}</p>                            
                            <p>{products.formatedPrice}</p>
                            <Button>Order Now</Button>
                        </ContainerItens>
                    ))
                }
            </Carousel>
        </Container>

)
}

export default OffersCarousel