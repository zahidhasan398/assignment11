import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Subdatainfo from './Subdatainfo';

const TabsItems = () => {
    const [subDatas, setSubDatas] = useState([]);
    const [defaultData,setDefaultData]=useState([]);
    useEffect(()=>{
        fetch('https://toy-market-server-mu.vercel.app/category/sports')
        .then(res=>res.json())
        .then(data=>setDefaultData(data))
    },[])
    const handleCar = (subcategory) => {
        console.log(subcategory);
        fetch(`https://toy-market-server-mu.vercel.app/category/${subcategory}`)
            .then((res) => res.json())
            .then(data => setSubDatas(data)
            )
    }
    return (
        <div className='max-w-7xl mx-auto'>
            <Tabs>
                <TabList>
                    <Tab onClick={() => handleCar("sports")}>sports car</Tab>
                    <Tab onClick={() => handleCar("regular")}>regular car</Tab>
                    <Tab onClick={() => handleCar("deffence")}>deffence car</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid md:grid-cols-2 md:gap-20 grid-cols-1'>
                        {subDatas == [] ? subDatas.map(subdata => <Subdatainfo key={subdata._id} subdata={subdata}></Subdatainfo> 
                         ) : defaultData.map(subdata => <Subdatainfo key={subdata._id} subdata={subdata}></Subdatainfo> 
                         )}
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-2 md:gap-20 grid-cols-1 '>
                        {subDatas.map(subdata => <Subdatainfo key={subdata._id} subdata={subdata}></Subdatainfo>)}
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-2 md:gap-20 grid-cols-1'>
                        {subDatas.map(subdata => <Subdatainfo key={subdata._id} subdata={subdata}></Subdatainfo>)}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabsItems;