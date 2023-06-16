import React, { useEffect, useState } from 'react';
import Alltoystable from './Alltoystable';
import UseTitle from './UseTitle';

const Alltoys = () => {
    const [allData, setAlldata] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [searchToy,setSearchToy]=useState("");
    UseTitle("all toys")
    useEffect(() => {
        fetch('https://toy-market-server-mu.vercel.app/alltoys')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAlldata(data);
            })
    }, [])
    const handleSearchToy=()=>{
        
        fetch(`https://toy-market-server-mu.vercel.app/searchtoyname/${searchToy}`)
        .then(res=>res.json())
        .then(data=>setAlldata(data))
    }
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='flex justify-center my-5'>
            
                <div className="form-control">
                    <div className="input-group">
                        
                        <input type="text"
                        onChange={(event)=>setSearchToy(event.target.value)} placeholder="Search…" className="input input-bordered" name='searchtag' />
                        <button className="btn btn-square" onClick={handleSearchToy}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                        
                    </div>
                </div>
                
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
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            isOpen ? <>{allData.map((toy, i) => <Alltoystable key={toy._id} toy={toy} i={i}></Alltoystable>)}</> : <>{allData.slice(0, 20).map((toy, i) => <Alltoystable key={toy._id} toy={toy} i={i}></Alltoystable>)}</>
                        }

                    </tbody>
                </table>
                <div className='text-center my-4'>{
                    isOpen ? <><button onClick={() => setIsOpen(!isOpen)} className='btn btn-outline btn-primary'>hide data</button></> : <><button onClick={() => setIsOpen(!isOpen)} className='btn btn-outline btn-primary'>all data</button></>
                }</div>
            </div>
        </div>
    );
};

export default Alltoys;