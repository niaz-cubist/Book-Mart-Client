import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useForm } from "react-hook-form";
import { AuthContext } from '../../Firebase/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../Hooks/useToken';

const Signup = () => {
    const { createUser, updateUser } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signupError, setSignuperror] = useState('')

    const [createdUserEmail, setcreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail)

    const navigate = useNavigate()

    if (token) {
        navigate('/')
    }

    const handleSignin = data => {
        setSignuperror('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                toast('user created successfully')
                const userInfo = {
                    displayName: data.name
                }
                console.log(userInfo)
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email)
                    })
                    .catch(error => console.error(error))
            })
            .catch(error => {
                setSignuperror(error.message)
            })

        const saveUser = (name, email) => {
            const user = { name, email }
            fetch('https://bookmart-xi.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    setcreatedUserEmail(email)
                })
        }
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-6'>
                <h2 className='text-4xl'>Sign in</h2>
                <div>
                    <form onSubmit={handleSubmit(handleSignin)} >

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Input name</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("name",)} />
                            {errors.name && <p role="alert">{errors.name?.message}</p>}
                            <label className="label">
                                <span className="label-text">Input email</span>
                            </label>
                            <input type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("email",
                                { required: 'email address is required' })} />
                            {errors.email && <p role="alert">{errors.email?.message}</p>}
                            <label className="label">
                                <span className="label-text">Input password</span>
                            </label>
                            <input type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("password", {
                                required: 'insert password',
                                minLength: { value: 6, message: 'password must be 6 cahracter' }
                            })} />
                            {errors.password && <p role="alert">{errors.password?.message}</p>}
                        </div>
                        <input className='btn btn-accent w-full mt-5' type="submit" />
                        {signupError && <p>{signupError}</p>}
                        <p>New to doctors portal? <Link className='text-primary' to='/login'>Already have new account?</Link></p>
                        <div className='divider'>OR</div>
                        <button className='btn btn-outline w-full'>Continue with google</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;