import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const NabBur = () => {
    const {user,logOut}=useContext(AuthContext);
    const [loggedInUser,setLoggedInUser]=useState(null);
    useEffect(()=>{
        setLoggedInUser(user);
    },[user])

    const itemsMenu=<> <li><Link to='/'>Home</Link></li>
    <li tabIndex={0}>
        <Link to="/alltoys">All Toys</Link>
    </li>
    <li><Link to='/mytoys'>My toys</Link></li>
    <li><Link to='/addtoy'>Add a toy</Link></li>
    <li><Link to='/blog'>blog</Link></li>
    </>
    const handleLogout=()=>{
         logOut()
         .then(()=>{
            console.log("successfully logged out")
         })
         .catch((error)=>{
            console.log(error.message);
         })
    }
    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                       {itemsMenu}
                    </ul>
                </div>
                <img src="https://media.istockphoto.com/id/170927700/photo/small-red-toy-car-side-view-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=QR2pmM3zqA3fNYkHMerd-ly8BEfv_3kNql125V1BU0Q=" className='w-10 h-10 rounded-full' alt="" />
                <a className="btn btn-ghost normal-case text-xl">Toy car universe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {itemsMenu}
                </ul>
            </div>
            <div className="navbar-end">
                {loggedInUser?.email ? <div className='flex items-center space-x-2'>
                  <button className='btn' onClick={handleLogout}>logout</button>
                  <button className="tooltip  tooltip-bottom" data-tip={loggedInUser?.displayName}><img src={loggedInUser?.photoURL} className='w-20 h-20 rounded-full' alt="" /></button>
                </div>:<Link to='/login'><button className='btn'>login</button></Link>}
            </div>
        </div>
    );
};

export default NabBur;