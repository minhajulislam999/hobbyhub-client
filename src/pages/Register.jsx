import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase/firebase.config';
import toast from 'react-hot-toast';

const Register = () => {
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;

        //password validation

        if(!/[A-Z]/.test(password)){
            return toast.error("Password must contain at least one uppercase letter");
    }
        if(!/[a-z]/.test(password)){
            return toast.error("Password must contain at least one lowercase letter");
    }
        if(password.length < 6){
            return toast.error("Password must be at least 6 characters long");
    }
        //register logic here
        try{
            // await createUserWithEmailAndPassword(auth, email, password);
            const result = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(result.user,{displayName: name, photoURL: photoURL});
            toast.success("Registration successful!");
            navigate("/");


        }catch(err){
            setError(err.message);
            toast.error("Registration failed! Please try again.");
        }
    }
  return (
    <div className='min-h-screen flex items-center justify-center'>

        <div className='card w-96 shadow-xl bg-base-100 p-8'>
            <h2 className='text-2xl font-bold text-center mb-6'>Register</h2>
            <form onSubmit={handleRegister} className='space-y-4'>
                <div>
                    <label className='label'>Name</label>
                    <input type="text" name='name' className='input input-bordered w-full' required />
                </div>
                <div>
                    <label className='label'>Email</label>
                    <input type="email" name='email' className='input input-bordered w-full' required />
                </div>
                <div>
                    <label className='label'>Photo URL</label>
                    <input type="text" name='photoURL' className='input input-bordered w-full' />
                </div>
                <div>
                    <label className='label'>Password</label>
                    <input type="password" name='password' className='input input-bordered w-full' required />
                </div>

                {error && <p className='text-red-500 text-sm'>{error}</p>}

                <button type='submit' className='btn btn-primary w-full'>Register</button>

            </form>

            <p className='text-center mt-4 text-sm'>
                Already have an account? <Link to="/login" className='text-primary font-semibold'>Login</Link>
            </p>
        </div>
       
      
    </div>
  )
}

export default Register
