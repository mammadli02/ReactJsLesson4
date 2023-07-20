import { Formik } from 'formik';
import React, { Component } from 'react'

export class Form extends Component {
    initialValues={ email: '', password: '' }
    constructor(){
        super();

        this.handleValues=this.handleValues.bind(this)
        this.handleForSubmit=this.handleForSubmit.b
    }

    handleValues(values){
        
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
    }
    handleForSubmit(values, options){
       console.log(values);
       options.resetForm()
    }
  render() {
    const renderFormContent=(params)=>{
console.log(params);
return <div>
    <form onSubmit={params.handleForSubmit}>
<input
  type="email"
  name="email"
  onChange={params.handleChange}
  onBlur={params.handleBlur}
  value={params.values.email}
/>
{/* {errors.email && touched.email && errors.email} */}
<input
  type="password"
  name="password"
  onChange={params.handleChange}
  onBlur={params.handleBlur}
  value={params.values.password}
/>
{/* {errors.password && touched.password && errors.password} */}
<button type="submit" disabled={params.isSubmitting}>
  Submit
</button>
</form></div>
    }
    return (
        <div>
        <h1>Anywhere in your app!</h1>
        <Formik
          initialValues={this.initialValues}
          validate={this.handleValues}
          onSubmit={this.handleForSubmit}
          

        >
            {renderFormContent}
        </Formik>
        </div>
    )
  }
}

export default Form