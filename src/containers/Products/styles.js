import styled from "styled-components"


export const Container = styled.div`
    background: #e5e5e5;       
    width: 100vw;
`

export const ProductsImg = styled.img`
    width: 100vw;
    height: auto;
`
export const CategoriesMenu = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 2px 0px 2px;
    justify-content: space-around;
    width: 100vw;
`

export const CategoryButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    border-bottom: ${props => props.isActiveCategory && '2px solid #9758A6'};
    color: ${props => props.isActiveCategory ? '#9758A6' : '#9A9A9D'};
    font-size: 17px;
    line-height: 20px;
    padding-bottom: 5px;
`

export const ProductsContainer = styled.div`
    display: grid;    
    gap: 20px;
    padding: 40px 5px;
    justify-items: center;    
    margin-top: 20px;
    width: 100vw;

    /* Definindo o layout padrão para telas pequenas */
    grid-template-columns: 1fr;

    /* Ajustando o layout para telas maiores */
    @media (min-width: 800px) {
        /* grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); */
        grid-template-columns: repeat(2, 1fr);
        gap:10px;        
    }

    @media (min-width: 1200px) {
        /* grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); */
        grid-template-columns: repeat(3, 1fr);
        gap:5px;
    }

    @media (min-width: 1600px) {
        /* grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); */
        grid-template-columns: repeat(4, 1fr);
        gap:5px;
    }
`