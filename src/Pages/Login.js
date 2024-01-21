import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../Context/AuthContext';

const Login = () => {

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = await signIn(email, password);
      if (result._tokenResponse.registered === true) {
        navigate("/home");
      }
      setLoading(false);
    } catch (err) {
      if(err.message === "Cannot read properties of undefined (reading 'registered')") {
        alert("Wrong Credentials");
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
              <h1 className='text-3xl font-bold'>Sign In</h1>
              <form className='w-full flex flex-col py-4' onSubmit={handleLogin}>
                <input className='p-3 my-2 bg-gray-700 rounded' type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input className='p-3 my-2 bg-gray-700 rounded' type='password' placeholder='Password' autoComplete='current-password' value={password} onChange={(e) => setPassword(e.target.value)} />
                {
                  !loading && <button className='bg-red-600 py-3 my-6 rounded font-bold'>SignIn</button>
                }
                {
                  loading && <button className='bg-red-600 py-3 my-6 rounded font-bold'>Loading...</button>
                }
                <div className='flex justify-between items-center text-sm text-gray-600'>
                  <p><input className='mr-2' type='checkbox' />Remember Me</p>
                  <p>Need Help ?</p>
                </div>
                <p className='py-4'><span className='text-gray-600'>New to netflix ? </span>
                  <Link to="/signup">SignUp</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login