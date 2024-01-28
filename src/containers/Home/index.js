import React from "react"

import HomeLogo from '../../assets/HomeLogo.svg'
// import blackBackground from '../../assets/Vector 1 black_background.svg'

import { Container, FirstContainer, DescriptiveContainer, HomeImg} from './styles'
import CategoryCarousel from "../../components/CategoryCarousel"

function Home() {
    
    return (
        <Container>
            <FirstContainer>                
                <DescriptiveContainer >
                    <p className='DescriptiveTitle' alt='Descriptive Title'>delight Your best</p>
                    <p className='LocalTitle'>Burger Shop!</p>
                    <p className='Description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra a pellentesque consectetur.</p>
                </DescriptiveContainer>
                <HomeImg src={HomeLogo} alt="home's logo"/>                
            </FirstContainer>                       
            <CategoryCarousel />
        </Container>

)
}

export default Home