import PropTypes from 'prop-types'
import React, { useState, useEffect} from "react"
import ProductsLogo from '../../assets/DesktopLogo.svg'
import { Container, ProductsImg, CategoryButton, CategoriesMenu, ProductsContainer} from './styles'
import api from '../../services/api'
import {CardProduct} from "../../components"

export function Products({location: {state}}) {
    let categoryId = 0
    if (state?.categoryId){
        categoryId = state.categoryId
    }

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [activeCategory, setActiveCategory] = useState(categoryId)

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')
            const newCategories = [{id:0, name: 'Todos'}, ...data]
            setCategories(newCategories)            
        }

        async function loadProducts() {
            const { data: allProducts } = await api.get('products')
            
            const newProducts = allProducts.map(product => {
                return { ... product
                        // price: product.price, 
                        //  name: product.name,
                        //  url: product.url,
                        //  id: product.id,
                        //  category_id: product.category_id 
                        }})            
            setProducts(newProducts)
        }
        loadProducts()
        loadCategories()
    }, [])

    useEffect( () => {

        if(activeCategory === 0) {
            setFilteredProducts(products)
        }
        else {            
        const newFilteredProducts = products.filter(
            product => product.category_id === activeCategory            
        )        
        setFilteredProducts(newFilteredProducts)
        }
    },[activeCategory, products])

    return (
        <Container>
            <ProductsImg src={ProductsLogo} alt="products's logo"/> 
            <CategoriesMenu>
            { categories && categories.map( category => 
                <CategoryButton type='button' 
                key={category.id}
                isActiveCategory={activeCategory === category.id}
                onClick={()=>{setActiveCategory(category.id)}}>{category.name}</CategoryButton>
            )}
            </CategoriesMenu>
            <ProductsContainer>
                { filteredProducts && filteredProducts.map(product => (                
                    <CardProduct key={product.id} product={product}/>
                ))}
            </ProductsContainer>
        </Container>

)
}

Products.propTypes = {
    location: PropTypes.object
}