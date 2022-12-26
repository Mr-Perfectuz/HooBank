import React, { Component } from 'react'

import { Container, ContainerWrapper, InfoSection, InfoNumber, InfoCompany } from './style';

export default class UserActive extends Component {
    render() {
        return (
            <Container>
                <ContainerWrapper>
                    <InfoSection>
                        <InfoNumber>3800+</InfoNumber>
                        <InfoCompany>user active</InfoCompany>
                        <InfoNumber>230+</InfoNumber>
                        <InfoCompany>trusted by company</InfoCompany>
                        <InfoNumber>$230M+</InfoNumber>
                        <InfoCompany>transaction</InfoCompany>
                    </InfoSection>
                </ContainerWrapper>
            </Container>
        )
    }
}
