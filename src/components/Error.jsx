import React from 'react';
import { Link } from 'react-router-dom';
import UseTitle from './UseTitle';

const Error = () => {
    UseTitle("error-page");
    return (
        <div className='h-[100vh] p-10' style={{backgroundImage:`url("https://media.istockphoto.com/id/155354270/photo/error-404-wooden-mannequin-demonstrating-this-word.jpg?b=1&s=170667a&w=0&k=20&c=G4rxg3IbbvUpJqGTEuuF7n3diix6ryxveDxESTp0AGo=")`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            <div><Link to="/"><button className='btn btn-danger'>home</button></Link></div>
        </div>
    );
};

export default Error;