import React, { createContext, useContext, useState, useEffect} from "react"
import PropTypes from 'prop-types'

const CartContext = createContext({})

export const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])

    const updateLocalStorage = async products => {
        await localStorage.setItem('codeburger:cartInfo', JSON.stringify(products))
    }

    const putProductInCart = async product => {
        const cartIndex = cartProducts.findIndex(prd => prd.id === product.id)

        let newCartProducts = []
        if (cartIndex >= 0) {
            newCartProducts = cartProducts
            newCartProducts[cartIndex].quantity += 1

            setCartProducts(newCartProducts)
        }
        else {
            product.quantity = 1
            newCartProducts = [... cartProducts, product]
            setCartProducts(newCartProducts)
        }
        await updateLocalStorage(newCartProducts)
    }

    const deleteProducts = async ProductId => {
        const newCart = cartProducts.filter( product => product.id !== ProductId)

        setCartProducts(newCart)

        await updateLocalStorage(newCart)
    }
    
    const increaseProducts = async ProductId => {
        const newCart = cartProducts.map( product => {
            return product.id === ProductId ? { ... product, quantity: product.quantity + 1} 
            : product
        })

        setCartProducts(newCart)

        await updateLocalStorage(newCart)        
    }

    const decreaseProducts = async ProductId => {
        const cartIndex = cartProducts.findIndex(pd => pd.id === ProductId)

        if(cartProducts[cartIndex].quantity > 1){
            const newCart = cartProducts.map( product => {
                return product.id === ProductId ? { ... product, quantity: product.quantity - 1} 
                : product
            })

            setCartProducts(newCart)
            await updateLocalStorage(newCart)
        } else {
            deleteProducts(ProductId)
        }

        
    }

    useEffect(() => {
        
        const loadUserData = async () => {
            const clientCartData = await localStorage.getItem('codeburger:cartInfo')

            if (clientCartData){
                setCartProducts(JSON.parse(clientCartData))
            }
        }
        loadUserData()
    }, [])

    return (
        <CartContext.Provider value={{putProductInCart, cartProducts, increaseProducts, 
        decreaseProducts}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)

    if(!context) {
        throw new Error('userUser must be used with CartContext')
    }
    return context
}

CartProvider.propTypes = {
    children: PropTypes.node
}