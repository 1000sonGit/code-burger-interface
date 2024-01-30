import React, { useEffect } from "react"

import api from '../../services/api'
import { Container, CategoryImg } from './styles'

function CategoryCarousel() {
    useEffect(() => {
        async function loadCategories() {
            const response = await api.get('categories')
        }

        loadCategories()
    }, [])

    return (
        <Container>
            
        </Container>

)
}

export default CategoryCarousel