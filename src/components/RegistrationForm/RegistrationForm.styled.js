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
  name: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, 'Only letters are allowed')
    .min(2, 'Too Short!')
    .required('Please fill that'),
});