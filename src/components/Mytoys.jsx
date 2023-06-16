import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';
import MyDataTable from './MyDataTable';
import Swal from 'sweetalert2'
import UseTitle from './UseTitle';

const Mytoys = () => {
    UseTitle("my-toys");
    const {user}=useContext(AuthContext);
    const [handleChange,setHandleChange]=useState(false);
    const [myDatas,setMyDatas]=useState([]);
    const handleAscend=()=>{
        fetch(`https://toy-market-server-mu.vercel.app/mytoys/ascend/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setMyDatas(data));
    }
    const handleDescend=()=>{
        fetch(`https://toy-market-server-mu.vercel.app/mytoys/descend/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setMyDatas(data));
    }
    useEffect(()=>{
        fetch(`https://toy-market-server-mu.vercel.app/mytoys/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setMyDatas(data));
    },[user,handleChange])
    const handleDelete=(id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-market-server-mu.vercel.app/deltetoy/${id}`,{method:"DELETE"})
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    if(data.deletedCount >0)
                    {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                       setHandleChange(!handleChange);
                    }
                })



             
            }
          })
    }
    return (
        <div>
            <div className='text-center my-6'><span className='text-3xl font-extrabold'>my toys</span></div>
            <div className='flex justify-end space-x-3 my-5'>
                <button className='btn btn-outline btn-primary' onClick={handleAscend}>ascending</button>
                <button className='btn btn-outline btn-primary' onClick={handleDescend}>descending</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>seller</th>
                            <th>toy name</th>
                            <th>sub category</th>
                            <th>price</th>
                            <th>quantity</th>
                            <th>info</th>
                            <th>edit</th>
                            <th>delete</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                       {
                        myDatas.map((mydta,i)=><MyDataTable mydta={mydta} i={i} handleDelete={handleDelete}></MyDataTable>)
                       }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Mytoys;