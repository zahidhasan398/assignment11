import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import UseTitle from './UseTitle';

const Register = () => {
    UseTitle('register');
    const {updateProfilePicandName,Signup,logOut}=useContext(AuthContext);
    const navigate=useNavigate();

  const handleSubmit=(event)=>{
       event.preventDefault();
       const form=event.target;
       const name=form.name.value;
       const photourl=form.photourl.value;
       const email=form.email.value;
       const password=form.password.value;
       const registerInfo={name,photourl,email,password};
       console.log(registerInfo);
       Signup(email,password)
       .then(result=>{
        updateProfilePicandName(result.user,name,photourl)
        .then(()=>{
            console.log("profile is updated");
            logOut()
            .then(()=>{
                console.log("succsessfully log out");
                navigate("/login");
            })
            .catch((error)=>{
                console.log(error.message);
            })
        })
        .catch((error)=>{
            console.log(error.message);
        })
        console.log(result.user);
       })
       .catch((error)=>{
        console.log(error.message);
       })
  }

    return (
        <div className="hero min-h-screen bg-base-200" style={{backgroundImage:`url('https://media.istockphoto.com/id/497347644/photo/hand-pressing-register-now.jpg?b=1&s=170667a&w=0&k=20&c=ZV58v5dckr5lEbp-D2ke7PxpkMiR-G6x_MvgBTm-2Hs=')`}}>
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold text-[tomato]">Register now</h1>
                    
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">phot url</span>
                            </label>
                            <input type="text" placeholder="photo url" name='photourl' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Register</button>
                        </div>
                        </form>
                        <div>
                            i have already an account <Link to='/login'><span className='underline font-semibold text-primary'>Log in</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;