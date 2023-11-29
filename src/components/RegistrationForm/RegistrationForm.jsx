import { useDispatch } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { InputFields, StyledBtn, StyledRegFormLabel } from './RegistrationForm.styled';
import { SubmitSchema } from './RegistrationForm.styled';
import { registerUserThunk } from 'redux/operations';


   
export default function RegistrationForm() {
  const dispatch = useDispatch()

    const onFormSubmit = data => {
      
      dispatch(registerUserThunk({
         name: data.name,
         email: data.email,
         password: data.password
      })
      );
   }
    
    return(
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={SubmitSchema}

        onSubmit={(values, actions) => {
          onFormSubmit(values);
          actions.resetForm();
        }}
      >
        <Form>
          <InputFields>
            <StyledRegFormLabel>name:
            <Field 
              name="name"
              placeholder="Jane"/>
              <ErrorMessage name="name"
              />
            </StyledRegFormLabel>
            <StyledRegFormLabel>e-mail:
            <Field 
              name="email"
                placeholder="enter your e-mail"
                type="text"
              />
              </StyledRegFormLabel>
              <StyledRegFormLabel>password:
              <Field 
              name="password"
                placeholder="enter your password"
                type="password"
              />
              </StyledRegFormLabel>
              <ErrorMessage name="number" />
            <StyledBtn type="submit">Register</StyledBtn>
          </InputFields>
        </Form> 
    </Formik>
    )
};