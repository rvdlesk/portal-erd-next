'use client'
import { useState } from 'react';
import { Tooltip } from '@ogticrd/ui-kit';
const StampBox = ({ src, title, href }) => {


  const handleOnClick = () => {
    window.open(href, '_blank');
  };


  return (
    <Tooltip title={title}>
    <div className="stamp-box" onClick={handleOnClick}>
        
      <a
        href={href}
        className="stamp stack-top"
        // title={title}
        onClick={(e) => e.preventDefault()}
      ></a>
      <iframe src={src} height="100" width="100"></iframe>
     
    </div>
    </Tooltip>
  );
};

export default StampBox;
