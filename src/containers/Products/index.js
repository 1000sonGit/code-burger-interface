import React, { useState, useEffect} from "react"

import ProductsLogo from '../../assets/DesktopLogo.svg'
import { Container, ProductsImg, CategoryButton, CategoriesMenu} from './styles'
import api from '../../services/api'

function Products() {
    const [categories, setCategories] = useState([])
    const [activeCategories, setActiveCategories] = useState([0])

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            const newCategories = [{id:0, name: 'Todos'}, ...data]

            setCategories(newCategories)            
        }

        loadCategories()
    }, [])


    return (
        <Container>
            <ProductsImg src={ProductsLogo} alt="products's logo"/> 
            <CategoriesMenu>
            { categories && categories.map( category => 
                <CategoryButton type='button' 
                key={category.id}
                isActiveCategory={activeCategories === category.id}
                onClick={()=>{setActiveCategories(category.id)}}>{category.name}</CategoryButton>
            )}
            </CategoriesMenu>    
        </Container>

)
}

export default Products