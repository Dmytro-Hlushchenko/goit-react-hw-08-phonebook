import styled from "styled-components";
import * as Yup from 'yup';

export const InputFields = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-left: 40px;
   
`

export const AddBtn = styled.button`
    width: 304px;
`

export const SubmitSchema = Yup.object().shape({
  
});