import React, { useEffect, useState } from "react"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useMediaQuery } from "@mui/material";


import api from "../../../services/api"
import status from "./order-status";
import formatDate from "../../../utils/formatDate"
import Row from "./row"
import { Container, Menu, LinkMenu } from "./styles"
import shortformatDate from "../../../utils/shortformatDate";


function Orders() {
    const [orders, setOrders] = useState([])
    const [activeStatus, setActiveStatus] = useState(1)
    const [filteredOrders, setfilteredOrders] = useState([])
    const [rows, setRows] = useState([])
    const isSmallScreen = useMediaQuery('(max-width:800px)')

    useEffect(() => {
        async function loadOrders() {
            const { data } = await api.get('orders')
            
            setOrders(data)
            setfilteredOrders(data)
        }
        
        loadOrders()
    }, [])

    // Function to format date based on screen size
    function formatDateBasedOnScreen(order) {
        return isSmallScreen ? shortformatDate(order.createdAt) : formatDate(order.createdAt);
    }

    // Create data for each order with formatted date
    useEffect(() => {
        const newRows = filteredOrders.map((ord) => ({
        name: ord.user.name,
        orderId: ord._id,
        date: formatDateBasedOnScreen(ord),
        status: ord.status,
        products: ord.products,
        }));
        setRows(newRows);
    }, [filteredOrders, isSmallScreen]) 
    // Update rows on filteredOrders or screen size change

    useEffect(() => {
        if(activeStatus === 1){
            setfilteredOrders(orders)
        } else{
        const statusIndex = status.findIndex( sts => sts.id === activeStatus)        
        const newFilteredOrders = orders.filter( order => order.status === status[statusIndex].value)            
        setfilteredOrders(newFilteredOrders)
        } 
    }, [orders])

    function handleStatus(status) {
        if (status.id === 1) {
            setfilteredOrders(orders)            
        } else {
            const newOrders = orders.filter( order => order.status === status.value)
            setfilteredOrders(newOrders)
        }
        setActiveStatus(status.id)

    }

    return (
        <Container>
            <Menu>
                { status && status.map( status => (
                    <LinkMenu key={status.id} 
                    onClick={() => handleStatus(status)}
                    isActiveStatus={activeStatus === status.id}>
                        { status.label }
                    </LinkMenu>
                ))}
            </Menu>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Order</TableCell>
                        <TableCell>Consumer</TableCell>
                        <TableCell>Order Date</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <Row 
                        key={row.orderId} 
                        row={row}
                        setOrders={setOrders}
                        orders={orders}
                        />
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )

    
}

export default Orders