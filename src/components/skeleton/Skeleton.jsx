import React from 'react';

import * as lay from '../../page-layout';
import * as styled from './index';

export const Skeleton = () => {
  return (
    <lay.Layout>
      <styled.SkeletonStyled size='medium' />
      <styled.SkeletonStyled size='small' />
      <styled.SkeletonStyled size='large' />
    </lay.Layout>
  );
}