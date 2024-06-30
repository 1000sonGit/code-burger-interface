import React, { useEffect, useState } from "react"
import api from "../../../services/api"

import { Container, Img, EditIconStyles } from './styles'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import formatCurrency from "../../../utils/formatCurrency";

function ListProducts() {
    const [ products, setProducts] = useState([])

    useEffect(() => {
        async function loadOrders() {
            const { data } = await api.get('products')            
            setProducts(data)            
        }        
        loadOrders()
    }, [])

    function isOffer(offerStatus) {
        if(offerStatus){
            return <CheckBoxIcon/>
        }
        return <CheckBoxOutlineBlankIcon/>
    }

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell align="center">Offers</TableCell>
                        <TableCell align="center">Image of product</TableCell>
                        <TableCell>Edit</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {products.map((product) => (
                        <TableRow
                        key={product.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="product">{product.name}</TableCell>
                        <TableCell>{formatCurrency(product.price)}</TableCell>
                        <TableCell align="center">{isOffer(product.offer)}</TableCell>
                        <TableCell align="center"><Img src={product.url} alt='product image'/></TableCell>
                        <TableCell><EditIconStyles/></TableCell>                        
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>

)
}

export default ListProducts