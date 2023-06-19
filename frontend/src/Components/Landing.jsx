import React, {useRef} from 'react'
import logo from '../logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faUser, faGamepad } from '@fortawesome/free-solid-svg-icons'
import poster from '../rl.png'
function Landing() {
    const ref = useRef(null);
    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
      };
    

  return (
    <>
        <div className='landing'>
            <div className="logo">
                <img src={logo} className='logoimg' alt="something"/>
            </div> 
            <div className="head">
                <h2>WELCOME TO OUR</h2>
                <h1>ONLINE PLATFORM</h1>                
            </div>     
            <div className="landingbtn" onClick={handleClick}>
                <button>OUR EVENTS</button>
                <div className="icon">
                    <FontAwesomeIcon icon={faChevronDown} style={{color: "#ffffff",fontSize:'30px'}} />
                </div>
            </div>           
        </div>
        <div className="landevents">
            <div className="cards">
            <div className="eventcard">
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
            <div className="eventcard">
                <img src={poster} className='poster' alt="something"/>
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
            <div className="eventcard" ref={ref}>
                <img src={poster} className='poster' alt="something"/>
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
        <button className='viewallbtn'>VIEW ALL</button>
        </div>
    </>
  )
}

export default Landing