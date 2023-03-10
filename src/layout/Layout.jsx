import React from 'react';

import * as styled from './index';

export const Layout = ({ children }) => {
  return (
    <styled.Container>
      { children }
    </styled.Container>
  )
}