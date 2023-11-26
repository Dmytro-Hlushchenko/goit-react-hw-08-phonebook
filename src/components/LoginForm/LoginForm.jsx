import { Formik, Field, Form, ErrorMessage } from 'formik';
import { InputFields, AddBtn } from './LoginForm.styled';
import { SubmitSchema } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { loginUserThunk } from 'redux/operations';

   
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
            <label>e-mail:
            <Field 
              name="email"
              placeholder="enter your e-mail"/>
            </label>
            <label>password:
            <Field 
              name="password"
              placeholder="enter your password"/>
            </label>
            <AddBtn type="submit">Log in</AddBtn>
          </InputFields>
        </Form> 
    </Formik>
    )
}