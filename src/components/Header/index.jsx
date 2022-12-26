import React, { Component } from "react";
import { Wrapper, Headliner, Generation, Container, Header, P } from "./style";
import stil from "./stil.css";
class HEADER extends Component {
  render() {
    return (
      <div>
        <Container>
          <Wrapper>
            <Headliner>
              <img
                src={require("../../Assets/Images/Discount.png")}
                alt="fireSpot"
              />
              <p>20% DISCOUNT FOR 1 MONTH ACCOUNT</p>
            </Headliner>
            <Header>
              The Next
              <img
                className="Headerimg"
                src={require("../../Assets/Images/Headerimg.png")}
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
            src={require("../../Assets/Images/robothand.png")}
            alt=""
          />
        </Container>
      </div>
    );
  }
}
export default HEADER;
