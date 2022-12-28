import styled from "styled-components";

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 293px;
  margin: auto;
  background: linear-gradient(
    144.39deg,
    #ffffff -278.56%,
    #6d6d6d -78.47%,
    #11101d 91.61%
  );
  backdrop-filter: blur(5px);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Wrapper = styled.div`
  width: 670px;
  height: 125px;
`;
const Maintext = styled.p`
  width: 670px;
  height: 67px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 67px;
  color: #ffffff;
  margin-bottom: 22px;
`;
const Subtext = styled.p`
  width: 445px;
  height: 58px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 29px;
  letter-spacing: 0.01em;
  color: rgba(255, 255, 255, 0.7);
`;
const Button = styled.button`
  width: 170px;
  height: 64px;
  background: linear-gradient(
    157.81deg,
    #def9fa -43.27%,
    #bef3f5 -21.24%,
    #9dedf0 12.19%,
    #7de7eb 29.82%,
    #5ce1e6 51.94%,
    #33bbcf 90.29%
  );
  border-radius: 10px;
`;
export { Container, Wrapper, Maintext, Subtext, Button };
