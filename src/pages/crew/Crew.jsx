import React, { useState } from 'react'
import './crew.css';
const Crew = ({crewMembers}) => {
  const [crewIdx, setCrewIdx]= useState(0)
  return (
    <div className="body">
      <div className='crewContainer'>
        <div className="details">
          <div className="title">
            <p className='title fs-s'><span className='crew-number fw-700'>01</span> PICK YOUR CREW</p>
          </div>
          <div className="name">
            <p className='role'>{crewMembers[crewIdx].role}</p>
            <p className="name">{crewMembers[crewIdx].name}</p>
          </div>
          <div className="crewDetails">

          </div>
          <div className="nav">
            <ul className='nav-ul'>
              {
              crewMembers.map((people,index)=>(
                <li key={index} onClick={()=>setCrewIdx(index)} className='navigation' ><p>{people.name}</p></li>
              ))
              }
            </ul>
          </div>
        </div>
        <div className="imageWrapper">
          <img className="crew-image" src={crewMembers[crewIdx].image} alt="image" width='80%' height='80%'/>
        </div>
      </div>
    </div>
  )
}

export default Crew
