import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrash,FaEdit} from "react-icons/fa";

const MyDataTable = ({mydta,i,handleDelete}) => {
    const {sellerName,name,subcategory,price,quantity,_id}=mydta;
    
    
    return (
        <tr>
            <th>{i+1}</th>
            <td>{sellerName}</td>
            <td>{name}</td>
            <td>{subcategory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><Link to={`/viewdetails/${_id}`}><button className='btn btn-outline btn-success'>view details</button></Link></td>
            <td>
                <Link to={`/update/${_id}`}><button><FaEdit className='text-2xl'></FaEdit></button></Link></td>
            <td><button onClick={()=>handleDelete(_id)}><FaTrash className='text-2xl text-red-500'></FaTrash></button></td>
        </tr>
    );
};

export default MyDataTable;