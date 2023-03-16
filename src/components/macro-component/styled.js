import styled, { css } from 'styled-components';

const shape = ({ shape }) => {
  if (shape === 'avatar') {
    return css`
      border-radius: 50%;
      height: 200px;
    `;
  } else if (shape === 'details') {
    return css`
      border-radius: 5px;
      height: 100%;
    `;
  } else if (shape === 'stars') {
    return css`
      border-radius: 5px;
      height: 50px;
    `;
  } else if (shape === 'error') {
    return css`
      border-radius: 5px;
      height: 100px;
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


// export const MacroComponentContainer = styled.div`
//     @media (min-width: 320px) and (max-width:480px ) {
//     display: grid;
//     grid-template-areas: 
//     "sectionOne"
//     "sectionTwo"
//     "sectionThree";
//     gap: 12px;
//     align-items: center;
//     justify-content: center;
//     width: 100%;
//     height: 100%;
//     min-height: 100%;
//   }
// `;

export const MacroComponentStyled = styled.div`
  background-color: ${ props => props.theme.primaryThemeColor};
  ${position};
  ${shape};
`;