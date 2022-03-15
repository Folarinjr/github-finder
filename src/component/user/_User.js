import React, { useContext, useEffect } from 'react';
import _Repos  from '../Repos/_Repos';
import _spinner from '../layout/_spinner';
import { Link } from 'react-router-dom';
import { FaCheck, FaTimes } from 'react-icons/fa';
import GithubContext from '../../context/github/githubContext';

const _User = ({match}) => {

    const githubContext = useContext(GithubContext);

    const {loading, user, getUserRepos, getUser, repos}  = githubContext;

    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        //eslint-disable-next-line
    }, []);
        const {
            name,
            avatar_url,
            company,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        }=user;

        if(loading){return <_spinner/>};
    return( <>
        <Link to='/' className='btn btn-light'>Go Back</Link>
        Hireable: {' '}
        {hireable ? <FaCheck className='text-success'/>: <FaTimes className='text-danger'/>}

        <div className="card grid-2">
            <div className="all-center">
            <img src={avatar_url} alt="pic"className='round-img' style={{width: '45%'}} />
            <h1>{name}</h1>
            <p>Location: {location}</p>
            </div>
            <div className="">
                {bio && <>
                <h3>Bio</h3>
                <p>{bio}</p>
                </>}
                <a href={html_url} className='btn btn-dark my-1'>Visit My Github profile</a>
                <ul>
                    <li>
                        {login && <>
                        <strong>Username:</strong> {login}
                        </>}
                    </li>
                    <li>
                        {company && <>
                        <strong>Company:</strong> {company}
                        </>}
                    </li>
                    <li>
                        {blog && <>
                        <strong>Website:</strong> {blog}
                        </>}
                    </li>
                </ul>
            </div>
        </div>
        <div className="card text-center">
            <div className="badge badge-primary">Followers: {followers}</div>
            <div className="badge badge-success">Following: {following}</div>
            <div className="badge badge-danger">Public Repos: {public_repos}</div>
            <div className="badge badge-dark">Public Gists: {public_gists}</div>
        </div>
        <_Repos repos={repos} />
        </>);
}

export default _User;
