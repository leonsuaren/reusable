import styled from 'styled-components';

export const SkeletonStyled = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${ props => props.theme.primaryThemeColor }
`;