import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import SignUp from './Signup';
import Dashboard from './Dashboard'

import LoginPage from './LoginPage'
 import Lifecycle from './Lifecycle';
 import HOC from './HOC'
 import Array from './Array';
 import Validation from './Validation'
 import UserProfileCard from './UserProfileCard'
 import ContactList from './ContactList'
 import SignUpForm from './SignUpForm'
 import TodoList from './TodoList'
 import Timer from './Timer'
import DaysForm from './DaysForm';
import EmailForm from './EmailForm';
import TwoWayBindingComponent from './TwoWayBindingComponent';
import Usestate from './Hooks/Usestate/Usestate'
import Useeffect from './Hooks/Useeffect/Useeffect'
import Usecontext from './Hooks/Usecontext/Usecontext'
import Condition from './ConditionalRendering/Condition'
import Errorhandling from './Errorhandling'
import Errorboundary from './Errorboundary'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Timer/>
  <Condition/>
  <Usestate/>
  <Useeffect/>
  <Usecontext/>
  <Validation/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
