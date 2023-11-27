import { Formik, Field, Form, ErrorMessage } from 'formik';
import { InputFields, AddBtn } from './FormInput.styled';
import { useDispatch, useSelector } from "react-redux";
import { addContactThunk } from 'redux/operations';
import { SubmitSchema } from './FormInput.styled';
import { getContacts } from 'redux/selectors';
   
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
            <label>Name:
            <Field 
              name="name"
              placeholder="Jane"/>
              <ErrorMessage name="name" />
            </label>
            <label>Number:
            <Field 
              name="number"
              placeholder="658-58-69"
              type="tel"/>
              <ErrorMessage name="number" />
            </label>
            <AddBtn type="submit">Add contact</AddBtn>
          </InputFields>
        </Form> 
    </Formik>
    )
}