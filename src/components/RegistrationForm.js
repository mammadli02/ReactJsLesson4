import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

class RegistrationForm extends React.Component {
  render() {
    return (
      <div>
        <h2>Register</h2>
        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log('Form values:', values);
            this.setState({ submittedData: values });
            resetForm();
            Swal.fire({
                title: 'Success!',
                text: 'Data added successfully.',
                icon: 'success',
                confirmButtonText: 'Ok',
              });
        
          }}
        >
          {({ handleSubmit }) => (
            <Form>
              <div>
                <label htmlFor="username">Username:</label>
                <Field type="text" name="username" id="username" />
                <ErrorMessage name="username" component="div" />
              </div>

              <div>
                <label htmlFor="email">Email:</label>
                <Field type="email" name="email" id="email" />
                <ErrorMessage name="email" component="div" />
              </div>

              <div>
                <label htmlFor="password">Password:</label>
                <Field type="password" name="password" id="password" />
                <ErrorMessage name="password" component="div" />
              </div>

              <button type="submit" onClick={handleSubmit  }>     Submit</button>
            </Form>
          )}
        </Formik>

    
        {this.state && this.state.submittedData && (
            
          <div style={{ color: 'black' }}>
            <h3>Submitted Data</h3>
            <p>Username: {this.state.submittedData.username}</p>
            <p>Email: {this.state.submittedData.email}</p>
            <p>Password: {this.state.submittedData.password}</p>
          </div>
          
        )}
      </div>
    );
  }
}

export default RegistrationForm;
