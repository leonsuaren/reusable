import styled from 'styled-components';

export const Container = styled.div`
  @media (min-width: 320px) and (max-width:480px ) {
    margin: 30px;
    height: 100vh;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    margin: 30px 50px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    margin: 50px 100px;
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
    margin: 50px 200px;
  }

  @media (min-width: 1201px) {
    margin: 50px 300px;
  }
`;