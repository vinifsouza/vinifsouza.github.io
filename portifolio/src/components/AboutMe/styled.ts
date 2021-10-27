import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;

  padding: 1rem;
  margin: 0%;

  background: url('/assets/images/header-line.svg'), #0d141e;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
`;

export const ColLeft = styled.div`
  flex: 50%;
`;

export const ColRight = styled.div`
  flex: 50%;
  display: flex;
  align-items: center;
  justify-content: left;
  height: 100vh;
  width: 100vw;
`;

export const AboutMeContent = styled.div`
  display: block;
`;

export const Header = styled.div`
  font-size: 5rem;
`;
