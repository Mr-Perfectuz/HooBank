import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(#272727 100%, #11101d 100%);
`;

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 303px; 
  padding: 0 135px;
`;

const Headliner = styled.div`
  width: 388px;
  height: 32px;
  background: linear-gradient(125.17deg, #272727 0%, #11101d 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Header = styled.h1`
  position: relative;
`;
const Generation = styled.span`
  color: blue;
`;

const P = styled.p`
  width: 483px;
  height: 93px;
  font-weight: 400;
  font-size: 18px;
  line-height: 170%;
  color: rgba(255, 255, 255, 0.7);
`;
export { Wrapper, Headliner, Generation, Container, Header, P };
