import React ,{useState} from 'react'

const Formvalid = () => {
    const [state,setState]= useState({
        email: '',
        emailError: false,
        emailHelperText:'',
        password: '',
        passwordError: false,
        passwordHelperText: '',
    });
    const handleEmail = (e) => {
        setState({
        email: e.target.value,
        emailError: false,
        emailHelperText: ''
        });
        }
        const handlePassword = (e) => {
        setState({
        password: e.target.value,
        passwordError: false,
        passwordHelperText: ''
        });
        }
        const handleSubmit = (e) => {
            e.preventDefault();
            
            if(email === ''){
            setState({
            emailError: true,
            emailHelperText: 'You must fill in your email address'
            });
            }
            if(password === ''){
            setState({
            passwordError: true,
            passwordHelperText: 'You must fill in your password'
            });
            }

            if (email !== '' && password !== '') {
            alert('Submitted Successfully');
            }
            }
        return (
            <div></div>
        )
          };
          export default Formvalid;