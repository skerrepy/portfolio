import React, { Component } from 'react'
import GroupingCards from './components/cards/GroupingCards'
import styled from 'styled-components'
import AboutMe from './components/cards/about-me/AboutMe';

const Container=styled.div`
    display:flex;
    flex-direction:column;
`
export default class About extends Component {
    render() {
        return (
            <Container>
                <GroupingCards  />
               <AboutMe/>
            </Container>
        )
    }
}
