import React from 'react'
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className='flex flex-col items-center space-y-2'>
        <div class="custom-loader"></div>
        <p className='text-lg font-semibold text-bgDark'>Loading...</p>
    </div>
    
  );
}

export default Spinner