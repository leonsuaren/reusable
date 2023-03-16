import React, { useState, useEffect } from 'react';

import * as com from '../../components';

export const Products = () => {
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSkeleton(false)
    }, 3000)
  });

  return (
    <div>
      {
        showSkeleton ? <com.Skeleton /> : <com.MacroComponent />
      }
    </div>
  )
}