import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';
import Swal from 'sweetalert2';
import UseTitle from './UseTitle';

const AddToy = () => {
    const {user}=useContext(AuthContext);
    const [currentUser,setCurrentUser]=useState({});
    UseTitle("add a toy");
    useEffect(()=>{
        setCurrentUser(user);
    },[user])
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target;
        const photourl=form.photourl.value;
        const name=form.name.value;
        const sellerName=form.sellerName.value;
        const sellerEmail=form.sellerEmail.value;
        const subcategory=form.subcategory.value;
        const price=form.price.value;
        const rating=form.rating.value;
        const quantity=form.quantity.value;
        const details=form.details.value;
        const toyInfo={
        name,sellerName,sellerEmail,subcategory,price,rating,quantity,details,photourl
        };
        console.log(toyInfo);
        fetch("https://toy-market-server-mu.vercel.app/addtoy",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(toyInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data?.acknowledged === true)
            {
                Swal.fire({
                    icon: 'success',
                    title: 'successfully added',
                    text: 'good job',
                    footer: ''
                  })
                  
            }
        });


    }

    return (
        <div className='max-w-7xl mx-auto bg-gradient-to-r from-cyan-500 to-blue-300 p-7 rounded-lg'>
            <div className='text-center text-5xl my-10 font-extrabold'>add your toy</div>
            <form className='grid md:grid-cols-2 grid-cols-1 space-x-5' onSubmit={handleSubmit}>
            <div className="form-control">
                    <label className="label">
                        <span className="label-text">photo Url</span>
                    </label>
                    <input type="text" placeholder="name" className="input input-bordered" name='photourl' required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">name</span>
                    </label>
                    <input type="text" placeholder="name" className="input input-bordered" name='name' required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">seller name</span>
                    </label>
                    <input type="text"  placeholder="seller name" className="input input-bordered" name='sellerName' value={currentUser?.displayName} />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">seller email</span>
                    </label>
                    <input type="text" placeholder="seller email" className="input input-bordered" name='sellerEmail' value={currentUser?.email} />
                </div>
                <div className="form-control">
                <label className="label">
                        <span className="label-text">select category</span>
                    </label>
                    <select name="subcategory" required id="">
                        <option value="sports">sports car</option>
                        <option value="regular">regular car</option>
                        <option value="deffence">deffence car</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" required placeholder="price" className="input input-bordered" name='price' />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" required placeholder="rating" className="input input-bordered" name='rating' />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Abaileble quantity</span>
                    </label>
                    <input type="text" required placeholder="quantity" className="input input-bordered" name='quantity' />
                </div>
                <div className="form-control md:col-span-2">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <textarea name="details" required id="" className='w-full p-2' rows="5"></textarea>
                </div>
                <div className='my-5'>
                    <button className='btn' type='submit'>add toy</button>
                </div>

            </form>
        </div>
    );
};

export default AddToy;