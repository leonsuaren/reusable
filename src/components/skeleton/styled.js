import styled, { css } from 'styled-components';

export const SkeletonContainer = styled.div`
  @media (min-width: 320px) and (max-width:480px ) {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    width: 100%;
    height: 100%;
    justify-items: center;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    display: grid;
    grid-template-areas: 
    "avatar description"
    "details details";
    gap: 12px;
    -webkit-box-align: end;
    align-items: end;
    -webkit-box-pack: end;
    width: 100%;
    height: 100%;
    justify-items: center;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 30% 70%;
    grid-template-areas: 
    "avatar description"
    "details details";
    gap: 12px;
    -webkit-box-align: end;
    align-items: end;
    -webkit-box-pack: end;
    width: 100%;
    height: 100%;
    justify-items: center;
  }

  @media (min-width: 1025px) {
    display: grid;
    grid-template-columns: 30% 70%;
    grid-template-areas: 
    "avatar description"
    "details description";
    gap: 12px;
    -webkit-box-align: end;
    align-items: end;
    -webkit-box-pack: end;
    width: 100%;
    height: 100%;
    justify-items: center;
  }
`;

const skeletonSize = ({ size }) => {
  if (size === 'small') {
    return css`
      width: 100%;
      height: 50px;
      animation-delay: 2s;
      @media (min-width: 481px) and (max-width: 768px) {
        grid-area: description;
        height: 100px
      }
      @media (min-width: 769px) and (max-width: 1024px) {
        grid-area: description;
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
      height: 200px;
      @media (min-width: 481px) and (max-width: 768px) {
        grid-area: avatar;
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
      height: 300px;
      @media (min-width: 481px) and (max-width: 768px) {
        grid-area: details;
      }
      @media (min-width: 769px) and (max-width: 1024px) {
        grid-area: details;
        height: 500px
      }
      @media (min-width: 1025px) and (max-width: 1200px) {
        grid-area: description;
        height: 100%;
      }
    `;
  }
}

export const SkeletonStyled = styled.div`
  ${skeletonSize};
  background-color: ${ props => props.theme.primaryThemeColor };
  animation: skeleton-loading 1s ease-in infinite alternate-reverse;

  @keyframes skeleton-loading {
    0% {
      opacity: 0;
    }
    50% {
      opacity: .5;
    }
    100% {
      opacity: 1;
    }
  }
`;
