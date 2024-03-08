import React from "react"

import HomeLogo from '../../assets/HomeLogo2.svg'
import {CategoryCarousel, OffersCarousel} from "../../components"
import { Container, HomeImg} from './styles'

export function Home() {
    
    return (
        <Container>
            <HomeImg src={HomeLogo} alt="home's logo"/>                                                 
            <CategoryCarousel />
            <OffersCarousel />
        </Container>

)
}
