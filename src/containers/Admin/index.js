import React from "react"

import PropTypes from 'prop-types'

import Orders from "./Orders"
import { Container, ContainerItens } from "./styles"
import { SideMenuAdmin } from "../../components"
import ListProducts from "./ListProducts"
import paths from "../../constants/paths"
import NewProduct from "./NewProduct"
import EditProduct from "./EditProduct"

export function Admin({ match: { path } }) {
    return (
        <Container>
            <SideMenuAdmin path={path}/>
            <ContainerItens>
                {path === paths.Order && <Orders/>}
                {path === paths.Products && <ListProducts/>}               
                {path === paths.NewProduct && <NewProduct/>} 
                {path === paths.EditProduct && <EditProduct/>} 
            </ContainerItens>
            
        </Container>
    )
}

Admin.propTypes = {
    match: PropTypes.shape({
        path: PropTypes.string
    })
}