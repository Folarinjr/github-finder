import React, {useContext} from 'react';
import  {FaInfoCircle} from 'react-icons/fa';
import AlertContext from '../../context/alert/alertContext';

const _alert = () => {
    const  alertContext = useContext(AlertContext);

    const {alert} = alertContext;
  return (
      alert !== null && (
          <div className={`alert alert-${alert.type}`}>
              <FaInfoCircle /> {alert.msg}
          </div>
      )
  )
};

export default _alert;
