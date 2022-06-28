import React, { useState } from 'react'
import './crew.css';
const Crew = ({ crewMembers }) => {
  const [crewIdx, setCrewIdx] = useState(0)

  return (
    <div className="crew">
      <div className='crewContainer'>
        <div className="crewHeading">
          <p className='title fs-mb-s fw-400 '><span className='crew-number fw-700 fs-mb-s' style={{ color: 'grey' }}>02</span> PICK YOUR CREW</p>
        </div>
        <div className='crewDetailsWrapper'>
          <div className="details">
            <div className="crewInfo">
              <p className='role text-mb-center fs-mb-16 fs-s text-uppercase fw-400 belle' style={{ opacity: '0.5',letterSpacing:'1.2px' }}>{crewMembers[crewIdx].role}</p>
              <p className="name text-mb-center fs-lg fs-mb-s text-uppercase belle fw-400">{crewMembers[crewIdx].name}</p>
              <div className="crewDetails text-mb-center" style={{ lineHeight: '1.2', letterSpacing: '1px' }}>
                {crewMembers[crewIdx].bio}
              </div>
            </div>

              <div className="blobs">
                {
                  crewMembers.map((mem, index) =>
                    <div key={mem.name} className={`blob ${crewIdx === index ? 'active' : ''}`} onClick={() => setCrewIdx(index)}></div>
                  )
                }
              </div>
          </div>
          <div className="imageWrapper">
            <img className="crew-image" src={crewMembers[crewIdx].image} alt="crew" width='80%' height='80%' />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Crew
