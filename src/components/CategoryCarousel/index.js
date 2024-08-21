import React, { useEffect, useState } from "react"
import Carousel from 'react-elastic-carousel'

import api from '../../services/api'
import { Container, ContainerItens, Image, Button} from './styles'


export function CategoryCarousel() {
    const [categories, setCategories] = useState([])    

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            setCategories(data)            
        }

        loadCategories()
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
            <p className='Categories'>Categories</p>
            
            <Carousel itemsToShow={3} style={{width: '800px'}} breakPoints={breakpoints}>
                {  categories && categories.map( category => (
                        <ContainerItens key={category.id}>
                            <Image src={category.url} alt="foto da categoria"/>
                            <Button 
                            to={{
                                pathname: '/products', 
                                state: {categoryId: category.id}
                            }}
                            >{category.name}</Button>
                        </ContainerItens>
                    ))
                }
            </Carousel>
        </Container>

)
}
