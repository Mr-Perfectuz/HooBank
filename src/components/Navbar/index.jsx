import React, { Component } from 'react'
import { NavbarStyle, Container, ContainerWrapper, Logo, LogoImg, NavbarSections, NavbarTitle } from './style';
import logoImg from "../Images/logo.png"

class Navbar extends Component {
    render() {
        return (
            <Container>
                <ContainerWrapper>
                    <NavbarStyle>
                        <Logo><LogoImg src={logoImg}></LogoImg></Logo>
                        <NavbarSections>
                            <NavbarTitle>Home</NavbarTitle>
                            <NavbarTitle>About Us</NavbarTitle>
                            <NavbarTitle>Features</NavbarTitle>
                            <NavbarTitle>Solution</NavbarTitle>
                        </NavbarSections>
                    </NavbarStyle>
                </ContainerWrapper>
            </Container>
        )
    }
}

export default Navbar;