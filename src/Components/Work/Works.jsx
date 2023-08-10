import React, { useEffect, useState } from 'react';
import { Data } from './Data';
import { Nav } from './Data';
import WorksItem from './WorksItem';
import { Reorder } from "framer-motion" 

const Works = () => {
    const [items, setItems] = useState([0, 1, 2, 3])

    const [item,setItem] = useState({name:'all'});
    const [projects,setProjects] = useState([]);
    const [active,setActive]  =useState(0);

    useEffect(()=>{
        if(item.name === "all"){
            setProjects(Data)
        }
        else{
            const newProjects  = Data.filter((project)=>{
                return project.category.toLowerCase() === item.name;
        });
        setProjects(newProjects);
        }
    },[item]);

    const handleClick = (e,index)=>{
        setItem({name:e.target.textContent.toLowerCase()});
        setActive(index);
    };

  return (
  <div>
     <div className="work__filters">
        {Nav.map((item,index)=>{
            return(
                <span onClick={(e)=>{
                    handleClick(e,index);
                }} key={index} className={`${active === index ? 'active-work' : ''} work__item `}>
                    {item.name}</span>

            )
        })}
   </div>

   <div  className="work__container container grid">
   {/* <Reorder.Group axis="y" values={items} onReorder={setItems}> */}
        {   
            projects.map((item)=>{
                // <Reorder.Item key={item} value={item}>
                return <WorksItem item={item} key={item.id}/>
                // </Reorder.Item>  
            })
        }
    {/* </Reorder.Group> */}
   </div>
  </div>
  )
}

export default Works