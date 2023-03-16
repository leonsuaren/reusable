import styled, { css } from 'styled-components';

const shape = ({ shape }) => {
  if (shape === 'avatar') {
    return css`
      border-radius: 50%;
      height: 200px;
      width: 200px;
    `;
  } else if (shape === 'product') {
    return css`
    border-radius: 5px;
    height: 200px;
    width: 200px;
  `;
  } else if (shape === 'stars') {
    return css`
    border-radius: 5px;
    height: 50px;
    width: 300px;
  `;
  } else if (shape === 'description') {
    return css`
      border-radius: 5px;
      height: 300px;
      width: 300px;
    `;
  } else if (shape === 'details') {
    return css`
      border-radius: 5px;
      width: 300px;
      @media (min-width: 320px) and (max-width:480px ) {
        height: 150px;
      }
      
      @media (min-width: 481px) and (max-width: 768px) {
        height: 80px;
      }
      
      @media (min-width: 769px) and (max-width: 1024px) {
        height: 100px;
      }
      
      @media (min-width: 1025px) {
        height: 100px;
      }
    `;
  } else if (shape === 'error') {
    return css`
      border-radius: 5px;
      height: 100px;
      width: 300px;
    `;
  }
}

const position = ({ position }) => {
  if (position === 'one') {
    return css`
      grid-area: avatar;
    `;
  } else if (position === 'two') {
    return css`
      grid-area: details;
    `;
  } else if (position === 'three') {
    return css`
      grid-area: description;
    `;
  }
}

export const MacroComponentStyled = styled.div`
  background-color: ${ props => props.theme.primaryThemeColor};
  align-items: center;
  justify-content: center;
  ${position};
  ${shape};
`;