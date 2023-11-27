import styled from "styled-components";

export const AppStyled = styled.div`
 margin: 0 auto; 
 padding-bottom: 25px; 
 height: 100vh; 
`;

export const HeaderStyled = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:25px;
    padding: 30px 15px ;

 position: relative;

&::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 7px; 
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), transparent);}

  @media screen and (min-width: 768px){
    flex-direction: row;
    padding: 10px 20px;
    justify-content: space-between;
  }
  
.NavLink{
     display: inline-block;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 18px;
        font-weight: 700;
     letter-spacing: 0.5px;
     margin-left: 20px;

     @media screen and (min-width: 480px){
       font-size: 17px;
     font-weight: 700;
     }
    
     }
     .NavLink.active{
       color: blue;
     }
`