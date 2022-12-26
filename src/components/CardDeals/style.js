import styled from "styled-components";
import BackgroundImg from "../../assets/images/CardBackground.png";
import OnlineAnalysis from "../../assets/images/onlineAnalysis.png";
import payMethods from "../../assets/images/payMethods.png";
import scanCreditCards from "../../assets/images/scanCreditCards.png";


const Container = styled('div')`
    width: 100%;
    height: 100%;
    background-color: var(--color-black);
`

const ContainerWrapper = styled('div')`
    max-width: 1440px;
    margin: auto;

`

const CarDeals = styled('div')`
    display: flex;
    justify-content: space-between;
    margin-top: 160px;
`
const CardDealsWrapper = styled('div')`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`
const CardTitle = styled('h1')`
    width: 900px;
`
const CardText = styled('p')`
    width: 490px;
    margin-top: 24px;
`
const CardBtn = styled('button')`
    width: 170px;
    color: var(--color-black);
    background-color: var(--color-blue);
    padding: 19px 33px;
    border: none;
    border-radius: 10px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    text-transform: capitalize;
    margin-top: 17px;
    margin-bottom: 78px;
`
const CardStatisticsWrapper = styled('div')`
    position: relative;
    width: 381px;
    height: 381px;
    background-size: contain;
    background:url(${BackgroundImg});
    margin-right: 67px;
    position: relative;

    &:after{
        content: "";
        position: absolute;
        width: 256px;
        height: 238px;
        background-image: url(${OnlineAnalysis});
        border-radius: 20px;
        left: 192px;
        top: 38px;
    }

    &:before{
        content: "";
        position: absolute;
        width: 262px;
        height: 140px;
        background-image: url(${payMethods});
        backdrop-filter: blur(5px);
        border-radius: 20px;
        bottom: -66px;
        left: 30px;
    }
`

const CardStatisticsWrapperImg = styled('div')`
    position: absolute;
    width: 191px;
    height: 158px;
    content: "";
    backdrop-filter: blur(5px);
    border-radius: 20px;
    background-image: url(${scanCreditCards});
    top: 81px;
    left: -63px;
`

export { Container, ContainerWrapper, CarDeals, CardDealsWrapper, CardTitle, CardText, CardBtn, CardStatisticsWrapper, CardStatisticsWrapperImg }