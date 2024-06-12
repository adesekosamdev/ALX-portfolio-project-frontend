// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import NavBarAuth from '../components/NavBarAuth';

const Register = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/register', formData);
      // const token = response.data.token;
      // console.log(token);
      // localStorage.setItem('token', token);
      alert('User registered successfully');
      console.log(response.data);
    } catch (error) {
      console.error('Error registering user', error);
    }
  };

  return (
    <div className='bg-background lg:min-h-screen text-black text-dark-corn'>
      <NavBarAuth />
      <main className='relative w-full lg:min-h-[100vh] flex'>
        <section className='w-1/2 min-h-full lg:pt-[60px] bg-white lg:pl-[60px] '>
          <div className='lg:h-[573px] lg:w-[509px] flex flex-col lg:space-y-[60px]'>
            <h1 className='text-[37px]'>Sign Up</h1>
            <form onSubmit={handleSubmit} className='flex flex-col lg:space-y-[40px]'>
              {/* <div className='flex flex-col'>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  required />
              </div> */}
              <div className='flex flex-col lg:space-y-[20px]'>
                <label className='text-[24px]' htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className='w-[300px] h-[40px] border-[1px] border-[#165FC2] p-[10px] rounded'
                  />
              </div>
              <div className='flex flex-col lg:space-y-[20px]'>
                <label className='text-[24px]' htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="****"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className='w-[300px] h-[40px] border-[1px] border-[#165FC2] p-[10px] rounded'
                  />
              </div>
              <div className='flex flex-col lg:space-y-[20px]'>
                <label htmlFor="confirmPassword">Confirm password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="****"
                  required
                  className='w-[300px] h-[40px] border-[1px] border-[#165FC2] p-[10px] rounded'
                  />
              </div>
              <button
                type="submit"
                className='mt-[60px] lg:w-[150px] lg:h-[40px] bg-[#4680CC] rounded-[30px] text-white'
                style={{marginTop: 60}}
                >
                Sign Up
              </button>
            </form>
          </div>
        </section>
        <section className="absolute right-0 bottom-0  bg-[url('/src/images/Piggybank.svg')] bg-contain bg-no-repeat h-[618px] w-[633px] px-[20px]">
					</section>
      </main>
    </div>
  );
};

export default Register;
