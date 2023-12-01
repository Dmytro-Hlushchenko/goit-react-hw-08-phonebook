import styled from "styled-components";
import * as Yup from 'yup';

export const InputFields = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-left: 40px;
    width: 300px;
`

export const AddBtn = styled.button`
    width: 304px;
`

export const SubmitSchema = Yup.object().shape({
  
});

export const StyledLoginBtn = styled.button`
 font-size: 17px;
    font-weight: 600;
    padding: 10px 15px;
    margin-top: 15px;
    border-radius: 4px;
    color: white; 
   background-color: rgba(99, 212, 240, 0.989);
  width: 130px;
  background: grey;
  border-color: transparent;
  box-shadow: 0px 1px  2px 0px rgba(86, 114, 110, 0.856); 

    cursor: pointer;
    letter-spacing: 0.5px;


    &:hover,
    &:focus{
        background-color: blue;
    box-shadow: 0px 1px  2px 1px rgba(86, 114, 110, 0.856); 
    }
`


export const StyledLoginFormLabel = styled.label`
position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 20px;
    font-weight: 500;

    .formIcon{
        position: absolute;
        left: 15px; 
        top: 59px; 
        transform: translateY(-50%);
        color: rgb(87, 87, 87);
    }

    .passwordIcon{
        position: absolute;
        right: 15px; 
        top: 60px; 
        transform: translateY(-50%);
        color: rgb(87, 87, 87);
        font-size: '30px';
    }

`