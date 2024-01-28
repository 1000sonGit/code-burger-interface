import styled from "styled-components"
import blackBackground from '../../assets/Vector 1 black_background.svg'

export const Container = styled.div`
`
export const FirstContainer = styled.div`
    background-color: white;
    background-image: url("${blackBackground}");
    background-repeat: no-repeat;
    background-position: top left;
    background-size: 100vw 230px;
    display: grid;
    grid-template-columns: 50% 50%;    
    
`

export const HomeImg = styled.img`
    width: 60%;
    height: 230px;

`
export const DescriptiveContainer = styled.div`    
    width: minmax(20% 428px);
    height: minmax(20% 230px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .DescriptiveTitle {
        font-weight: 400;
        font-family: 'Playball', cursive;
        font-style: italic;
    }

    .LocalTitle {        
        border: 3px;
        font-size: 62px;
        font-weight: 700;
        color: white;
        -webkit-text-stroke-width: 3px;
        -webkit-text-stroke-color: #9758A6;
    }

    .Description {
        font-weight: 400;
    }
`

