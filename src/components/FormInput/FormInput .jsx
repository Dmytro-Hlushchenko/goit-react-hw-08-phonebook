import { Formik, Field, Form, ErrorMessage } from 'formik';
import { InputFields, StyledBtn, StyledLabel } from './FormInput.styled';
import { useDispatch, useSelector } from "react-redux";
import { addContactThunk } from 'redux/contacts/operations';
import { SubmitSchema } from './FormInput.styled';
import { getContacts } from 'redux/contacts/selectors';
   
export default function FormInput() {

  const dispatch = useDispatch();
  const prevContacts = useSelector(getContacts);

  const onFormSubmit = data => {
    
    const isExist = prevContacts.some(
      ({ name }) => name.toLocaleLowerCase() === data.name.toLocaleLowerCase());
            
    if (isExist) {
      alert(`$This Name is already in contacts.`);
      return;
    };
    
    const newContact = data;
    dispatch(addContactThunk(newContact));
  };
    
    return(
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={SubmitSchema}

        onSubmit={(values, actions) => {
          onFormSubmit(values);
          actions.resetForm();
        }}
      >
        <Form>
          <InputFields>
            <StyledLabel>Name:
            <Field 
              name="name"
              placeholder="Jane"/>
              <ErrorMessage name="name" />
            </StyledLabel>
            <StyledLabel>Number:
            <Field 
              name="number"
              placeholder="658-58-69"
              type="tel"/>
              <ErrorMessage name="number" />
            </StyledLabel>
            <StyledBtn type="submit">Add contact</StyledBtn>
          </InputFields>
        </Form> 
    </Formik>
    )
}