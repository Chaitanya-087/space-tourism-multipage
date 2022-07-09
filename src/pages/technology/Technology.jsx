import React, { useState } from 'react'
import './technology.css'
import { useMediaQuery } from 'react-responsive'
const Technology = ({ technology }) => {
  const isMobile = useMediaQuery({ query: '(max-width:900px)' })
  const [idx, setIdx] = useState(0) // idx is the index of the current technology

  return (
    <section className='tech'>
      <div className='tech-container'>
        <div className='tech-heading' style={{fontSize:'20px'}}>
          <span className='tech-number'>03</span> space launch 101
        </div>
        <div className='tech-details'>
          <img className='tech-img' src={isMobile ? technology[idx].images.landscape : technology[idx].images.portrait} alt="" />
          <div className='tech-desc'>
            <div className='pick-tech'>
              <div className={`idx ${idx === 0 ? 'active' : ''}`} onClick={() => setIdx(0)}>1</div>
              <div className={`idx ${idx === 1 ? 'active' : ''}`} onClick={() => setIdx(1)}>2</div>
              <div className={`idx ${idx === 2 ? 'active' : ''}`} onClick={() => setIdx(2)}>3</div>
            </div>
            <div className='tech-info text-mb-center'>
              <div className='title text-mb-center text-uppercase'>
                <span className='fs-xs' style={{marginBottom:'20px',display:'inline-block'}}>the terminology... </span>
                <h1 className='title text-uppercase fs-mb-s fs-lg fw-400 belle' style={{ marginBottom: '10px',whiteSpace:'nowrap' }}>{technology[idx].name}</h1>
              </div>
              <p style={{ lineHeight: '1.5' }}>{technology[idx].description}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Technology
