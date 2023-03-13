import React from 'react'
import TopicBox from '../Components/TopicBox'
import './Home.css'
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <div>
        <div className="page">
          <h1 className='text'>
            University of Peradeniya
          </h1>
          <p className='paratext'> Laboratory Management</p>
        </div>
        <TopicBox Department="Electrical and Electronic">
        <p className='text'>
          <Link to="/Elect">
            <button className='button'>
              Shedule Labs
            </button>
            </Link>
            </p>
        </TopicBox>
        <TopicBox Department="Mechanical">
        <p>
          <Link to="/Mecha">
            <button className='button'>
              Shedule Labs
            </button>
            </Link>
            </p>
        </TopicBox>
        <TopicBox Department="Civil">
        <p>
          <Link to="/Civil">
            <button className='button'>
              Shedule Labs
            </button>
            </Link>
            </p>
        </TopicBox>
        <TopicBox Department="Manufacture">
        <p>
          <Link to='/Manu'>
            <button className='button'>
              Shedule Labs
            </button>
            </Link>
            </p>
        </TopicBox>
    </div>
  )
}
