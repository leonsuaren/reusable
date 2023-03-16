import React from 'react';

import * as styled from './index';

export const Container = ({ children }) => {
  return (
    <styled.ContainerStyled>
      { children }
    </styled.ContainerStyled>
  )
}