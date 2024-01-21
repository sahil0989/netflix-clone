import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';

const SignUp = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/home')
      setLoading(false);
    } catch (err) {
      if (email.length === 0 || password.length === 0) {
        alert("All field are required");
      } else {
        if (password.length < 6) {
          alert("Password must contain atleast 6 words")
        } else {
          if (err.message === "Cannot read properties of undefined (reading 'idToken')") {
            alert("Email is already takken");
          }
        }
      }

    }
  }

  return (
    <>
      <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover bg-slate-50' src="https://dkr0pu7ej5xex.cloudfront.net/wp-content/uploads/2017/04/24135159/Netflix-Background.jpg" alt='/' />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-full'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>Sign Up</h1>
              <form className='w-full flex flex-col py-4' onSubmit={handleSubmit}>
                <input className='p-3 my-2 bg-gray-700 rounded' type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input className='p-3 my-2 bg-gray-700 rounded' type='password' placeholder='Password' autoComplete='current-password' value={password} onChange={(e) => setPassword(e.target.value)} />
                {
                  !loading && <button className='bg-red-600 py-3 my-6 rounded font-bold'>SignUp</button>
                }
                {
                  loading && <button className='bg-red-600 py-3 my-6 rounded font-bold'>Plz. Wait...</button>
                }
                <div className='flex justify-between items-center text-sm text-gray-600'>
                  <p><input className='mr-2' type='checkbox' />Remember Me</p>
                  <p>Need Help ?</p>
                </div>
                <p className='py-4'><span className='text-gray-600'>Already Subscibed to Netflix ?</span>
                  <Link to="/">SignIn</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp