import React, { useState, useEffect } from 'react';

import * as com from '../../components';

export const HighQuality = () => {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const elements = [{ shape: 'product', position: 'one' }, { shape: 'stars', position: 'two' }, { shape: 'description', position: 'three' }];

  useEffect(() => {
    setTimeout(() => {
      setShowSkeleton(false)
    }, 3000)
  });

  return (
    <div>
      {
        showSkeleton ? <com.Skeleton /> : <com.MacroComponent elements={elements} />
      }
    </div>
  )
}