
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../Firebase/AuthProvider";
import useToken from "../../Hooks/useToken";

const Login = () => {
    const { signin, google } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginError, setLoginError] = useState('')
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail)
    const location = useLocation()
    const navigate = useNavigate()

    const form = location.state?.form?.pathname || '/'
    const handleGoogle = () => {
        google()
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    if (token) {
        navigate(form, { replace: true })
    }

    const handleLogin = data => {
        console.log(data)
        signin(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                setLoginUserEmail(data.email)
            })
            .catch(error => {
                console.error(error)
                setLoginError(error.message)
            })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-6'>
                <h2 className='text-4xl'>Login</h2>
                <div>
                    <form onSubmit={handleSubmit(handleLogin)} >

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Input Email</span>
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
                        <div>
                            {loginError && <p>{loginError}</p>}
                        </div>
                        <p>New to doctors portal? <Link className='text-primary' to='/signup'>Create new account</Link></p>
                        <div className='divider'>OR</div>
                        <button onClick={handleGoogle} className='btn btn-outline w-full'>Continue with google</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;