import React from 'react';
import _Repo from './_Repo';

export const _Repos = ({repos}) => {
  return repos.map(repo => <_Repo repo={repo} key={repo.id}/>);
};


export default _Repos;