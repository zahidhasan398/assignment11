import React from 'react';
import { Link } from 'react-router-dom';

const Alltoystable = ({toy,i}) => {
    const {sellerName,name,subcategory,price,quantity,_id}=toy;
    return (
        <tr>
            <th>{i+1}</th>
            <td>{sellerName}</td>
            <td>{name}</td>
            <td>{subcategory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><Link to={`/viewdetails/${_id}`}><button className='btn btn-outline btn-success'>view details</button></Link></td>
        </tr>
    );
};

export default Alltoystable;