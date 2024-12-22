import { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8000/api/v1/users/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className='w-full max-w-sm mx-auto mt-10 p-6 rounded-md shadow-md'>
      {user ? (
        <div>
          <h2 className='text-3xl font-semibold'>Welcome, {user.fullName}</h2>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
