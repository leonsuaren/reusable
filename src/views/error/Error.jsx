import React from 'react';

import * as com from '../../components';

export const Error = () => {
  const elements = [{ shape: 'error', position: 'two' }];

  return (
      <com.MacroComponent elements={elements}/>
  )
}