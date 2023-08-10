import React from 'react'

const WorksItem = ({item}) => {
  return (
   <div key={item.id} className="work__card">
        <img src={item.image} alt="work_image" className='work__img' />
        <h3 className="work__title">{item.title}</h3>
        <a href={item.link} className="work__button" >
            Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
   </div>
  )
}

export default WorksItem