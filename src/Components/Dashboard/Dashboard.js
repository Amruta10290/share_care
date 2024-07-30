import React from 'react'
import Signup from '../../Components/Signup1'
import img from '../../images/mock11 6.51.32 PM.jpg'
import Button from '@mui/material/Button';
const Dashboard = () => {
  return (
    <div className='main'>
        <div className='left'>
            <img src={img}/>
        </div>
        <div className='right'>
       
          <Signup/>
        </div>
    </div>
  )
}

export default Dashboard