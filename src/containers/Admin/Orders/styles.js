import styled from "styled-components"
import ReactSelect from "react-select"

export const Container = styled.div`    
    padding: 20px;
    @media (max-width: 768px) {
        padding: 10px;
    }
`
export const ProductsImg = styled.img`
    width: 60px;
    border-radius: 5px;
`
export const ReactSelectStyle = styled(ReactSelect)`
    width: 250px;
    .css-13cymwt-control{
        cursor: pointer;
    }    
`
export const Menu = styled.div`    
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`
export const LinkMenu = styled.a`
    color: #323d5d;
    cursor: pointer;
    font-weight: ${props => props.isActiveStatus ? 'bold' : '400'};
    border-bottom: ${props => props.isActiveStatus ? '2px solid #9758A6' : 'none'};
    padding-bottom: 5px;

    @media (max-width: 768px) {
        padding: 10px;
        margin: 5px 0;
        width: 50%;
        text-align: center;
        border-top: ${props => props.isActiveStatus ? '2px solid #9758A6' : 'none'};
    }
`