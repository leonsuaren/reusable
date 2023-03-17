import React, { useState, useEffect } from 'react';

import * as com from '../../components';

export const Products = () => {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const element = [{ shape: 'product', position: 'one' }, { shape: 'details', position: 'two' }, { shape: 'description', position: 'three' }];

  useEffect(() => {
    setTimeout(() => {
      setShowSkeleton(false)
    }, 3000)
  });

  return (
    <div>
      {
        showSkeleton ? <com.Skeleton /> : <com.MacroComponent elements={element}/>
      }
    </div>
  )
}