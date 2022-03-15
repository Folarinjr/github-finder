import React, { useContext } from 'react';
import _UserItem from './_UserItem';
import _spinner from '../layout/_spinner';
import GithubContext from '../../context/github/githubContext';


const _Users = () => {
  const githubContext = useContext(GithubContext);

  const {loading, users}= githubContext;

  if(loading){
    return <_spinner/>
  }else{
    return <div style={userStyle}>
        {users.map(user =>(
        <_UserItem key={user.id} user={user}/>))}
    </div>
  }
    
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
};


export default _Users;
