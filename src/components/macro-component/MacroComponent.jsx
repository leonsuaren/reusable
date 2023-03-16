import React from 'react';

import * as lay from '../../page-layout';
import * as styled from './index';

export const MacroComponent = ({ shape, position }) => {
  console.log(shape)
  return (
    <lay.Layout>
      <styled.MacroComponentStyled shape={shape} position={position}/>
      <styled.MacroComponentStyled shape={shape} position={position}/>
      <styled.MacroComponentStyled shape={shape} position={position}/>
    </lay.Layout>
  )
}