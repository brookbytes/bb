import React from 'react'
import "./Logo.css"
import { BsJournalCode } from "react-icons/bs";
import ExclamationLogo from './ExclamationLogo';

const Logo = () => {
  return (
    <div className='logo'>
      
        <h2>BrookBytes</h2>
        <ExclamationLogo className='icon'/>
    </div>
  )
}

export default Logo
