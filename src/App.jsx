import React, {useState} from 'react';
import Result from './components/Results';
import Form from './components/UserForm';
import './App.css';

function App() {

  const[ state, setState ] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }); 
  return (
    <div className="App">
      <Form inputs={state} setInputs={setState}/>
      <Result data={state} />
    </div>
  );
}

export default App;