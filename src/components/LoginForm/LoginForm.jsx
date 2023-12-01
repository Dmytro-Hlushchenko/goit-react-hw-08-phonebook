import { Formik, Field, Form } from 'formik';
import { InputFields, StyledLoginBtn, StyledLoginFormLabel } from './LoginForm.styled';
import { SubmitSchema } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { loginUserThunk } from 'redux/auth/operations';

   
export default function LoginForm() {
  const dispatch = useDispatch()
    
  const onFormSubmit = data => {
     dispatch(loginUserThunk({
         name: data.name,
         email: data.email,
         password: data.password
      })
      );
  };
    
    return(
      <Formik
        initialValues={{
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
            <StyledLoginFormLabel>e-mail:
            <Field
              name="email"
              placeholder="enter your e-mail"/>
            </StyledLoginFormLabel>
            <StyledLoginFormLabel>password:
            <Field
              name="password"
              placeholder="enter your password"/>
            </StyledLoginFormLabel>
            <StyledLoginBtn type="submit">Log in</StyledLoginBtn>
          </InputFields>
        </Form> 
    </Formik>
    )
}