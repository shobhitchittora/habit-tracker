import './Page.css';
import { Input, Grid, Button, Alert } from '../components';
import { useState } from 'react';

function Signup() {
  const [name, updateName] = useState('');
  const [email, updateEmail] = useState('');
  const [password, updatePassword] = useState('');
  const [error, updateError] = useState({ message: '' });

  const handleName = (e) => {
    if (e.target) {
      updateName(e.target.value)
    }
  }
  const handleEmail = (e) => {
    if (e.target) {
      updateEmail(e.target.value)
    }
  }
  const handlePassword = (e) => {
    if (e.target) {
      updatePassword(e.target.value)
    }
  }

  const validateForm = () => {
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = validateForm();

    if(error){
      updateError(error);
      return;
    }
    const data = {
      name,
      email,
      password
    }

    const response = await fetch('/signup', {
      method: 'POST',
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      body: JSON.stringify(data)
    }).json();

    if(response.ok){
      console.log(response);
    }
  }

  return (
    <div className="Page">
      <form onSubmit={handleSubmit}>
        <Grid
          direction="column"
          justify="center"
          alignItems="center"
        >

          {
            error && error.message && <Alert type="error" text="Alert message" />
          }
          <Input value={name} onChange={handleName} placeholder={'Name'} type="text" />
          <Input value={email} onChange={handleEmail} placeholder={'Email'} type="email" />
          <Input value={password} onChange={handlePassword} placeholder={'Password'} type="password" />
          <Button large>Submit</Button>
        </Grid>
      </form>

    </div>
  )
}

export default Signup;