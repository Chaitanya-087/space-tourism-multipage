import React from 'react'
import './home.css'

const Home = () => {
  return (
    <main className='home'>
      <div className='home-content-wrapper'>
        <div className="home-content-left">
          <p className='fs-s fs-mb-s text-uppercase text-mb-center' style={{lineHeight:'2'}}>so, you want to travel to space</p>
          <h1 className='fs-xlg fs-mb-xxlg text-uppercase fw-400 belle text-mb-center'>space</h1>
          <p className='fs-16 text-mb-center fs-mb-18' style={{lineHeight:'2',letterSpacing:'1.2px'}}>Let's face it; if you want to go to space you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back and relax because we'll give you a truly out of this world experience!</p>
        </div>
        <div className='home-content-right'>
          <div className="circle">
            <h2 className='fs-s fw-500 text-uppercase' style={{color:'var(--clr-primary-black)'}}>explore</h2>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
