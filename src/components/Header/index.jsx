import React, { Component } from "react";
import { Wrapper, Headliner, Generation, Container, Header, P } from "./style";
class HEADER extends Component {
  render() {
    return (
        <Container>
          <Wrapper>
            <Headliner>
              <img
                src={require("../../assets/images/Discount.png")}
                alt="fireSpot"
              />
              <p>20% DISCOUNT FOR 1 MONTH ACCOUNT</p>
            </Headliner>
            <Header>
              The Next
              <img
                className="Headerimg"
                src={require("../../assets/images/Headerimg.png")}
                alt=""
              />
              <Generation>Generation</Generation> Payment Method.
            </Header>
            <P>
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </P>
          </Wrapper>
          <img
            className="robothand"
            src={require("../../assets/images/robothand.png")}
            alt=""
          />
        </Container>
    );
  }
}
export default HEADER;
