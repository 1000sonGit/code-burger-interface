import styled from "styled-components"


export const Container = styled.div``
export const FirstContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    margin: 150px 104px 82px 102px;
    
`

export const HomeImg = styled.img`
    width: 60%;
    height: minmax(230px 100vh);

`
export const DescriptiveContainer = styled.div`    
    width: minmax(20% 428px);
    height: minmax(20% 230px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .DescriptiveTitle {
        font-weight: 400;
        font-family: 'Playball', cursive;
        font-style: italic;
        font-size: 48px;
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
        font-size: 19px;
    }
`

