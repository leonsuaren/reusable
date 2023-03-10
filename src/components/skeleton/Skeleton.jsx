import React from 'react';

import * as styled from './index';

export const Skeleton = () => {
  return (
    <styled.SkeletonContainer>
      <styled.SkeletonStyled size='medium' />
      <styled.SkeletonStyled size='small' />
      <styled.SkeletonStyled size='large' />
    </styled.SkeletonContainer>
  );
}