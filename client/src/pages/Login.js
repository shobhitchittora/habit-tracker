import './Page.css';
import { Input, Grid, Button } from '../components';
import { useState } from 'react';

function Login() {
  const [email, updateEmail] = useState('');
  const [password, updatePassword] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="Page">
      <form onSubmit={handleSubmit}>
        <Grid
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Input value={email} onChange={handleEmail} placeholder={'Email'} type="email" />
          <Input value={password} onChange={handlePassword} placeholder={'Password'} type="password" />

          <Button large>Submit</Button>
        </Grid>
      </form>

    </div >
  )
}

export default Login;