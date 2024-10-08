import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Alert from './Alert';  

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8000/api/v1/users/login', formData);
      
      setAlert({ message: 'Login successful!', type: 'success' });
      
      localStorage.setItem('token', response.data.token);
      navigate('/'); 
    } catch (error) {
      console.log(error);
      
      setAlert({ message: 'Login failed. Check your credentials and try again.', type: 'danger' });
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto mt-10 p-6 rounded-md shadow-md bg-gradient-to-r from-orange-500 to-orange-800">
      <h2 className="text-3xl font-semibold text-center">Login</h2>
      {alert && <Alert message={alert.message} type={alert.type} />}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <button type="submit" className="w-full bg-purple-600 hover:bg-purple-400 text-white py-2 px-4 rounded-md">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
