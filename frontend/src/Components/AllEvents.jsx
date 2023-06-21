import React from 'react'
import logo from '../logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faUser, faGamepad } from '@fortawesome/free-solid-svg-icons'
import poster from '../rl.png'
function AllEvents() {
  return (
    <>
    <div className="alleventcont">
      <div className="alleventheader">        
        <img src={logo} className='logoimg' alt="something"/>        
        <div className="alleventhead">
          <p>ALL OF OUR EVENTS</p>
        </div>
      </div>
      <div className="alleventbody">
        <div className="eventcard mt-5">
          <img src={poster} className='poster'  alt="something"/>
          <div className='eventdiv'>
              <div className='eventtitle'>
                  <h1>AVALANCHE</h1>
              </div>
              <div className="cardcont">
                  <div className="part">
                      <FontAwesomeIcon icon={faUser} style={{color: "#ffffff", marginRight:'10px',marginTop:'5px'}} />
                      <p>50</p>
                  </div>
                  <div className="game">
                      <FontAwesomeIcon icon={faGamepad} style={{color: "#ffffff",marginRight:'10px', marginTop:'5px'}} />                            
                      <p>VALORANT</p>
                  </div>
              </div>
          </div>
        </div>
        <div className="eventcard mt-5 ">
          <img src={poster} className='poster'  alt="something"/>
          <div className='eventdiv'>
              <div className='eventtitle'>
                  <h1>AVALANCHE</h1>
              </div>
              <div className="cardcont">
                  <div className="part">
                      <FontAwesomeIcon icon={faUser} style={{color: "#ffffff", marginRight:'10px',marginTop:'5px'}} />
                      <p>50</p>
                  </div>
                  <div className="game">
                      <FontAwesomeIcon icon={faGamepad} style={{color: "#ffffff",marginRight:'10px', marginTop:'5px'}} />                            
                      <p>VALORANT</p>
                  </div>
              </div>
          </div>
        </div>
        <div className="eventcard mt-5">
          <img src={poster} className='poster'  alt="something"/>
          <div className='eventdiv'>
              <div className='eventtitle'>
                  <h1>AVALANCHE</h1>
              </div>
              <div className="cardcont">
                  <div className="part">
                      <FontAwesomeIcon icon={faUser} style={{color: "#ffffff", marginRight:'10px',marginTop:'5px'}} />
                      <p>50</p>
                  </div>
                  <div className="game">
                      <FontAwesomeIcon icon={faGamepad} style={{color: "#ffffff",marginRight:'10px', marginTop:'5px'}} />                            
                      <p>VALORANT</p>
                  </div>
              </div>
          </div>
        </div>
        <div className="eventcard mt-5">
          <img src={poster} className='poster'  alt="something"/>
          <div className='eventdiv'>
              <div className='eventtitle'>
                  <h1>AVALANCHE</h1>
              </div>
              <div className="cardcont">
                  <div className="part">
                      <FontAwesomeIcon icon={faUser} style={{color: "#ffffff", marginRight:'10px',marginTop:'5px'}} />
                      <p>50</p>
                  </div>
                  <div className="game">
                      <FontAwesomeIcon icon={faGamepad} style={{color: "#ffffff",marginRight:'10px', marginTop:'5px'}} />                            
                      <p>VALORANT</p>
                  </div>
              </div>
          </div>
        </div>
        <div className="eventcard mt-5">
          <img src={poster} className='poster'  alt="something"/>
          <div className='eventdiv'>
              <div className='eventtitle'>
                  <h1>AVALANCHE</h1>
              </div>
              <div className="cardcont">
                  <div className="part">
                      <FontAwesomeIcon icon={faUser} style={{color: "#ffffff", marginRight:'10px',marginTop:'5px'}} />
                      <p>50</p>
                  </div>
                  <div className="game">
                      <FontAwesomeIcon icon={faGamepad} style={{color: "#ffffff",marginRight:'10px', marginTop:'5px'}} />                            
                      <p>VALORANT</p>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AllEvents