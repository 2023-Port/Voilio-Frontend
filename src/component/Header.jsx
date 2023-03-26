import React from 'react';
import { BsChatRightHeart, BsSuitHeart, BsPersonCircle, BsSearch } from 'react-icons/bs'

import './header.css'


const Header = () => {
    return (
        <div className='header'>
        <div className='logoArea'>
            <img className='headerLogo' src={'asset/voilio.png'}></img>
        </div>
        <div className='search-InputArea'>
            <input
                type = 'search'
                placeholder='검색'
                className='searchInput' />
            <div className='searchBtn-box'>
                <BsSearch className='topIcon-search' size='1.2rem' ></BsSearch> 
            </div>
        </div>
        <div className='topMenuArea'>
            <BsSuitHeart className='topIcon' size='1.5rem'></BsSuitHeart>
            <BsChatRightHeart className='topIcon'size='1.5rem'></BsChatRightHeart>
            <BsPersonCircle className='topIcon'size='1.5rem'></BsPersonCircle>
        </div>
    </div>
    );
};

export default Header;