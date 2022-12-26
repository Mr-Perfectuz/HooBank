import styled from "styled-components";


const Container = styled('div')`
    width: 100%;
    height: 418px;
    background-color: #0b0a0c;
`
const ContainerWrapper = styled('div')`
max-width: 1440px;
margin: auto;
align-items: center;
`
const WrapperMene =styled("div")`
   display: flex;
   justify-content: space-around;
   padding: 70px 0;
`
const LogoImg = styled("div")`

`
const ImgLogo = styled("img")`
    margin-bottom: 25px;
    font-size: 16px;`

const TitleText =styled("p")`

`
const Subtitle = styled('div')`
`
const SubText = styled('h5')`
   margin-bottom: 25px;
`
const Line = styled("span")`
    width: 1400px;
    display: block;
    margin: auto;
    height: 1px;
    border: 1px solid #3F3E45; 
`
const Left = styled('div')`
    float: left;
    display: flex;
    padding: 20px;
`
const CopyRight =styled('p')`
font-size: 16px;
font-family: "Abel";
font-weight: 400;
line-height: 150%; 
`
const LeftSpan = styled('span')`
    color: white;
    padding: 0 15px;
`
const Right = styled('div')`
float: right;
width: 150px;
padding: 20px;
display: flex;
align-items: center;
margin-right: 60px;
`
const Icons = styled('img')`
padding-right:  25px;
color: white;
`

export {Container, ContainerWrapper, WrapperMene,LogoImg, ImgLogo, TitleText, Subtitle, SubText, Line, Left, CopyRight, LeftSpan, Right, Icons};