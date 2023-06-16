import React, { useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import UseTitle from './UseTitle';

const Login = () => {
     
    const { LogIn, GoogleSignIn, user } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
    const from = location?.state?.form || "/";
    console.log(user);
    useEffect(()=>{
        if (!user) {
            toast('you need to first login')
       }
    },[user])
    UseTitle("login");
    const handleGoogleSignIn = () => {
        GoogleSignIn()
            .then((result) => {
                console.log(result.user);
                navigate(from);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const loginInfo = { email, password };
        console.log(loginInfo);
        LogIn(email, password)
            .then((result) => {
                console.log(result.user);
                navigate(from);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    return (
        <div>
            <ToastContainer />
            <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url('https://media.istockphoto.com/id/157533406/photo/close-up-view-of-computer-screen-on-website-login-page.jpg?b=1&s=170667a&w=0&k=20&c=HeaBA_NMcltj_fOeB1AsW1bsLOUbGAXLsK1UPMoH-L4=')` }}>
                <div className="hero-content flex-col">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold text-[orange]"></h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className='text-center text-2xl font-extrabold'>Login now!!</div>
                            <form onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" name='email' required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <div>
                                i am new in car toys <Link to='/register'><button className='underline font-semibold text-primary'>Register</button></Link>
                            </div>
                            <div className='text-center'>
                                <button className='btn btn-success' onClick={handleGoogleSignIn}>google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Login;