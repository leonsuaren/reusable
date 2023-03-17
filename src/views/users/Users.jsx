import React, { useState, useEffect, Fragment } from 'react';

import * as com from '../../components';

export const Users = () => {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const elements = [{ shape: 'avatar', position: 2000 }, { shape: 'details', position: 50 }, { shape: 'description', position: 35 }];


  useEffect(() => {
    setTimeout(() => {
      setShowSkeleton(false)
    }, 3000)
  });

  return (
    <Fragment>
      {
        showSkeleton ? <com.Skeleton /> : <com.MacroComponent elements={elements}/>
      }
    </Fragment>
  )
}