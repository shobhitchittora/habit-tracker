import './Page.css';
import { Input, Grid, Button, Alert } from '../components';
import { useState } from 'react';

function Login() {
  const [email, updateEmail] = useState('');
  const [password, updatePassword] = useState('');
  const [error, updateError] = useState({ message: '' });

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
    return { error: null };
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = validateForm();

    if (error) {
      updateError(error);
      return;
    }
    const data = {
      email,
      password
    }

    const response = await fetch('/login', {
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

    if (response.ok) {
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
          <Input value={email} onChange={handleEmail} placeholder={'Email'} type="email" />
          <Input value={password} onChange={handlePassword} placeholder={'Password'} type="password" />

          <Button large>Submit</Button>
        </Grid>
      </form>

    </div >
  )
}

export default Login;