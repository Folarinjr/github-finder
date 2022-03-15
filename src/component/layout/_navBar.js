import React from 'react';
import  {FaGithub} from 'react-icons/fa';
import { Link } from 'react-router-dom';


const _navBar = ({title}) => {
    return ( 
    <nav className='navbar bg-primary'>
        <h1>
          <FaGithub style={{'marginRight':'.6rem'}} />
          {title}
        </h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
    </nav>
    );
  
}

_navBar.defaultProps = {
  title: 'GitHub Finder'
};

export default _navBar;


