import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/feedback.css'
function Feedback() {
    const [statevis,setstatevis] = useState(false)
    const [distvis,setdistvis] = useState(false)
    const [cityvis,setcityvis] = useState(false)
    const [stationvis,setstationvis] = useState(false)
    const [finalvis,setfinalvis] = useState(false)
    const navigate = useNavigate();
  return (
    <div className='feedback_body'>
        <form onSubmit={()=>{navigate("/Police")}}>
        <div className='feedback_form'>
            <div>
                <h1>Feedback Form</h1>
            </div>
            <div className='inner_sub'>
                <label>Name:</label>
                <input type='text' required></input>
            </div>
            <div className='inner_sub'>
                <label>Aadhar Number:</label>
                <input type='number' required></input>
            </div>
            <div className='inner_sub'>
            <label>Gender:</label>
                <select className={statevis?"":"placeh"} onChange={()=>setstatevis(true)} required>
                    <option className='placeh'>select the Gender</option>
                    <option className='noplace'>Male</option>
                    <option className='noplace'>Female</option>
                </select>
            </div>
            {statevis &&
            <div className='inner_sub'>
                <label>State</label>
                <select className={distvis?"":"placeh"} onChange={()=>setdistvis(true)} required>
                    <option className='placeh'>select the state</option>
                    <option className='noplace'>Rajasthan</option>
                    <option className='noplace'>Jaipur</option>
                </select>
            </div>
}
            {distvis &&
            <div className='inner_sub'>
                <label>District</label>
                <select className={cityvis?"":"placeh"} onChange={()=>setcityvis(true)} required>
                    <option className='placeh'>select the District</option>
                    <option className='noplace'>Anupgarh</option>
                    <option className='noplace'>Ajmer</option>
                </select>
            </div> 
            }
            {cityvis &&
            <div className='inner_sub'>
                <label>City</label>
                <select className={stationvis?"":"placeh"} onChange={()=>setstationvis(true)} required>
                    <option className='placeh'>select the District</option>
                    <option className='noplace'>Jaipur</option>
                    <option className='noplace'>Jodhpur</option>
                </select>
            </div> 
            }
            {stationvis &&
            <div className='inner_sub'>
                <label>Station List:</label>
                <select style={{width:"17vw"}} className={finalvis?"":"placeh"} onChange={()=>setfinalvis(true)} required>
                    <option className='placeh'>select the Police Station</option>
                    <option className='noplace'>Adarsh Nagar Police Station</option>
                    <option className='noplace'>Jawahar Nagar Police Station</option>
                </select>
            </div> 
            }
            {
            finalvis &&
            <button>Submit</button>
            }
        </div>
        </form>
    </div>
  )
}

export default Feedback
