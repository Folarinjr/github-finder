import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';



 const _search = () => {
     const githubContext = useContext(GithubContext);
     const alertContext = useContext(AlertContext);


    const [text, setText] = useState('');

     const onSubmit = (e) => {
         e.preventDefault();

             if(text === ''){
           alertContext.setAlert('Please enter a user', 'light');
        } else{
            githubContext.searchUsers(text);
            setText('');
         }
         
     };

     const onChange = (e) => {
         setText(e.target.value);
     };
    
    return (
        <>

    <form onSubmit={onSubmit} className='form'>
        <input  
        type="text" 
        name='text' 
        placeholder='Search Users'
        value={text}
        onChange={onChange} />
        <input  
        type="submit" 
        value='search' 
        className='btn btn-dark btn-block' />
    </form>
    {githubContext.users.length > 0 && 
    <button className="btn btn-light btn-block" 
        onClick={githubContext.clearUsers}>Clear</button>}
    </>
    );
}



export default _search;