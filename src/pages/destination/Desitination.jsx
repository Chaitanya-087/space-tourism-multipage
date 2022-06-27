import React from 'react'
import './destination.css'
import moon from '../../assets/destination/image-moon.webp'

const Desitination = () => {
  return (
    <div className='destContainer'>
      <div className="destDetails">
        <div className="image">
          <p><span>01</span> PICK YOUR DESTINATION</p>
          <img src={moon} alt="moon" width='80%' height='80%' />
        </div>
        <div className="details">
          <div className="planets">
            <ul className='list'>
              <li>
                <p>MOON</p>
              </li>
              <li>
                <p>MARS</p>
              </li>
              <li>
                <p>EUROPA</p>
              </li>
              <li>
                <p>TITAN</p>
              </li>
            </ul>
          </div>
          <div className="planetName">

          </div>
          <div className="planetDetails">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur natus dicta excepturi ab obcaecati, quas voluptatum neque eaque provident? Perspiciatis asperiores pariatur tempora reprehenderit laborum quidem deleniti, ut ipsam suscipit.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Desitination
