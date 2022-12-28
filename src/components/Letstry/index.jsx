import React, { Component } from "react";
import { Container, Wrapper, Maintext, Subtext, Button } from "./styled";
class Letstry extends Component {
  render() {
    return (
        <Container>
          <Wrapper>
            <Maintext>Let’s try our service now!</Maintext>
            <Subtext>
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </Subtext>
          </Wrapper>
          <Button> Get Started</Button>
        </Container>
    );
  }
}

export default Letstry;
