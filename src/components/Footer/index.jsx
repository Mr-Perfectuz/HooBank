import React, { Component } from "react";
import { Container, ContainerWrapper, WrapperMene, LogoImg, ImgLogo, TitleText, Subtitle, SubText, Line, Left, CopyRight, LeftSpan, Right, Icons} from "./style";
import Img from "../../Assets/Images/logo.png";
import Instagram from "../../Assets/Images/instagram.png"
import Twitter from "../../Assets/Images/twitter.png"
import Facebook from "../../Assets/Images/facebook.png"
import In  from "../../Assets/Images/In.png"

class Footer extends Component {
  render() {
    return (
      <Container>
        <ContainerWrapper>
          <WrapperMene>
          <LogoImg>
            <ImgLogo src={Img} alt="logo" />
            <TitleText>A new way to make the payments easy, reliable and secure.</TitleText>
          </LogoImg>
          <Subtitle>
            <SubText>Useful Links</SubText>
            <TitleText>Content</TitleText>
            <TitleText>How it Works</TitleText>
            <TitleText>Create</TitleText>
            <TitleText>Explore</TitleText>
            <TitleText>Terms & Services</TitleText>
          </Subtitle>
          <Subtitle>
            <SubText>Community</SubText>
            <TitleText>Help Center</TitleText>
            <TitleText>Partners</TitleText>
            <TitleText>Suggestions</TitleText>
            <TitleText>Blog</TitleText>
            <TitleText>Newsletters</TitleText>
          </Subtitle>
          <Subtitle>
            <SubText>Partner</SubText>
            <TitleText>Our Partner</TitleText>
            <TitleText>become a Partner</TitleText>
          </Subtitle>
          </WrapperMene>
          <Line></Line>
          <Left>
            <CopyRight>Copyright</CopyRight>
            <LeftSpan> &copy;</LeftSpan>
            <TitleText>2021 HooBank. All Right Reserved.</TitleText>
          </Left>
          <Right>
            <Icons src={Instagram} alt="ins" />
            <Icons src={Facebook} alt="ins" />
            <Icons src={Twitter} alt="ins" />
            <Icons src={In} alt="ins" />
          </Right>
        </ContainerWrapper>
      </Container>
    );
  }
}

export default Footer;
