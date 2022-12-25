import styled from "styled-components";

const Container = styled('div')`
    width: 100%;
    height: 100%;
    background-color: var(--color-black);
`

const ContainerWrapper = styled('div')`
    max-width: 1440px;
    padding: 0 135px;
    margin: auto;
`

const NavbarStyle = styled('div')`
    width: 1170px;
    height: 32px;
    margin-top: 30px;
    display: flex;
    align-items: center;
`
const Logo = styled('a')`
    width: 120px;
    height: 32px;
    display: block;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    };
    &:active{
        opacity: 0.6;
    };
`
const LogoImg = styled.img`
    width: 120px;
    height: 32px;
`

const NavbarSections = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;

`
const NavbarTitle = styled('p')`

    &:not(:first-child) {
    margin-left: 56px;
    opacity: 0.8;
  }
    color: var(--color-white);
    cursor: pointer;
    &:hover{
        opacity: 0.7;
    };
    &:active{
        opacity: 0.6;
    };


`
export { NavbarStyle, Container, ContainerWrapper, Logo, LogoImg, NavbarSections, NavbarTitle }