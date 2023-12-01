import styled from "styled-components";
import * as Yup from 'yup';

export const InputFields = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-left: 40px;
    width: 300px;
`

export const SubmitSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, 'Only letters are allowed')
    .min(2, 'Too Short!')
    .required('Please fill that'),
});

export const StyledBtn = styled.button`
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

export const StyledRegFormLabel = styled.label`
position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 20px;
    font-weight: 500;

`