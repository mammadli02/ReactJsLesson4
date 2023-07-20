import React, { Component, createRef } from 'react'
import { isEmail } from '../utils/isEmail'

export class Formik extends Component {
    // fullNameInput=createRef()
    // emailInputRef=createRef()
    // passwordInputRef=createRef()
    constructor(){
        super()
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleChangeField=this.handleChangeField.bind(this)
        this.state={
fullname:"",
email:"",
password:""
        }
    }

handleChangeField(e){
    const inputName=e.target.name
    const inputValue=e.target.value
    this.setState({[inputName]:inputValue})

}

    handleSubmit(e){
e.preventDefault()
// const fullname=this.fullNameInput.current.value
// const email=this.emailInputRef.current.value
// const password=this.passwordInputRef.current.value
// const form={fullname,email,password}
// console.log(form);
const fullname=this.state.fullname
const email=this.state.email
const password=this.state.password
const form={fullname,email,password}
console.log(form);


// this.fullNameInput.current.value=""
// this.emailInputRef.current.value=""
// this.passwordInputRef.current.value=""
    }
  render() {
    console.log(this.state);
    const isNotEmail=!isEmail(this.state.email)
    return (
      <>
      <form onSubmit={this.handleSubmit}>
{/* <input type='text' name='fullname' ref={this.fullNameInput}/>
<input type='email' name='email' ref={this.emailInputRef}/>
<input type='password' name='password' ref={this.passwordInputRef}/> */}

<input value={this.state.fullname} type='text' name='fullname' onChange={this.handleChangeField} />
<input value={this.state.email} type='email' name='email' onChange={this.handleChangeField} />
{isNotEmail && <span>Error message</span>}
<input value={this.state.password} type='password' name='password'  onChange={this.handleChangeField}/>

<button disabled={isNotEmail} type='submit'>SEND</button>








      </form>
      </>
    )
  }
}

export default Formik