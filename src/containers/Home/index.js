import React from "react"

import HomeLogo from '../../assets/HomeLogo.svg'
import Button from '../../components/Button'
import CategoryCarousel from "../../components/CategoryCarousel"
import { Container, FirstContainer, DescriptiveContainer, HomeImg} from './styles'

function Home() {
    
    return (
        <Container>
            <FirstContainer>
                <DescriptiveContainer >
                    <p className='DescriptiveTitle' alt='Descriptive Title'>delight Your best</p>
                    <p className='LocalTitle'>Burger Shop!</p>
                    <p className='Description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra a pellentesque consectetur.</p>
                    <Button type="submit" style={{ marginTop: 24, marginBottom: 25 }}>Order Now</Button>
                </DescriptiveContainer>
                <HomeImg src={HomeLogo} alt="home's logo"/>                
            </FirstContainer>                       
            <CategoryCarousel />
        </Container>

)
}

export default Home