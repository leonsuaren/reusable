import styled, { css, keyframes } from 'styled-components';

const skeletonSize = ({ size }) => {
  if (size === 'small') {
    return css`
      width: 100%;
      animation-delay: 2s;
      @media (min-width: 320px) and (max-width:480px ) {
        grid-area: details;
        height: 100px;
      }
      @media (min-width: 481px) and (max-width: 768px) {
        grid-area: details;
        height: 100px
      }
      @media (min-width: 769px) and (max-width: 1024px) {
        grid-area: details;
        height: 100px
      }
      @media (min-width: 1025px) {
        grid-area: details;
        height: 150px;
      }
    `;
  } else if (size === 'medium') {
    return css`
      width: 100%;
      @media (min-width: 320px) and (max-width:480px ) {
        grid-area: avatar;
        height: 200px;
      }
      @media (min-width: 481px) and (max-width: 768px) {
        grid-area: avatar;
        height: 200px;
      }
      @media (min-width: 769px) and (max-width: 1024px) {
        grid-area: avatar;
        height: 300px
      }
      @media (min-width: 1025px) {
        grid-area: avatar;
        height: 300px;
      }
    `;
  } else if (size === 'large') {
    return css`
      width: 100%;
      @media (min-width: 320px) and (max-width:480px ) {
        grid-area: description;
        height: 300px;
      }
      @media (min-width: 481px) and (max-width: 768px) {
        grid-area: description;
        height: 300px;
      }
      @media (min-width: 769px) and (max-width: 1024px) {
        grid-area: description;
        height: 500px
      }
      @media (min-width: 1025px) {
        grid-area: description;
        height: 100%;
      }
    `;
  }
}

const skeletonLoading = keyframes`
    0% {
      opacity: 0;
    }
    50% {
      opacity: .5;
    }
    100% {
      opacity: 1;
    }
`;

export const SkeletonStyled = styled.div`
  ${skeletonSize};
  width: 300px;
  border-radius: 5px;
  background-color: ${ props => props.theme.primaryThemeColor};
  animation: ${skeletonLoading} 1s ease-in infinite alternate-reverse;
`;
