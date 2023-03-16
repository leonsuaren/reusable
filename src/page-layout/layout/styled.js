import styled from 'styled-components';

export const LayoutStyled = styled.div`
  @media (min-width: 320px) and (max-width:480px ) {
    display: grid;
    grid-template-areas: 
    "avatar"
    "details"
    "description";
    gap: 12px;
    width: 100%;
    height: 100%;
    max-height: 100vh;
    min-height: 50px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    display: grid;
    grid-template-areas: 
    "avatar description"
    "details details";
    gap: 12px;
    align-items: flex-start;
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