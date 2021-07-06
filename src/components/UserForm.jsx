import React, { useState } from 'react';

const UserForm = (props) =>{
    const{inputs, setInputs} = props;
    const [error, setError] = useState(false);
    const [validFirst, setValidFirst] = useState("");
    const [validLast, setValidLast] = useState("");
    const [validEmail, setValidEmail] = useState("");
    const [validPassword, setValidPassword] = useState("");
    const [validConfirmPassword, setValidConfirmPassword] = useState("");

        const onChange = e => {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value
            })
            handleChange(e)
        }

        const handleChange = (e) => {
            e.preventDefault();
            if (inputs.firstName.length < 2){
                setValidFirst('First name must be at least 2 characters long')
                setError(true);
            } else{
                setValidFirst('Acceptable!')
                setError(false);
            }
            if (inputs.lastName.length < 2){
                setValidLast('Last name must be atleast 2 characters long')
                setError(true);
            } else{
                setValidLast('Acceptable!')
                setError(false);
            }
            if (inputs.email.length < 5){
                setValidEmail('Email must be at least 5 characters long')
                setError(true);
            } else{
                setValidEmail('Acceptable!')
                setError(false);
            }
            if (inputs.password.length < 8){
                setValidPassword('Password must contain at least 8 characters')
                setError(true);
            } else{
                setValidPassword('Acceptable!')
                setError(false);
            }
            if (inputs.confirmPassword !== inputs.password){
                setValidConfirmPassword('Passwords must match.')
                setError(true);
            } else{
                setValidConfirmPassword('Acceptable!')
                setError(false);
            }
            if(error === false){
                setInputs({
                    ...inputs,
                    [e.target.name]: e.target.value
                })
            }
        }

    return(
        <form onSubmit = { (e) => e.preventDefault}>
            <div className='form-group'>
                <label htmlFor="firstName">First Name</label>
                <input onChange={onChange} type="text" name="firstName" />
            </div>
            <div>{ validFirst? <p>{validFirst}</p>: '' }</div>


            <div className='form-group'>
                <label htmlFor="lastName">Last Name</label>
                <input onChange={onChange} type="text" name="lastName"/>
            </div>
            <div>{ validLast? <p>{validLast}</p>: '' }</div>


            <div className='form-group'>
                <label htmlFor="email">Email</label>
                <input onChange={onChange} type="text" name ="email" />
            </div>
            <div>{ validEmail? <p>{validEmail}</p>: '' }</div>

            <div className='form-group'>
                <label htmlFor="password">Password</label>
                <input onChange={onChange} type="password" name="password" />
            </div>
            <div>{ validPassword? <p>{validPassword}</p>: '' }</div>

            <div className='form-group'>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input onChange={onChange} type="password" name="confirmPassword" />
            </div>
            <div>{ validConfirmPassword? <p>{validConfirmPassword}</p>: '' }</div>
            <div>
                <input onClick={onChange} type="submit" value = "Submit"/>
            </div>
        </form>
    );
};
export default UserForm;