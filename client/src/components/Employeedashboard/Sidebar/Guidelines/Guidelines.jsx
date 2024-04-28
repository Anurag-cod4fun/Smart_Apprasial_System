import React from 'react';
import simple from '../Guidelines/DYPCOE & DYPIEMR Appraisal Guidelines_2022 (1).pdf';
import './Guidelines.css';

const Guidelines = () => {

  return (
    <div className='guidelines-container'>
      <h1 className='guidelines-header'>Guidelines for Appraisal Form</h1>
      <div>
        <iframe className='guidelines-iframe' src={simple}></iframe>
      </div>
    </div>
  );
};

export default Guidelines;
