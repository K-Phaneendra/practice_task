import React from 'react';
import { useLocation } from 'react-router-dom';

function PageSummary({}) {
  const location = useLocation();
  console.log(location)
  return (
    <div>
      Under construction
    </div>
  );
};

export default PageSummary;
