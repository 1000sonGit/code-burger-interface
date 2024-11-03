import React from "react"

import { Container, ItemContainer, ListLink } from './styles'
import { useUser } from "../../hooks/UserContext"
import listLink from "./menu-list"
import LogoutIcon from '@mui/icons-material/Logout';
import PropTypes from 'prop-types'

export function SideMenuAdmin({ path }) {
    const { logout } = useUser()
    return (
        <Container>
            <div className="vertical-line"></div>          
            <hr></hr>            
            {listLink.map(item => (
                <ItemContainer key={item.id} isActive={path === item.link}>
                    <item.icon className='icon'/>
                    <ListLink to={item.link}>{item.label}</ListLink>
                </ItemContainer>
            ))}            
            <hr></hr>
            <div className="vertical-line"></div>
            <ItemContainer> 
                <LogoutIcon style={{ color: '#ffffff'}}/>
                <ListLink className="logout-icon" to='/login' onClick={logout}>Exit</ListLink>
            </ItemContainer>
        </Container>
        
)
}

SideMenuAdmin.propTypes = {
    path: PropTypes.string    
}