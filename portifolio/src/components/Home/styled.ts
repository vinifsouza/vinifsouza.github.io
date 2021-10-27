import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;

  padding: 1rem;

  background: #090e12;
  color: #fff;
`;

export const ColLeft = styled.div`
  flex: 50%;
`;

export const ColRight = styled.div`
  flex: 50%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 100vh;

  img {
    width: 100%;
    mix-blend-mode: luminosity;
  }
`;

export const Salute = styled.div`
  display: block;
`;

export const Name = styled.div`
  font-size: 5rem;
`;
