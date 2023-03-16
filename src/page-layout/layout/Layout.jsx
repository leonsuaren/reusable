import React from 'react';

import * as styled from './index';

export const Layout = ({ children }) => {
  return (
    <styled.LayoutStyled>
      { children }
    </styled.LayoutStyled>
  )
}