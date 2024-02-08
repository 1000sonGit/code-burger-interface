import React, { useEffect, useState } from "react"

import api from '../../services/api'
import { Container, CategoryImg } from './styles'
import Carousel from 'react-elastic-carousel'

function CategoryCarousel() {
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
            <Carousel itemsToShow={5} style={{width: '90%'}} breakPoints={breakpoints}>
                {  categories && categories.map( category => (
                        <div key={category.id}>
                            <img src={category.url} alt='foto da categoria'/>
                            <button>{category.name}</button>
                        </div>
                    ))
                }
            </Carousel>
        </Container>

)
}

export default CategoryCarousel