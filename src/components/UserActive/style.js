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
const InfoSection = styled('div')`
    max-width: 1152px;
    padding: 0 135px;
    margin-top: 80px;

    display: flex;
    align-items: center;

`
const InfoNumber = styled('h5')`
    color: var(--color-white);
    margin-right: 25px;
`
const InfoCompany = styled('p')`
    color: var(  --color-blue);
    text-transform: uppercase;
    margin-right: auto;

    &:not(:last-child){
        &:after{
        width: 10px;
        height: 0cm;
        color: var(--color-white);;
        content: "|";
        margin-left: 50px;
        opacity: 0.6;
    };
    }

`

export { Container, ContainerWrapper, InfoSection, InfoNumber, InfoCompany }
