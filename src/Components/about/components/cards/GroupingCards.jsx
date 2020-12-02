import React, { Component } from 'react'
import styled from 'styled-components'
const Container=styled.div`
    display:flex;
    flex-direction:column;
    color:white;
    @media only screen and (max-width: 767px) {
        flex-direction:row;
        flex-wrap:wrap;
        }
`
const Button=styled.div`
    font-family:'Inter';
    padding:10px 10px;
    margin:5px 5px;
    border-radius:3px;
    background:#1E1C24;
    font-size:25px;
    color:white;
    border:none;
    transition:0.3s;
`
const Title=styled.h3`
    font-family:'Inter';
    padding:10px 10px;
    margin:5px 5px;
    border-radius:3px;
    font-size:25px;
    color:white;

`
const InnerBar=styled.div`
background:#24212b;
display:flex;

flex-direction:row;
@media only screen and (max-width: 767px) {
    flex-direction:row;
    flex-wrap:wrap;
    }
`
export default class GroupingCards extends Component {

    render() {
        return (
            <Container>
                <InnerBar>
                    <Title>About Me & Interests:</Title>
                <Button>Gaming</Button>
                <Button>Design</Button>
                <Button>Traveling</Button>
                <Button>Music</Button>

                </InnerBar>
            </Container>
        )
    }
}
