import React from 'react'
import {Link} from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <div className="nav">
            
            <Link to="/">home</Link>
            {/* <Link to="/about">about</Link> */}
            <Link to={{pathname: '/about',state: {fromNavigation: true}}}>about</Link>
            
        </div>

)
}

export default Navigation
/*  <a href="/">Home</a>
    <a href="/about">About</a> 
    a 엘리먼트는 페이지 전체를 새로고침한다. 그래서 a엘리먼트 대신 Kink to="" 엘리먼트를 사용해준다.*/ 