import { useDispatch } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { InputFields, AddBtn } from './RegistrationForm.styled';
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
            <label>name:
            <Field 
              name="name"
              placeholder="Jane"/>
              <ErrorMessage name="name"
              />
            </label>
            <label>e-mail:
            <Field 
              name="email"
                placeholder="enter your e-mail"
                type="text"
              />
              <label>password:
              <Field 
              name="password"
                placeholder="enter your password"
                type="text"
              />
              </label>
              <ErrorMessage name="number" />
            </label>
            <AddBtn type="submit">Register</AddBtn>
          </InputFields>
        </Form> 
    </Formik>
    )
};