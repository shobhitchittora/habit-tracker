import './Page.css';
import { Input, Grid, Button, Alert } from '../components';
import { useContext, useState } from 'react';
import AppContext from '../AppContext';
import {
  useHistory,
  useLocation
} from "react-router-dom";

function Login() {

  const [_,setContext] = useContext(AppContext);
  const history = useHistory();
  const location = useLocation();

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

    try {
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
      }).then(res => res.json());

      setContext({
        isLoggedIn: true,
        user: response.payload
      });

      let { from } = location.state || { from: { pathname: "/" } };
      console.log(from);
      history.replace(from);
     
    } catch(e){
      console.log(e);
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