import React, { useState, useEffect } from 'react';

import * as com from '../../components';

export const Products = ({ id }) => {
  const [showSkeleton, setShowSkeleton] = useState(true);
  console.log(id)
  useEffect(() => {
    setTimeout(() => {
      setShowSkeleton(false)
    }, 3000)
  });

  return (
    <div>
      {
        showSkeleton ? <com.Skeleton /> : <com.MacroComponent id={id}/>
      }
    </div>
  )
}