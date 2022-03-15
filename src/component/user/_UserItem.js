import React from 'react';
import { Link } from 'react-router-dom';


const _UserItem = ({user}) => {
    /*
    state = {
        id: 'id',
        login: 'mojombo',
        avatar_url: '',
        html_url: ''
    };
    */
      const  {avatar_url,login} = props.user;
    return (
        <div className='card text-center'>
            <img src={avatar_url} alt="loading..." className='round-img'/>
            <h3>{login}</h3>
            <div>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
            </div>  
        </div>
    );

}


export default _UserItem;
