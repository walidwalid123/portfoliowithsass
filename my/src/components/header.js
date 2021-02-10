import React from 'react'
import {link} from 'react-router-dom'


const header = () => {
    return (
        <div>
        <header className='header'>
                <div className='logo'>
                    <a href='/'>logo</a>
                </div>
                <input type="checkbox" className='menu-btn' id='menu-btn'/>
                    <label for='menu-btn' className='menu-icon'>
                    <span className='menu-icon__line'></span>
                </label>

                <ul className='nav-links'>

                        <li className='nav-link'>
                            <a href='About'>About</a>
                        </li>
                        
                        <li className='nav-link'>
                            <a href='Portfolio'>Portfolio</a>
                        </li>
                        
                        <li className='nav-link'>
                            <a href='Services'>Services</a>
                        </li>

                        <li className='nav-link'>
                            <a href='Contact'>Contact</a>
                        </li>
                </ul>
            </header>
            
        </div>
    )
}

export default header
