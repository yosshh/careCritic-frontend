import { useState } from 'react';
import axios from 'axios';
import Alert from './Alert';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const [formData, setFormData] = useState({
    userName: '',
    fullName: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  let navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/v1/users/register', formData);
      setSuccess('Registration successful!');
      setError('');
      console.log(response);
      navigate("/")
    } catch (error) {
      setError('Registration failed. Try again.');
      setSuccess('');
      console.log(error);
    }
  };

  return (
    <div className='w-full max-w-sm mx-auto mt-10 bg-gradient-to-r from-orange-500 to-orange-800 p-6 rounded-md shadow-md'>
      <h2 className='text-3xl font-semibold text-center'>Register</h2>

      {/* Show alerts based on success or error */}
      {error && <Alert message={error} type="danger" />}
      {success && <Alert message={success} type="success" />}

      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label htmlFor='name' className='block text-gray-700'>Name</label>
          <input
            type='text'
            name='userName'
            value={formData.userName}
            onChange={handleChange}
            required
            className='w-full px-3 py-2 border rounded-md'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='fullName' className='block text-gray-700'>Full Name</label>
          <input
            type='text'
            name='fullName'
            value={formData.fullName}
            onChange={handleChange}
            required
            className='w-full px-3 py-2 border rounded-md'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700'>Email</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            className='w-full px-3 py-2 border rounded-md'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='password' className='block text-gray-700'>Password</label>
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
            className='w-full px-3 py-2 border rounded-md'
          />
        </div>
        <button type='submit' className='w-full bg-purple-600 hover:bg-purple-400 text-white py-2 px-4 rounded-md'>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
