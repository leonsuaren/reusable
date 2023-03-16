import React, { useState, useEffect, Fragment } from 'react';

import * as com from '../../components';

export const Users = () => {
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSkeleton(false)
    }, 3000)
  });

  return (
    <Fragment>
      {
        showSkeleton ? <com.Skeleton /> : <com.MacroComponent />
      }
    </Fragment>
  )
}