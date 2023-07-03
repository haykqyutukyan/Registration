import './App.css';
import Button from './button/button';
import Email from './email/email';
import Password from './password/password';
import { useState } from "react"
import axios from "axios"

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    const handleButtonClick = () => {
      axios.post("http://chgitenq ur", { data: "es el chgitenq" })
        .then(response => {
         console.log(response.data);
        })
        .catch(error => {
         console.error(error);
        });
    }	
    handleButtonClick()
    setEmail('');
    setPassword('');
    
  }

  return (
    <div className="App">
      <h1>Sign up</h1>
      <Email value={email} onChange={setEmail}/>
      <Password value={password} onChange={setPassword}/>
      <Button onClick={handleSignUp}/>
    </div>
  );
}

export default App;
