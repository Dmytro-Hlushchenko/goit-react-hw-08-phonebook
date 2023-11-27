import styled from "styled-components";

export const ContainerStyled = styled.div`
 display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

export const StyledBtn = styled.button`
 display: inline-block;
    font-size: 15px;
    font-weight: 600;
    padding: 10px ;
    border-radius: 4px;
    text-align: center;
    background-color: transparent;
    border: 3px solid; 
    cursor: pointer;
    &:hover,
    &:focus{
   
    background-color: blue;
    border-color: transparent;
    box-shadow: 0px 1px  2px 0px rgba(86, 114, 110, 0.856); 
    color: white;
}
`