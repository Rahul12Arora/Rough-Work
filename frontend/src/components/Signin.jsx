import React from 'react'

function Signin() {
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
      e.preventDefault();
      let formData = { email: email, password: password };
      // Handle form submission logic here
      console.log('Form submitted with state:', formData);
      // You can replace the console.log statement with your actual form submission logic
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    );
  };

export default Signin