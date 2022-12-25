import React, { Component } from 'react'
import { Container, ContainerWrapper, CarDeals, CardDealsWrapper, CardTitle, CardText, CardBtn, CardStatisticsWrapper, CardStatisticsWrapperImg } from './style'

export default class CardDeals extends Component {
    render() {
        return (
            <Container>
                <ContainerWrapper>
                    <CarDeals>
                        <CardDealsWrapper>
                            <CardTitle>Find a better card deal in few easy steps.</CardTitle>
                            <CardText>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</CardText>
                            <CardBtn>Get Started</CardBtn>
                        </CardDealsWrapper>
                        <CardStatisticsWrapper>
                            <CardStatisticsWrapperImg>

                            </CardStatisticsWrapperImg>
                        </CardStatisticsWrapper>
                    </CarDeals>
                </ContainerWrapper>
            </Container>
        )
    }
}
