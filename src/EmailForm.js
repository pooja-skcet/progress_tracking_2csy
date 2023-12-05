import React, { Component } from 'react';
class EmailForm extends Component {
 constructor(props) {
 super(props);
 this.state = {
 email: '',
 error: ''
 };
 }
 handleEmailChange = (event) => {
 this.setState({ email: event.target.value });
 };
 validateEmail = (inputEmail) => {
 const emailRegex = /\S+@\S+\.\S+/;
 return emailRegex.test(inputEmail);
 };
 handleSubmit = (event) => {
 event.preventDefault();
 const { email } = this.state;
 if (this.validateEmail(email)) {
 console.log('Submitted Email:', email);
 this.setState({ error: '' });
 // Additional submit logic here
 } else {
 this.setState({ error: 'Please enter a valid email address.' });
 }
 };
 render() {
 const { email, error } = this.state;
 return (
 <form onSubmit={this.handleSubmit}>
 <label>
 Email:
 <input
 type="email"
 value={email}
 onChange={this.handleEmailChange}
 />
 </label>
 {error && <div style={{ color: 'red' }}>{error}</div>}
 <button type="submit">Submit</button>
 </form>
 );
 }
}
export default EmailForm;