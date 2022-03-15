import React from 'react';
import spinner from './spinner.gif';

const _spinner = () => {
  return (
  <>
      <img src={spinner} alt="Loading..." style={{width: '20rem', display:'block', margin:'auto'}} />
  </>
  );
};

export default _spinner
