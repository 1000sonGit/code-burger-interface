import React, { useState, useEffect} from "react"

import ProductsLogo from '../../assets/DesktopLogo.svg'
import { Container, ProductsImg, CategoryButton, CategoriesMenu, ProductsContainer} from './styles'
import api from '../../services/api'
import CardProduct from "../../components/CardProduct"

function Products() {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [activeCategories, setActiveCategories] = useState([0])

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            const newCategories = [{id:0, name: 'Todos'}, ...data]

            setCategories(newCategories)            
        }

        async function loadProducts() {
            const { data: allProducts } = await api.get('products')
            
            const newProducts = allProducts.map(product => product.price)

            setProducts(newProducts)            
        }

        loadProducts()
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
            <ProductsContainer>
                { products && products.map(product => (                
                    <CardProduct key={product.id} product={product}/>
                ))}
            </ProductsContainer>
        </Container>

)
}

export default Products