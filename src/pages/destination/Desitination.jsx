import React, { useState } from 'react'
import './destination.css'


const Desitination = ({ destinations }) => {
  const [destIdx, setDestIdx] = useState(0)

  return (
    <div className='dest'>
      <div className="dest-container">
        <div className="top">
          <p className='title fs-s'><span className='dest-number fw-700'>01</span> PICK YOUR DESTINATION</p>
          <div className="image-wrapper">
            <img className="dest-image" src={destinations[destIdx].image} alt="moon" />
          </div>
        </div>
        <div className="dest-details">
          <div className="planets">
            <ul className='dest-list'>
              {
                destinations.map((dest,index)=> (
                  <li key={index} onClick={() => setDestIdx(index)} className={`planet ${destIdx === index ? 'active' : ''}`}>
                    <p className='dest-name text-uppercase fs-xs' style={{letterSpacing:'1.5px'}}>{dest.name}</p>
                  </li>
                ))
              }
            </ul>
          </div>
            <p className='fs-mb-xlg fw-400  belle fs-xlg text-uppercase text-mb-center' >{destinations[destIdx].name}</p>
          <div className="planetDetails">
            <p className='fs-mb-18 text-mb-center' style={{lineHeight:'1.5',letterSpacing:'1px'}}>{destinations[destIdx].description}</p>
          </div>
          <hr className='hr-break' />
              <div className="planet-info">
                <div className="distance">
                  <p className='fs-mb-14 text-uppercase text-mb-center fw-400'>avg. distance</p>
                  <h4 className='fs-mb-lg fs-s fw-400 text-uppercase belle text-mb-center'>{destinations[destIdx].distance}</h4>
                </div>
                <div className='travel-time'>
                  <p className='fs-mb-14 text-uppercase text-mb-center fw-400'>est. travel time</p>
                  <h4 className='fs-mb-lg fs-s fw-400 text-uppercase belle text-mb-center'>{destinations[destIdx].travel}</h4>
                </div>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Desitination
